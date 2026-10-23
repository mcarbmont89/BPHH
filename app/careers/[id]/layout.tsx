import type { Metadata } from "next"
import { cmsGet, truncate } from "@/lib/site"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const career = await cmsGet(`/api/careers/${encodeURIComponent(params.id)}?depth=0&locale=es`)
  const canonical = `/careers/${params.id}`
  if (!career?.position) return { title: "Vacante", alternates: { canonical } }

  const title = career.location ? `${career.position} · ${career.location}` : String(career.position)
  const description = truncate(
    `Vacante de ${career.position}${career.location ? ` en ${career.location}` : ""} gestionada por Botic Partners. Consulta los requisitos y envía tu candidatura.`,
  )

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "article" },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
