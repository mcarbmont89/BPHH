"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { DynamicMatchCard } from "./DynamicMatchCard"
import { useState } from "react"
import { EmailOptionsModal } from "./EmailOptionsModal"

export default function Hero() {
  const { t } = useLanguage()
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")

  const handleGetStarted = () => {
    setEmailSubject(t("hero.getStartedSubject"))
    setIsEmailModalOpen(true)
  }

  const handleWatchDemo = () => {
    setEmailSubject(t("hero.watchDemoSubject"))
    setIsEmailModalOpen(true)
  }

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-transparent">
      <div className="curved-gradient absolute inset-0 -z-10 opacity-35" />
      <div className="container lg:max-w-[1280px] mx-auto h-[calc(100vh-25rem)] px-8 flex flex-col lg:grid grid-cols-2 lg:place-items-center items-center justify-between pt-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{t("hero.title")}</h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="secondary" onClick={handleGetStarted}>
              {t("hero.cta")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:text-white border-white/20 hover:bg-white/40"
              onClick={handleWatchDemo}
            >
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
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </section>
  )
}
