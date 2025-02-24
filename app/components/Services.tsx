"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Users, Brain, Globe, LineChart } from "lucide-react"
import { motion } from "framer-motion"

const serviceIcons = {
  recruitment: Users,
  aiSolutions: Brain,
  international: Globe,
  consulting: LineChart,
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{t("services.title")}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("services.subtitle")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.keys(serviceIcons).map((service) => {
            const Icon = serviceIcons[service as keyof typeof serviceIcons]

            return (
              <motion.div
                key={service}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(`services.${service}.title`)}</h3>
                <p className="text-gray-600">{t(`services.${service}.description`)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

