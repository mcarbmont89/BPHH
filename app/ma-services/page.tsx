"use client"

import { motion } from "framer-motion"
import { Search, CheckCircle, Handshake, Building, Target, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { useState } from "react"
import { EmailOptionsModal } from "../components/EmailOptionsModal"
import { useLanguage } from "@/lib/i18n/LanguageContext"

// M&A services
const services = [
  {
    icon: Search,
    title: "Target Identification",
    description:
      "We leverage our extensive network and AI-powered search capabilities to identify ideal acquisition targets or strategic partners that align with your business objectives.",
  },
  {
    icon: Building,
    title: "Strategic Partnership Facilitation",
    description:
      "We connect businesses for mutually beneficial partnerships, joint ventures, and collaborative opportunities that drive growth and innovation.",
  },
  {
    icon: Target,
    title: "Acquisition Opportunity Assessment",
    description:
      "Our team conducts thorough evaluations of potential acquisition targets, assessing technical capabilities, team quality, and strategic fit.",
  },
  {
    icon: Lock,
    title: "Confidential Representation",
    description:
      "We act as your confidential representative in the market, protecting your identity while exploring strategic opportunities.",
  },
]

// Change to:
// Success stories
const successStories = [
  {
    title: "Tech Startup Acquisition",
    description:
      "Connected a growing SaaS company with the perfect acquisition target to expand their product portfolio",
    results: [
      "Identified 12 potential targets matching specific criteria",
      "Facilitated confidential discussions with 5 shortlisted companies",
      "Successful acquisition completed within 6 months",
      "30% increase in combined company valuation post-acquisition",
    ],
    industry: "SaaS / Enterprise Software",
  },
  {
    title: "Strategic Partnership",
    description: "Facilitated a strategic partnership between a data analytics firm and an AI research company",
    results: [
      "Created joint venture to develop specialized industry solutions",
      "Established revenue-sharing model beneficial to both parties",
      "Launched 3 new products within first year of partnership",
      "Expanded market reach by 45% through combined capabilities",
    ],
    industry: "Data Analytics / Artificial Intelligence",
  },
  {
    title: "International Market Entry",
    description: "Helped a European tech company enter Latin American markets through strategic local partnerships",
    results: [
      "Identified 8 potential partners across key Latin American markets",
      "Facilitated negotiations with 3 finalists",
      "Established partnership agreements with localization provisions",
      "Achieved 200% growth in target markets within 18 months",
    ],
    industry: "Enterprise Technology / International Expansion",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Strategic Consultation",
    description:
      "We begin with a thorough understanding of your business objectives, growth strategy, and specific criteria for potential targets or partners.",
  },
  {
    number: "02",
    title: "Market Research & Target Identification",
    description:
      "Our team conducts comprehensive market research to identify potential acquisition targets or strategic partners that align with your criteria.",
  },
  {
    number: "03",
    title: "Confidential Outreach",
    description:
      "We make discreet, professional approaches to identified targets, maintaining your confidentiality while gauging interest and potential fit.",
  },
  {
    number: "04",
    title: "Facilitated Introductions",
    description:
      "For interested parties, we arrange and facilitate initial discussions, helping both sides explore potential synergies and opportunities.",
  },
  {
    number: "05",
    title: "Strategic Advisory",
    description:
      "Throughout the process, we provide strategic guidance and support to help you evaluate opportunities and make informed decisions.",
  },
]

export default function MAServices() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")
  const { t } = useLanguage()

  const handleContactRequest = () => {
    setEmailSubject("M&A Services Inquiry")
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("maServices.title")}</h1>
                  <p className="text-xl text-gray-700 mb-8">{t("maServices.subtitle")}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("maServices.confidentialRepresentation")}</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("maServices.strategicTargetIdentification")}</span>
                    </div>
                  </div>
                  <Button
                    onClick={handleContactRequest}
                    className="bg-boticPurple hover:bg-boticPurple/90 text-white px-6 py-3"
                  >
                    {t("maServices.exploreOpportunities")}
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manda-JFFahro8ncVJtiuEzGgGcRSgYKJEMR.webp"
                      alt="Executive boardroom with city view"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-boticPurple/10 p-2 rounded-full">
                        <Handshake className="h-6 w-6 text-boticPurple" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t("maServices.successfulPartnerships")}</p>
                        <p className="text-xl font-bold text-gray-900">{t("maServices.partnershipCount")}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("maServices.ourServices")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("maServices.ourServicesDescription")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-boticPurple/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-boticPurple" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("maServices.ourProcess")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("maServices.ourProcessDescription")}</p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-start gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-boticPurple text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    {index < processSteps.length - 1 && (
                      <div className="border-l-2 border-dashed border-boticPurple/30 h-12 ml-8 mt-4 hidden md:block"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("maServices.successStories")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("maServices.successStoriesDescription")}</p>
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
                  <div className="bg-boticPurple/10 px-3 py-1 rounded-full inline-block mb-4">
                    <span className="text-sm font-medium text-boticPurple">{story.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-700">{t("maServices.results")}</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("maServices.industriesWeServe")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("maServices.industriesWeServeDescription")}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.softwareSaaS")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.softwareSaaSDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.aiML")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.aiMLDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.hardwareIoT")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.hardwareIoTDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.finTech")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.finTechDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.healthTech")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.healthTechDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.eCommerce")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.eCommerceDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.edTech")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.edTechDescription")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-lg font-bold mb-2 text-boticPurple">{t("maServices.cleanTech")}</h3>
                <p className="text-gray-600 text-sm">{t("maServices.cleanTechDescription")}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-boticPurple/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("maServices.readyToExplore")}</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">{t("maServices.readyToExploreDescription")}</p>
            <Button
              onClick={handleContactRequest}
              className="bg-boticPurple hover:bg-boticPurple/90 text-white px-8 py-3 text-lg"
            >
              {t("maServices.scheduleConsultation")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </div>
  )
}
