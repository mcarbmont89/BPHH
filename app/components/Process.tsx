"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Search, Cpu, Users, Video, BarChart3, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    titleKey: "process.analyze.title",
    descriptionKey: "process.analyze.description",
  },
  {
    icon: Cpu,
    titleKey: "process.match.title",
    descriptionKey: "process.match.description",
  },
  {
    icon: Video,
    titleKey: "process.interview.title",
    descriptionKey: "process.interview.description",
  },
  {
    icon: BarChart3,
    titleKey: "process.scoring.title",
    descriptionKey: "process.scoring.description",
  },
  {
    icon: Users,
    titleKey: "process.candidates.title",
    descriptionKey: "process.candidates.description",
  },
  {
    icon: CheckCircle,
    titleKey: "process.decision.title",
    descriptionKey: "process.decision.description",
  },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("process.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("process.subtitle")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {/* Process steps */}
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                  <div className={`bg-gray-50 rounded-lg p-6 ${isEven ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="flex items-center mb-4">
                      <Icon className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">{t(step.titleKey)}</h3>
                    </div>
                    <p className="text-gray-600">{t(step.descriptionKey)}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

