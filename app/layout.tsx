import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Botic Partners - AI-Powered Recruitment Solutions",
  description:
    "Transform your recruitment process with our AI-powered talent matching platform. Find the perfect talent faster and more efficiently.",
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
        <link rel="icon" type="image/png" href="/placeholder-logo.png" />
      </head>
      <body className={`${inter.className} relative`}>
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          className="fixed top-0 left-0 w-full h-full object-cover z-[-2] opacity-60 md:opacity-60 brightness-110 contrast-110 saturate-110"
          style={{ filter: "blur(0px)" }}
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => console.log("Video can play")}
          onError={(e) => console.log("Video error:", e)}
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>

        {/* Fallback animated background for when video doesn't load */}
        <div className="fixed inset-0 z-[-3] bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 opacity-80">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent animate-pulse delay-1000"></div>
        </div>

        {/* Main content overlay */}
        <div className="relative z-0 bg-black/5 backdrop-blur-[0.5px] min-h-screen">
          <LanguageProvider>{children}</LanguageProvider>
        </div>
      </body>
    </html>
  )
}
