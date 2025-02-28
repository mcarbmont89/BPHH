"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface MatchData {
  title: string
  technicalSkills: number
  teamFit: number
  overallMatch: number
  skills: string[]
}

const matchData: MatchData[] = [
  {
    title: "Senior Full Stack Developer",
    technicalSkills: 95,
    teamFit: 89,
    overallMatch: 92,
    skills: ["React", "Node.js", "Python", "AWS"],
  },
  {
    title: "AI Research Scientist",
    technicalSkills: 97,
    teamFit: 91,
    overallMatch: 94,
    skills: ["PyTorch", "TensorFlow", "Python", "MLOps"],
  },
  {
    title: "DevOps Engineer",
    technicalSkills: 93,
    teamFit: 88,
    overallMatch: 91,
    skills: ["Kubernetes", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Semiconductor Process Engineer",
    technicalSkills: 96,
    teamFit: 90,
    overallMatch: 93,
    skills: ["TCAD", "SPICE", "Python", "Process Integration"],
  },
]

export function DynamicMatchCard() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % matchData.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentMatch = matchData[currentIndex]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-primary/80 to-primary rounded-xl p-6 text-white backdrop-blur-lg shadow-lg w-full max-w-md"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <motion.h3
              key={`title-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-semibold"
            >
              {currentMatch.title}
            </motion.h3>
            <p className="text-white/80 text-sm">{t("dynamicMatchCard.latestMatch")}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="text-white/90 text-sm font-medium mb-2">{t("dynamicMatchCard.overallMatchScore")}</h4>
            <motion.div
              className="w-full bg-white/20 rounded-full h-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="bg-white h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${currentMatch.overallMatch}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white/90 text-sm font-medium mb-1">{t("dynamicMatchCard.technicalSkills")}</h4>
              <motion.p
                key={`tech-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white text-lg font-semibold"
              >
                {currentMatch.technicalSkills}%
              </motion.p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white/90 text-sm font-medium mb-1">{t("dynamicMatchCard.teamFit")}</h4>
              <motion.p
                key={`fit-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white text-lg font-semibold"
              >
                {currentMatch.teamFit}%
              </motion.p>
            </div>
          </div>

          <motion.div
            key={`skills-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-2"
          >
            {currentMatch.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-sm">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

