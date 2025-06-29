"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const path = usePathname()
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    // Handle process link click
    const handleProcessLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href") === "#process") {
        e.preventDefault()
        const processSection = document.getElementById("ai-powered-recruitment")
        if (processSection) {
          processSection.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    document.addEventListener("click", handleProcessLinkClick)

    // Handle solution link click
    const handleSolutionLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href") === "#solution") {
        e.preventDefault()
        const solutionSection = document.getElementById("solution-comparison")
        if (solutionSection) {
          solutionSection.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
    document.addEventListener("click", handleSolutionLinkClick)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleProcessLinkClick)
      document.removeEventListener("click", handleSolutionLinkClick)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleProcessClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Verificar si estamos en la página principal
    if (window.location.pathname !== "/") {
      // Si no estamos en la página principal, redirigir primero
      window.location.href = "/#ai-powered-recruitment"
      return
    }

    const processSection = document.getElementById("ai-powered-recruitment")
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSolutionClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Verificar si estamos en la página principal
    if (window.location.pathname !== "/") {
      // Si no estamos en la página principal, redirigir primero
      window.location.href = "/#solution-comparison"
      return
    }

    const solutionSection = document.getElementById("solution-comparison")
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { href: "/#industries", label: t("nav.industries") },
    { href: "/#process", label: t("nav.process"), onClick: handleProcessClick },
    //{ href: "/#solution", label: t("nav.solution"), onClick: handleSolutionClick },
    // { href: "/#about", label: t("nav.about") },
    { href: "/careers", label: t("nav.careers") },
    { href: "/blog", label: t("nav.blog.title") },
  ]

  const handleContact = () => {
    window.open(
      "https://outlook.office.com/bookwithme/user/5dc7b4ad41ef41dfa5e4f1053f4710b8@boticpartners.com/meetingtype/n6FtRriP-0afMrnBYzgN9w2?anonymous&ep=mlink",
      "_blank",
    )
  }

  return (
    <header
      className={`py-4 px-6 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/botic%20long-Uu1ik81vsOqA55IYRxP8xIzHs4xpzU.png"
            alt="Botic Partners"
            width={200}
            height={50}
            className="h-8 w-auto drop-shadow"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${path === "/" && !isScrolled ? "text-gray-100 hover:text-white" : "text-gray-600 hover:text-primary"} ${isScrolled ? "text-gray-600 hover:text-primary" : ""} transition-colors`}
              onClick={item.onClick || (() => setIsMenuOpen(false))}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className={`relative hidden md:inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white`}
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
          >
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center w-full px-2 text-xs">
              {language === "en" ? "ES" : "EN"}
            </span>
          </button>
          <Button
            variant={`${isScrolled ? "default" : "secondary"}`}
            size="sm"
            className="hidden md:inline-flex"
            onClick={handleContact}
          >
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
                onClick={item.onClick || (() => setIsMenuOpen(false))}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 md:hidden flex justify-between">
            <button
              className={`relative hidden md:inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white`}
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
            >
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center w-full px-2 text-xs">
                {language === "en" ? "ES" : "EN"}
              </span>
            </button>
            <Button variant={`${isScrolled ? "default" : "secondary"}`} size="sm" onClick={handleContact}>
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
