"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { matchingStats, recentPlacements } from "@/lib/data"
import { CheckCircle } from "lucide-react"

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
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{recentPlacements[0].role}</h3>
                  <p className="text-white/80 text-sm">Latest AI-Matched Position</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white/90 text-sm font-medium mb-2">Overall Match Score</h4>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-1000"
                      style={{ width: `${matchingStats.overallMatch}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white/90 text-sm font-medium mb-1">Technical Skills</h4>
                    <p className="text-white text-lg font-semibold">{matchingStats.technicalSkills}%</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white/90 text-sm font-medium mb-1">Team Fit</h4>
                    <p className="text-white text-lg font-semibold">{matchingStats.teamFit}%</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentPlacements[0].skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

