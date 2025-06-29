"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const positions = [
  "vpMemsEngineer",
  "processEngineer",
  "asicEngineer",
  "directorGeneral",
  "directorComercial",
  "fieldApplicationsEngineer",
  "marketingDirector",
  "directorPrevencion",
]

export function DynamicMatchCard() {
  const { t } = useLanguage()
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositionIndex((prevIndex) => (prevIndex + 1) % positions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentPositionKey = positions[currentPositionIndex]
  const positionName = t(`dynamicMatchCard.positions.${currentPositionKey}`)
  const skills = t(`dynamicMatchCard.skills.${currentPositionKey}`)
  const matchScore = (85 + (currentPositionIndex % 15)).toFixed(1)
  const techScore = (80 + (currentPositionIndex % 20)).toFixed(1)
  const fitScore = (90 - (currentPositionIndex % 10)).toFixed(1)

  return (
    <motion.div
      key={currentPositionIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl shadow-lg p-6 bg-boticPurple/[.90] text-white w-full max-w-md mx-auto"
    >
      <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-none">
        {t("dynamicMatchCard.latestMatch")}
      </Badge>
      <h3 className="text-2xl font-bold mb-2">{positionName}</h3>
      <p className="text-sm text-white/80 mb-4 h-10">{skills}</p>

      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div>
          <p className="text-3xl font-bold">{matchScore}%</p>
          <p className="text-xs text-white/70">{t("dynamicMatchCard.overallMatchScore")}</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{techScore}%</p>
          <p className="text-xs text-white/70">{t("dynamicMatchCard.technicalSkills")}</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{fitScore}%</p>
          <p className="text-xs text-white/70">{t("dynamicMatchCard.teamFit")}</p>
        </div>
      </div>
    </motion.div>
  )
}
