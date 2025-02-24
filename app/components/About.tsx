"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{t("about.title")}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("about.subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Image
              src="/placeholder.svg"
              alt="About Botic Partners"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-semibold mb-4">{t("about.mission.title")}</h3>
            <p className="text-gray-600 mb-6">{t("about.mission.description")}</p>
            <h3 className="text-2xl font-semibold mb-4">{t("about.vision.title")}</h3>
            <p className="text-gray-600">{t("about.vision.description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

