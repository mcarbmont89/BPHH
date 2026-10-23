import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vacantes cerradas",
  description: "Procesos de selección ya cerrados por Botic Partners.",
  alternates: { canonical: "/careers/closed" },
  openGraph: { title: "Vacantes cerradas", description: "Procesos de selección ya cerrados por Botic Partners.", url: "/careers/closed" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
