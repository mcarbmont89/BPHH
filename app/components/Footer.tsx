"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Link from "next/link"
import { LinkedinIcon as LinkedIn, Mail } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white p-12 md:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Botic Partners</h3>
          <p className="text-gray-400">{t("footer.description")}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="text-gray-400 hover:text-white">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link href="#industries" className="text-gray-400 hover:text-white">
                {t("nav.industries")}
              </Link>
            </li>
            <li>
              <Link href="#process" className="text-gray-400 hover:text-white">
                {t("nav.process")}
              </Link>
            </li>
            <li>
              <Link href="#solution" className="text-gray-400 hover:text-white">
                {t("nav.solution")}
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-400 hover:text-white">
                {t("nav.about")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
          <Link href="mailto:admin@boticpartners.com" className="text-gray-400 hover:text-white">admin@boticpartners.com</Link>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/company/boticpartners/" className="text-gray-400 hover:text-white">
              <LinkedIn className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Botic Partners. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
