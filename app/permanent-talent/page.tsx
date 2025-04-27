"use client"

import { motion } from "framer-motion"
import { Users, CheckCircle, BarChart, Brain, Target, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { useState } from "react"
import { EmailOptionsModal } from "../components/EmailOptionsModal"
import { useLanguage } from "@/lib/i18n/LanguageContext"

// Success stories data
const successStories = [
  {
    role: "CTO",
    company: "Leading FinTech Startup",
    challenge: "Needed a technical leader to scale their platform during rapid growth phase",
    solution: "Identified a senior tech executive with both financial services and scaling experience",
    result: "Platform successfully scaled to handle 10x transaction volume, securing Series B funding",
    timeToHire: "21 days",
  },
  {
    role: "VP of Engineering",
    company: "Enterprise SaaS Provider",
    challenge: "Required leadership to transform legacy systems to modern architecture",
    solution: "Sourced a VP with proven experience in technical transformation projects",
    result: "Successful migration to microservices architecture, reducing deployment time by 70%",
    timeToHire: "28 days",
  },
  {
    role: "Head of Data Science",
    company: "E-commerce Platform",
    challenge: "Needed to build a data science team from scratch to improve personalization",
    solution: "Recruited a leader with experience building high-performing data teams",
    result: "Implemented ML-driven recommendation engine increasing conversion rates by 32%",
    timeToHire: "18 days",
  },
]

export default function PermanentTalent() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")
  const { t } = useLanguage()

  // Define methodology steps with translations
  const methodologySteps = [
    {
      icon: Target,
      title: t("permanentTalent.methodologySteps.strategicAnalysis.title"),
      description: t("permanentTalent.methodologySteps.strategicAnalysis.description"),
    },
    {
      icon: Brain,
      title: t("permanentTalent.methodologySteps.aiSearch.title"),
      description: t("permanentTalent.methodologySteps.aiSearch.description"),
    },
    {
      icon: Users,
      title: t("permanentTalent.methodologySteps.humanExpertise.title"),
      description: t("permanentTalent.methodologySteps.humanExpertise.description"),
    },
    {
      icon: CheckCircle,
      title: t("permanentTalent.methodologySteps.qualification.title"),
      description: t("permanentTalent.methodologySteps.qualification.description"),
    },
    {
      icon: Clock,
      title: t("permanentTalent.methodologySteps.acceleratedPlacement.title"),
      description: t("permanentTalent.methodologySteps.acceleratedPlacement.description"),
    },
  ]

  const handleContactRequest = () => {
    setEmailSubject("Permanent Talent Inquiry")
    setIsEmailModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-boticPurple/20 to-boticPurple/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("permanentTalent.title")}</h1>
                  <p className="text-xl text-gray-700 mb-8">{t("permanentTalent.subtitle")}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("permanentTalent.retentionRate")}</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("permanentTalent.timeToHire")}</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleContactRequest}
                    className="bg-boticPurple hover:bg-boticPurple/90 text-white px-6 py-3"
                  >
                    {t("permanentTalent.discussNeeds")}
                  </Button>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/permanent-h7I3Vv9zLwcd0AzsD0lOqy2yCvMmsk.webp"
                      alt="Executive team meeting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-boticPurple/10 p-2 rounded-full">
                        <BarChart className="h-6 w-6 text-boticPurple" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t("permanentTalent.averageMatchScore")}</p>
                        <p className="text-xl font-bold text-gray-900">94%</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("permanentTalent.methodologyTitle")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("permanentTalent.methodologySubtitle")}</p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-boticPurple/20 hidden md:block"></div>

              <div className="space-y-12">
                {methodologySteps.map((step, index) => {
                  const Icon = step.icon
                  const isEven = index % 2 === 0

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                          <div className="relative">
                            <div className="w-16 h-16 bg-boticPurple rounded-full flex items-center justify-center z-10 relative">
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute top-0 left-0 w-16 h-16 bg-boticPurple/20 rounded-full animate-ping"></div>
                          </div>
                        </div>
                        <div className={`md:w-1/2 ${isEven ? "md:pr-12 text-right" : "md:pl-12"}`}>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("permanentTalent.successStoriesTitle")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("permanentTalent.successStoriesSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-boticPurple">{story.role}</h3>
                      <p className="text-gray-600">{story.company}</p>
                    </div>
                    <div className="bg-boticPurple/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-boticPurple">{story.timeToHire}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">{t("permanentTalent.challenge")}:</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">{t("permanentTalent.solution")}:</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700">{t("permanentTalent.result")}:</h4>
                      <p className="text-gray-600">{story.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-boticPurple/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("permanentTalent.ctaTitle")}</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">{t("permanentTalent.ctaSubtitle")}</p>
            <Button
              onClick={handleContactRequest}
              className="bg-boticPurple hover:bg-boticPurple/90 text-white px-8 py-3 text-lg"
            >
              {t("permanentTalent.scheduleConsultation")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </div>
  )
}
