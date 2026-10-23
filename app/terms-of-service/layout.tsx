import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de servicio",
  description: "Términos de servicio de Botic Partners.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: { title: "Términos de servicio", description: "Términos de servicio de Botic Partners.", url: "/terms-of-service" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
