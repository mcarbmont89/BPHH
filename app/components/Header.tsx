"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "https://www.boticpartners.com/#services", label: t("nav.services") },
    { href: "https://www.boticpartners.com/#industries", label: t("nav.industries") },
    { href: "https://www.boticpartners.com/#process", label: t("nav.process") },
    { href: "https://www.boticpartners.com/#solution", label: t("nav.solution") },
    { href: "https://www.boticpartners.com/#about", label: t("nav.about") },
    { href: "https://www.boticpartners.com/blog", label: t("nav.blog") },
    { href: "https://www.boticpartners.com/careers", label: t("nav.careers") },
  ]

  return (
    <header
      className={`py-4 px-6 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="https://www.boticpartners.com/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/botic%20long-Uu1ik81vsOqA55IYRxP8xIzHs4xpzU.png"
            alt="Botic Partners"
            width={200}
            height={50}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
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
          <Button variant="default" size="sm" className="hidden md:inline-flex">
            {t("nav.contact")}
          </Button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex justify-between">
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
      )}
    </header>
  )
}

