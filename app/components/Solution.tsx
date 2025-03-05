"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Clock, Brain, CheckCircle, Lock } from "lucide-react"

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

const aiFeatures = [
  {
    icon: Clock,
    title: "Automated Task Management",
    description: "Efficiently manage and schedule tasks with AI-powered automation.",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Understand and respond to human language with advanced NLP capabilities.",
  },
  {
    icon: CheckCircle,
    title: "Business Tool Integration",
    description: "Seamlessly integrate with popular business tools and platforms.",
  },
  {
    icon: Lock,
    title: "Secure Data Handling",
    description: "Ensure data privacy and compliance with secure handling practices.",
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
        <div className="overflow-x-auto mb-16">
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-50">
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

        {/* AI Agents and Acceleration KPIs section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-2">{t("solution.aiAgents.title")}</h3>
            <p className="text-gray-600">{t("solution.aiAgents.description")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="text-xl font-bold mb-4">{t("solution.aiAgents.consultantCommunity.title")}</h4>
              <p className="text-gray-600 leading-relaxed">{t("solution.aiAgents.consultantCommunity.description")}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="text-xl font-bold mb-4">{t("solution.aiAgents.virtualAssistants.title")}</h4>
              <p className="text-gray-600 leading-relaxed">{t("solution.aiAgents.virtualAssistants.description")}</p>
            </motion.div>
          </div>

          {/* Powerful Features section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-2">{t("solution.aiFeatures.title")}</h3>
              <p className="text-gray-600">{t("solution.aiFeatures.description")}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-12 h-12 text-[#818cf8]" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

