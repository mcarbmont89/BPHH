"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const statKeys = ["placement", "hiring", "retention", "network"] as const

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{t(`stats.${key}.value`)}</div>
              <div className="text-lg font-semibold mb-1">{t(`stats.${key}.label`)}</div>
              <div className="text-sm text-gray-600">{t(`stats.${key}.description`)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

