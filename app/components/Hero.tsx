"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { DynamicMatchCard } from "./DynamicMatchCard"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="curved-gradient absolute inset-0 -z-10" />
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between pt-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t("hero.title")}</h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="secondary">
              {t("hero.cta")}
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              {t("hero.demo")}
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <DynamicMatchCard />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

