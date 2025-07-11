"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">{t("footer.title")}</h3>
          <p className="text-sm">{t("footer.description")}</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <Instagram size={20} />
            </Link>
          </div>
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
              <Link href="/services" className="hover:text-white">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-white">
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
                Blog
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
          <h3 className="text-lg font-semibold text-white">{t("footer.followUs")}</h3>
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
