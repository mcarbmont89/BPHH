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
        {/* Background Video */}
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-30 blur-[1px]"
            style={{
              filter: "brightness(0.8) contrast(1.2)",
            }}
          >
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>

          {/* Fallback animated background for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-blue-500/30 to-purple-600/30 animate-pulse" />
        </div>

        {/* Reduced overlay for mobile to show more video */}
        <div className="fixed inset-0 bg-white/10 sm:bg-white/20 backdrop-blur-[0.5px] pointer-events-none z-[-1]" />

        <LanguageProvider>
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  )
}
