import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Botic Partners.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Política de privacidad", description: "Política de privacidad de Botic Partners.", url: "/privacy-policy" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
