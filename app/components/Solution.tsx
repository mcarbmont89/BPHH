"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"

const comparisonData = [
  { feature: "AI-Powered Matching", botic: true, traditional: false },
  { feature: "Global Talent Pool", botic: true, traditional: false },
  { feature: "Specialized Tech Focus", botic: true, traditional: false },
  { feature: "Personalized Service", botic: true, traditional: true },
  { feature: "Fast Turnaround", botic: true, traditional: false },
]

export default function Solution() {
  const { t } = useLanguage()

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{t("solution.title")}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("solution.subtitle")}</p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left">{t("solution.feature")}</th>
                <th className="p-4 text-center">Botic Partners</th>
                <th className="p-4 text-center">{t("solution.traditional")}</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <motion.tr
                  key={index}
                  className="border-b"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-4">{t(`solution.features.${item.feature}`)}</td>
                  <td className="p-4 text-center">{item.botic ? "✅" : "❌"}</td>
                  <td className="p-4 text-center">{item.traditional ? "✅" : "❌"}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

