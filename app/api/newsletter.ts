const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

export async function subscribeToNewsletter(email: string) {
  if (!CMS_URL) throw new Error("NEXT_PUBLIC_CMS_URL is not set");

  const res = await fetch(`${CMS_URL}/api/newsletter-subscribers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    let msg = "Newsletter subscription failed";
    try {
      const data = await res.json();
      msg = data?.errors?.[0]?.message || data?.message || msg;
    } catch {}
    throw new Error(msg);
  }

  return res.json();
}
