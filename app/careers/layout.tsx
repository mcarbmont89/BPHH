import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vacantes abiertas",
  description: "Ofertas de empleo activas gestionadas por Botic Partners en Europa y Latinoamérica. Descubre las posiciones abiertas y envía tu candidatura.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Vacantes abiertas", description: "Ofertas de empleo activas gestionadas por Botic Partners en Europa y Latinoamérica. Descubre las posiciones abiertas y envía tu candidatura.", url: "/careers" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
