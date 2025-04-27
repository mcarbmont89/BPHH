"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Trusted() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-600 mb-12">{t("trusted.title")}</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-32 h-12 relative grayscale opacity-50 hover:opacity-100 transition-opacity">
              <Image src="/placeholder.svg" alt={`Trusted Company ${i}`} fill className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
