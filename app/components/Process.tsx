"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Search, Cpu, Users, Video, BarChart3, CheckCircle, X } from "lucide-react"

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

// Comparison features
const comparisonFeatures = [
  {
    name: "AI-Powered Predictive Matching",
    botic: true,
    traditional: false,
    aiEnhanced: true,
  },
  {
    name: "AI-Driven Soft Skills Analysis",
    botic: true,
    traditional: false,
    aiEnhanced: true,
  },
  {
    name: "AI-Powered Passive Talent Identification",
    botic: true,
    traditional: false,
    aiEnhanced: true,
  },
  {
    name: "Real-Time Salary and Market Benchmarking",
    botic: true,
    traditional: false,
    aiEnhanced: true,
  },
  {
    name: "Automated CV and Profile Evaluation",
    botic: true,
    traditional: false,
    aiEnhanced: false,
  },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="ai-powered-recruitment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Process Timeline */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{t("process.title")}</h2>
              <p className="text-gray-600 max-w-xl mx-auto">{t("process.subtitle")}</p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{t(step.titleKey)}</h3>
                      <p className="text-gray-600">{t(step.descriptionKey)}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right side: Comparison with traditional recruitment */}
          <div id="solution-comparison">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">{t("solution.title")}</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-medium text-gray-700">{t("solution.feature")}</th>
                    <th className="p-4 text-center font-medium text-primary">Botic Partners</th>
                    <th className="p-4 text-center font-medium text-gray-700">{t("solution.traditional")}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <motion.tr
                      key={index}
                      className="border-t border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="p-4 font-medium text-gray-700">
                        {t(`solution.features.${feature.name}`)}
                        {feature.aiEnhanced && (
                          <span className="ml-2 inline-flex px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                            {t("solution.aiEnhanced")}
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                            <X className="w-5 h-5" />
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Efficiency metrics */}
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-4 text-center border-b border-gray-100">
                <h4 className="font-medium text-gray-800">{t("solution.aiPoweredAdvantage")}</h4>
              </div>

              <div className="p-4">
                <div className="bg-blue-100 rounded-full p-2 mb-6 text-center">
                  <span className="font-semibold text-blue-700">{t("solution.moreEfficient")}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-600 mb-1 text-sm">{t("solution.traditionalTimeToHire")}</p>
                    <p className="text-2xl font-bold text-gray-800">{t("solution.traditionalDays")}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1 text-sm">{t("solution.boticTimeToHire")}</p>
                    <p className="text-2xl font-bold text-primary">{t("solution.boticDays")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
