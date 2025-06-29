import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Botic Partners - AI-Powered Talent Matching",
  description:
    "Transform your recruitment process with our AI-powered talent matching solution. Find the perfect talent faster and more efficiently.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/botic%20long-Uu1ik81vsOqA55IYRxP8xIzHs4xpzU.png"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        {/* Background Video - Enhanced for mobile */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-2]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-70 sm:opacity-60"
            style={{
              filter: "brightness(1.1) contrast(1.3) saturate(1.2)",
            }}
          >
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>

          {/* Enhanced fallback for mobile when video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 via-blue-500/50 to-purple-600/50 animate-pulse opacity-30" />

          {/* Additional animated background for mobile */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Very light overlay to ensure readability */}
        <div className="fixed inset-0 bg-black/5 pointer-events-none z-[-1]" />

        <LanguageProvider>
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  )
}
