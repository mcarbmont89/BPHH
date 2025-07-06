"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { EmailOptionsModal } from "./EmailOptionsModal"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Threads from "./backgrounds/Threads/Threads"

export default function Hero() {
  const { t } = useLanguage()
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white bg-[#1A1A2E]">
      {" "}
      {/* Added a fallback background color matching the screenshot */}
      {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <Threads amplitude={0.2} className="absolute inset-0 w-full h-full object-cover -mt-4 md:mt-0" />
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center mt-20 md:mt-0">
        <div className="space-y-4 md:space-y-24 md:-mt-16 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
          >
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
            {t("home.hero.subtitle")}
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-24 md:mt-0">
          <Card className="w-full max-w-md bg-black/70 text-white shadow-lg border border-white/20">
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
