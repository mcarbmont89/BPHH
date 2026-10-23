export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://boticpartners.com").replace(/\/+$/, "")
export const SITE_NAME = "Botic Partners"
export const DEFAULT_DESCRIPTION =
  "Firma de headhunting AI-native. Selección de talento cualificado en Europa y Latinoamérica, scouting estratégico de empresas y automatización de procesos con IA."

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL?.replace(/\/+$/, "")

/** Lectura ligera del CMS para metadatos y sitemap. Nunca lanza: devuelve null si falla. */
export async function cmsGet(path: string): Promise<any | null> {
  if (!CMS_URL) return null
  try {
    const res = await fetch(`${CMS_URL}${path}`, { next: { revalidate: 3600 } })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export function truncate(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim()
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean
}
