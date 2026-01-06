import { z } from "zod";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

const TalentFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  source: z.string().optional(),
});

export type TalentFormInput = z.infer<typeof TalentFormSchema>;

export async function submitTalentForm(input: TalentFormInput) {
  const parsed = TalentFormSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, error: "Invalid data", issues: parsed.error.issues };
  }

  if (!CMS_URL) {
    return { ok: false as const, error: "Missing NEXT_PUBLIC_CMS_URL" };
  }

  const url = `${CMS_URL.replace(/\/$/, "")}/api/talent`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!res.ok) {
      const details = await res.text().catch(() => "");
      return { ok: false as const, error: `Payload error (${res.status})`, details };
    }

    const data = await res.json().catch(() => null);
    return { ok: true as const, data };
  } catch (err: any) {
    return { ok: false as const, error: "Network error", details: String(err?.message ?? err) };
  }
}
