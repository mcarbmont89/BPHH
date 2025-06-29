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
      {/* Reduced hero background opacity to show video better */}
      <div className="curved-gradient absolute inset-0 -z-10 opacity-20" />
      <div className="container lg:max-w-[1280px] mx-auto min-h-[calc(100vh-5rem)] px-4 sm:px-8 flex flex-col lg:grid lg:grid-cols-2 lg:place-items-center items-center justify-center gap-8 lg:gap-12 pt-10 pb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/95 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="secondary" onClick={handleGetStarted} className="w-full sm:w-auto">
              {t("hero.cta")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 text-white hover:text-white border-white/30 hover:bg-white/30 w-full sm:w-auto backdrop-blur-sm"
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
          className="flex-1 relative w-full max-w-md mx-auto lg:max-w-2xl order-1 lg:order-2"
        >
          <div className="relative w-full">
            <DynamicMatchCard />
          </div>
        </motion.div>
      </div>
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </section>
  )
}
