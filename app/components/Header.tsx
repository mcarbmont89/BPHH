"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, ChevronDown, ChevronUp } from "lucide-react"
import { EmailOptionsModal } from "./EmailOptionsModal"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

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
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("click", handleProcessLinkClick)
      document.removeEventListener("click", handleSolutionLinkClick)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen)

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
    {
      href: "/#services",
      label: t("nav.services"),
      hasDropdown: true,
      dropdownItems: [
        { href: "/permanent-talent", label: "Talento en Plantilla" },
        { href: "/freelance-talent", label: "Talento Freelance" },
        { href: "/ma-services", label: "M&A" },
      ],
    },
    { href: "/#process", label: t("nav.process"), onClick: handleProcessClick },
    { href: "/#industries", label: t("nav.industries") },
    { href: "/#solution", label: t("nav.solution"), onClick: handleSolutionClick },
    { href: "/#about", label: t("nav.about") },
    { href: "/careers", label: t("nav.careers") },
    { href: "/blog", label: t("nav.blog.title") },
  ]

  const handleContact = () => {
    setIsEmailModalOpen(true)
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
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleServicesDropdown}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center"
                >
                  {item.label}
                  {isServicesDropdownOpen ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                onClick={item.onClick || (() => setIsMenuOpen(false))}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                language === "en" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                language === "es" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              ES
            </button>
          </div>
          <Button variant="default" size="sm" className="hidden md:inline-flex" onClick={handleContact}>
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
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href} className="space-y-2">
                  <button
                    onClick={toggleServicesDropdown}
                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center"
                  >
                    {item.label}
                    {isServicesDropdownOpen ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {isServicesDropdownOpen && (
                    <div className="pl-4 space-y-2">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block text-sm text-gray-600 hover:text-primary"
                          onClick={() => {
                            setIsServicesDropdownOpen(false)
                            setIsMenuOpen(false)
                          }}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                  onClick={item.onClick || (() => setIsMenuOpen(false))}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="mt-4 flex justify-between">
            <div className="md:hidden flex space-x-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "en" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === "es" ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                ES
              </button>
            </div>
            <Button variant="default" size="sm" onClick={handleContact}>
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
      <EmailOptionsModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        subject={t("header.contactSubject")}
      />
    </header>
  )
}

export default Header
