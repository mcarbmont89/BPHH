"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"

export default function TalentMatchingHero() {
  const { language, t } = useLanguage()

  const imageUrl = language === "en" ? "/images/ai-recruitment-en.png" : "/images/ai-recruitment-es.png"

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-boticPurple">
              {t("talentMatchingHero.badge")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {t("talentMatchingHero.title")}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t("talentMatchingHero.description")}
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t("talentMatchingHero.highlightBox.title")}
              </h4>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("talentMatchingHero.highlightBox.description")}
              </p>

              <Button asChild variant="secondary">
                <Link href="https://talent.boticpartners.com/">
                  {t("talentMatchingHero.highlightBox.button")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="AI Recruitment Process"
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
