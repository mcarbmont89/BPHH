"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { EmailOptionsModal } from "./EmailOptionsModal"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Hero() {
  const { t } = useLanguage()
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{t("home.hero.title")}</h1>
          <p className="text-lg md:text-xl text-gray-200">{t("home.hero.subtitle")}</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Card className="w-full max-w-md bg-white/10 backdrop-blur-md text-white shadow-lg border border-white/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                  {t("home.hero.lastMatch")}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold">{t("home.hero.jobTitle")}</h3>
              <p className="text-sm text-gray-300">{t("home.hero.jobDescription")}</p>
              <div className="grid grid-cols-3 gap-4 text-center pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">88.0%</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">{t("home.hero.generalScore")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">83.0%</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">{t("home.hero.technicalSkills")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">87.0%</div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">{t("home.hero.teamFit")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </section>
  )
}
