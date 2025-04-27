"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Clock, Brain, CheckCircle, Lock, Activity } from "lucide-react"

// Comparison data
const comparisonData = [
  { feature: "AI-Powered Predictive Matching", botic: true, traditional: false },
  { feature: "AI-Driven Soft Skills Analysis", botic: true, traditional: false },
  { feature: "AI-Powered Passive Talent Identification", botic: true, traditional: false },
  { feature: "AI-Personalized Messaging for Engagement", botic: true, traditional: false },
  { feature: "Real-Time Salary and Market Benchmarking", botic: true, traditional: false },
  { feature: "Automated CV and Profile Evaluation", botic: true, traditional: true },
  { feature: "Hiring Bias Detection", botic: true, traditional: true },
  { feature: "Sentiment Analysis in Interviews and Feedback", botic: true, traditional: true },
  { feature: "Automated Candidate Tracking and Relationship Management", botic: true, traditional: true },
  { feature: "Market Intelligence for Hiring Strategies", botic: true, traditional: false },
]

// AI features
const aiFeatures = [
  {
    icon: Clock,
    title: "solution.aiFeatures.automatedTaskManagement.title",
    description: "solution.aiFeatures.automatedTaskManagement.description",
  },
  {
    icon: Brain,
    title: "solution.aiFeatures.naturalLanguageProcessing.title",
    description: "solution.aiFeatures.naturalLanguageProcessing.description",
  },
  {
    icon: CheckCircle,
    title: "solution.aiFeatures.businessToolIntegration.title",
    description: "solution.aiFeatures.businessToolIntegration.description",
  },
  {
    icon: Lock,
    title: "solution.aiFeatures.secureDataHandling.title",
    description: "solution.aiFeatures.secureDataHandling.description",
  },
]

export default function Solution() {
  const { t } = useLanguage()

  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("solution.title")}</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("solution.subtitle")}</p>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="p-4 text-left font-semibold text-gray-700">{t("solution.feature")}</th>
                  <th className="p-4 text-center font-semibold text-primary">
                    <motion.div
                      className="flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Botic Partners
                    </motion.div>
                  </th>
                  <th className="p-4 text-center font-semibold text-gray-700">{t("solution.traditional")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={index}
                    className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"} hover:bg-blue-50/30 transition-colors duration-200`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                  >
                    <td className="p-4 font-medium text-gray-700">
                      {t(`solution.features.${item.feature}`)}
                      {index < 5 && (
                        <motion.span
                          className="ml-2 inline-flex px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {t("solution.aiEnhanced")}
                        </motion.span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.botic ? (
                        <motion.div
                          className="flex justify-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                            delay: index * 0.07,
                          }}
                        >
                          <motion.div
                            className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"
                            whileHover={{ scale: 1.2, backgroundColor: "#d1fae5" }}
                            animate={{
                              boxShadow: [
                                "0px 0px 0px rgba(34, 197, 94, 0)",
                                "0px 0px 8px rgba(34, 197, 94, 0.5)",
                                "0px 0px 0px rgba(34, 197, 94, 0)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <CheckCircle className="w-5 h-5" />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <span className="text-red-500">❌</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.traditional ? (
                        <motion.div
                          className="flex justify-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                            delay: index * 0.07 + 0.2,
                          }}
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex justify-center"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                            delay: index * 0.07 + 0.2,
                          }}
                        >
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                        </motion.div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Data visualization for comparison */}
          <motion.div
            className="mt-8 p-4 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-center">{t("solution.aiPoweredAdvantage")}</h4>
            <div className="relative h-16 w-full">
              <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute top-0 right-0 h-full w-2 bg-white opacity-80"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.8, 0.2, 0.8],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  {t("solution.moreEfficient")}
                </motion.span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-gray-600 mb-1">{t("solution.traditionalTimeToHire")}</p>
                <motion.div
                  className="text-2xl font-bold text-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  {t("solution.traditionalDays")}
                </motion.div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-1">{t("solution.boticTimeToHire")}</p>
                <motion.div
                  className="text-2xl font-bold text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#6366f1", "#8b5cf6", "#6366f1"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  {t("solution.boticDays")}
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
            >
              <div className="px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                <span>{t("solution.fasterRecruitment")}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* AI Features Section */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("solution.aiFeatures.title")}
          </motion.h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{t("solution.aiFeatures.description")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-lg">{t(feature.title)}</h4>
                </div>
                <p className="text-gray-600">{t(feature.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Real-time data indicator */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-md px-4 py-3 text-sm text-gray-500 flex items-center shadow-md">
            <Activity className="h-4 w-4 text-primary mr-2 animate-pulse" />
            <span className="relative">
              {t("solution.realTimeData")}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
