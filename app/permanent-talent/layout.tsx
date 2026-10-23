import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Headhunting de talento permanente",
  description: "Headhunting para cualquier industria y rol: búsqueda de talento pasivo con IA y criterio humano, con un proceso claro y transparente.",
  alternates: { canonical: "/permanent-talent" },
  openGraph: { title: "Headhunting de talento permanente", description: "Headhunting para cualquier industria y rol: búsqueda de talento pasivo con IA y criterio humano, con un proceso claro y transparente.", url: "/permanent-talent" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
