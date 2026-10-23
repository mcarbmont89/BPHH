"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Linkedin } from "lucide-react"

// Añade aquí la URL de la página de LinkedIn de Botic Partners para mostrar el icono.
const LINKEDIN_URL = ""

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">{t("footer.title")}</h3>
          <p className="text-sm">{t("footer.description")}</p>
          {LINKEDIN_URL && (
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link href="/#core-services" className="hover:text-white">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link href="/#industries" className="hover:text-white">
                {t("nav.industries")}
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                {t("nav.careers")}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                {t("nav.blog")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">{t("footer.contact")}</h3>
          <p className="text-sm">
            Email:{" "}
            <a href={`mailto:${t("footer.contactEmail")}`} className="hover:text-white">
              {t("footer.contactEmail")}
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">{t("footer.legal")}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                {t("footer.privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white">
                {t("footer.termsOfService")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {t("footer.title")}. {t("footer.rights")}
      </div>
    </footer>
  )
}
