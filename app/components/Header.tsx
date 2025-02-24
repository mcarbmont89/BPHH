"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="py-4 px-6 bg-white/80 backdrop-blur-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/botic%20long-Uu1ik81vsOqA55IYRxP8xIzHs4xpzU.png"
            alt="Botic Partners"
            width={200}
            height={50}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {t("nav.services")}
          </Link>
          <Link href="#industries" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {t("nav.industries")}
          </Link>
          <Link href="#process" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {t("nav.process")}
          </Link>
          <Link href="#solution" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {t("nav.solution")}
          </Link>
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded text-sm ${language === "en" ? "bg-primary text-white" : "text-gray-600"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 rounded text-sm ${language === "es" ? "bg-primary text-white" : "text-gray-600"}`}
            >
              ES
            </button>
          </div>
          <Button variant="default" size="sm">
            {t("nav.contact")}
          </Button>
        </div>
      </div>
    </header>
  )
}

