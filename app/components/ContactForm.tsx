"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, TrendingUp, Users, CheckCircle, Activity, Zap, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"

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

  const handleSchedule = () => {
    window.open(
      "https://outlook.office.com/bookwithme/user/5dc7b4ad41ef41dfa5e4f1053f4710b8@boticpartners.com/meetingtype/n6FtRriP-0afMrnBYzgN9w2?anonymous&ep=mlink",
      "_blank",
    )
  }

  const handleCall = () => {
    window.location.href = "tel:+34 651 56 27 72"
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl border-2 border-primary/20 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-6 sm:p-8 md:p-10 grid place-items-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-md mx-auto lg:max-w-full"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground text-center lg:text-left">
                  {t("contact.title")}
                </h2>
                <p className="text-gray-600 mb-6 text-sm sm:text-base text-center lg:text-left">
                  {t("contact.subtitle")}
                </p>

                {/* Contenedor flex para los dos botones - Responsive */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full pt-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex-1"
                  >
                    <Button
                      onClick={handleSchedule}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg shadow-primary/30 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {t("contact.getInTouch")}
                        <Zap className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-primary-foreground z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex-1"
                  >
                    <Button
                      onClick={handleCall}
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-primary text-primary hover:bg-primary/10 py-4 sm:py-6 text-base sm:text-lg font-semibold relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {t("contact.callNow")}
                        <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-primary/10 z-0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Animated visual */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/30 p-6 sm:p-8 md:p-10 relative overflow-hidden order-1 lg:order-2">
              {/* Animated benefits */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center lg:text-left"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t("contact.whyPartnerWithUs")}
                </motion.h3>

                <div className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0">
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
                        className="p-1.5 sm:p-2 rounded-full bg-white/80 mr-3 flex-shrink-0"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 3, delay: index * 0.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </motion.div>
                      <p className="text-sm sm:text-base text-gray-800">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}