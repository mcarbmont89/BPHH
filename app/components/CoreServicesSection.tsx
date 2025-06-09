"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Users, Briefcase, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoreServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            {t("coreServices.whatWeDo")}
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t("coreServices.subtitle")}
          </motion.p> */}
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Service 1: Permanent Staff Headhunting */}
          <motion.div
            id="permanent-talent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-boticPurple/20 hover:border-boticPurple/50 transition-all"
          >
            <div className="w-16 h-16 bg-boticPurple/10 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-boticPurple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("coreServices.permanentStaff")}</h3>
            <p className="text-gray-600 mb-6">{t("coreServices.permanentStaffDesc")}</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.executiveRecruitment")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.technicalSpecialists")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.teamBuilding")}</span>
              </li>
            </ul>
          </motion.div>

          {/* Service 2: Freelance Headhunting */}
          <motion.div
            id="freelance-talent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-boticPurple/20 hover:border-boticPurple/50 transition-all"
          >
            <div className="w-16 h-16 bg-boticPurple/10 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-boticPurple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("coreServices.freelanceTalent")}</h3>
            <p className="text-gray-600 mb-6">{t("coreServices.freelanceTalentDesc")}</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.projectSpecific")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.interimManagement")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.specializedConsultants")}</span>
              </li>
            </ul>
          </motion.div>

          {/* Service 3: M&A Search */}
          <motion.div
            id="ma-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg border-2 border-boticPurple/20 hover:border-boticPurple/50 transition-all"
          >
            <div className="w-16 h-16 bg-boticPurple/10 rounded-full flex items-center justify-center mb-6">
              <Search className="h-8 w-8 text-boticPurple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("coreServices.maSearch")}</h3>
            <p className="text-gray-600 mb-6">{t("coreServices.maSearchDesc")}</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.targetCompany")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.strategicPartnership")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-boticPurple mr-2">✓</span>
                <span className="text-gray-700">{t("coreServices.acquisitionOpportunity")}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-boticPurple/20 to-boticPurple/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{t("coreServices.readyToFind")}</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{t("coreServices.readyToFindDesc")}</p>
          <Link href="#contact">
            <Button className="bg-boticPurple hover:bg-boticPurple/90 text-white px-6 py-3 rounded-md flex items-center gap-2 mx-auto">
              {t("coreServices.getStarted")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
