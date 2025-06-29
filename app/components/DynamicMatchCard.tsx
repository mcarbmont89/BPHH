"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const profiles = [
  {
    id: 1,
    title: "VP Ingeniero MEMS",
    subtitle: "Última Posición con Match de IA",
    match: 95,
    skills: {
      "Habilidades Técnicas": 95,
      "Ajuste de Equipo": 92,
    },
    tags: ["Diseño MEMS", "Liderazgo de Equipo", "Gestión de Proyectos", "Industria de Semiconductores"],
  },
  {
    id: 2,
    title: "Ingeniero ASIC",
    subtitle: "Última Posición con Match de IA",
    match: 96,
    skills: {
      "Habilidades Técnicas": 96,
      "Ajuste de Equipo": 90,
    },
    tags: ["Diseño ASIC", "Verilog", "FPGA", "Procesamiento de Señales Digitales"],
  },
  {
    id: 3,
    title: "Científico de Datos Senior",
    subtitle: "Última Posición con Match de IA",
    match: 93,
    skills: {
      "Habilidades Técnicas": 94,
      "Ajuste de Equipo": 88,
    },
    tags: ["Machine Learning", "Python", "TensorFlow", "Análisis Predictivo"],
  },
]

export function DynamicMatchCard() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentProfile = profiles[currentIndex]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20 max-w-md mx-auto"
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-full">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">{currentProfile.title}</h3>
            <p className="text-white/80 text-sm">{currentProfile.subtitle}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/90 text-sm">Puntuación General de Coincidencia</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-white h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${currentProfile.match}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(currentProfile.skills).map(([skill, percentage]) => (
            <div key={skill}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-white/90 text-xs">{skill}</span>
                <span className="text-white font-semibold text-sm">{percentage}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {currentProfile.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="px-2 py-1 bg-white/20 text-white/90 rounded-md text-xs"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
