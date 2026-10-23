import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos de Botic Partners sobre talento, headhunting, mercado laboral e inteligencia artificial aplicada a la selección.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog", description: "Artículos de Botic Partners sobre talento, headhunting, mercado laboral e inteligencia artificial aplicada a la selección.", url: "/blog" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
