"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, TrendingUp, Users, CheckCircle, Activity, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { EmailOptionsModal } from "./EmailOptionsModal"

// Particle animation points
const particlePoints = Array.from({ length: 20 }, () => ({
  x: Math.random() * 100 + 50,
  y: Math.random() * 300 + 50,
  size: Math.random() * 6 + 3,
  opacity: Math.random() * 0.7 + 0.3,
}))

export default function ContactForm() {
  const { t } = useLanguage()
  const [animateParticles, setAnimateParticles] = useState(true)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    aiInterest: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEmailModalOpen(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl border-2 border-primary/20 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-8 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                  {t("contact.title")}
                </h2>
                <p className="text-gray-600">{t("contact.subtitle")}</p>
              </motion.div>

              <motion.form
                className="space-y-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t("contact.name")}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder={t("contact.name")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t("contact.email")}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700">
                    {t("contact.inquiry")}
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder={t("contact.inquiryPlaceholder")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="ai-interest" className="block text-sm font-medium text-gray-700">
                    {t("contact.aiInterest")}
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    id="ai-interest"
                    name="aiInterest"
                    value={formData.aiInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="" disabled>
                      {t("contact.selectInterest")}
                    </option>
                    <option value="talent-matching">{t("contact.talentMatching")}</option>
                    <option value="recruitment-automation">{t("contact.recruitmentAutomation")}</option>
                    <option value="executive-search">{t("contact.executiveSearch")}</option>
                    <option value="strategic-partnerships">{t("contact.strategicPartnerships")}</option>
                    <option value="other">{t("contact.other")}</option>
                  </motion.select>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="pt-3"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold shadow-lg shadow-primary/30 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {t("contact.getInTouch")}
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Zap className="h-5 w-5" />
                      </motion.div>
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-primary-foreground z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            {/* Right side - Animated visual */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/30 p-8 md:p-10 relative overflow-hidden">
              {/* Animated particles */}
              <AnimatePresence>
                {animateParticles &&
                  Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                      key={`contact-particle-${index}`}
                      className="absolute rounded-full bg-primary/40"
                      initial={{
                        x: Math.random() * 100 + 50,
                        y: Math.random() * 300 + 50,
                        opacity: 0,
                      }}
                      animate={{
                        x: [Math.random() * 100 + 50, Math.random() * 100 + 150, Math.random() * 100 + 50],
                        y: [Math.random() * 300 + 50, Math.random() * 300 + 100, Math.random() * 300 + 50],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                      style={{
                        width: Math.random() * 6 + 3,
                        height: Math.random() * 6 + 3,
                      }}
                    />
                  ))}
              </AnimatePresence>

              {/* Animated benefits */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 mb-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t("contact.whyPartnerWithUs")}
                </motion.h3>

                <div className="space-y-6">
                  {[
                    { icon: Brain, text: t("contact.aiTalentMatching") },
                    { icon: TrendingUp, text: t("contact.reduceTimeToHire") },
                    { icon: Users, text: t("contact.accessToTalent") },
                    { icon: CheckCircle, text: t("contact.retentionRate") },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className="p-2 rounded-full bg-white/80 mr-3 flex-shrink-0"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 3, delay: index * 0.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <item.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <p className="text-gray-800">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Live indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-xs text-gray-700 flex items-center shadow-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Activity className="h-3 w-3 text-primary mr-1 animate-pulse" />
                  <span className="relative">
                    {t("contact.aiPoweredRecruitment")}
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Add the EmailOptionsModal component */}
      <EmailOptionsModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        subject={`Inquiry from ${formData.name}: ${formData.aiInterest || "General Contact"}`}
        body={formData.inquiry}
      />
    </section>
  )
}
