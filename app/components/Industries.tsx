"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Code, Cpu, Briefcase, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  {
    icon: Code,
    titleKey: "industries.technology.title",
    descriptionKey: "industries.technology.description",
  },
  {
    icon: Lightbulb,
    titleKey: "industries.deeptech.title",
    descriptionKey: "industries.deeptech.description",
  },
  {
    icon: Cpu,
    titleKey: "industries.semiconductors.title",
    descriptionKey: "industries.semiconductors.description",
  },
  {
    icon: Briefcase,
    titleKey: "industries.consulting.title",
    descriptionKey: "industries.consulting.description",
  },
]

export default function Industries() {
  const { t } = useLanguage()

  return (
    <section id="industries" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("industries.title")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-primary/10 rounded-lg mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{t(industry.titleKey)}</h3>
                      <p className="text-sm text-gray-600">{t(industry.descriptionKey)}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-white rounded-lg shadow-lg max-w-3xl">
            <h3 className="text-xl font-semibold mb-4">{t("industries.expertise.title")}</h3>
            <p className="text-gray-600">{t("industries.expertise.description")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

