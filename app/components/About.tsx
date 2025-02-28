"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("about.title")}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("about.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* First Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/talent-69fwyNzRev15cytpixYRwsZDQL8uRl.png"
              alt="Tech Professional at Botic Partners"
              width={400}
              height={400}
              className="object-cover"
            />
          </motion.div>

          {/* Mission and Vision */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.mission.title")}</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>{t("about.mission.point1")}</li>
                <li>{t("about.mission.point2")}</li>
                <li>{t("about.mission.point3")}</li>
              </ul>
              <p className="mt-4">{t("about.mission.description")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.vision.title")}</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>{t("about.vision.point1")}</li>
                <li>{t("about.vision.point2")}</li>
                <li>{t("about.vision.point3")}</li>
              </ul>
              <p className="mt-4">{t("about.vision.description")}</p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Values and Approach */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.valuesApproach.title")}</h3>
              <ul className="space-y-4">
                <li>
                  <strong>{t("about.valuesApproach.innovation.title")}: </strong>
                  {t("about.valuesApproach.innovation.description")}
                </li>
                <li>
                  <strong>{t("about.valuesApproach.efficiency.title")}: </strong>
                  {t("about.valuesApproach.efficiency.description")}
                </li>
                <li>
                  <strong>{t("about.valuesApproach.strategicConnections.title")}: </strong>
                  {t("about.valuesApproach.strategicConnections.description")}
                </li>
                <li>
                  <strong>{t("about.valuesApproach.transparency.title")}: </strong>
                  {t("about.valuesApproach.transparency.description")}
                </li>
                <li>
                  <strong>{t("about.valuesApproach.diversity.title")}: </strong>
                  {t("about.valuesApproach.diversity.description")}
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{t("about.impact.title")}</h3>
              <p>{t("about.impact.description")}</p>
              <ul className="list-disc pl-5 space-y-3 mt-4">
                <li>{t("about.impact.point1")}</li>
                <li>{t("about.impact.point2")}</li>
                <li>{t("about.impact.point3")}</li>
              </ul>
            </motion.div>
          </div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/companies-B6UI2QkomHDNsIdBfsHQTL1gPU9q3H.png"
              alt="Modern Corporate Building"
              width={400}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

