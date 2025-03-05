"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Users, Handshake } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
// Import the EmailOptionsModal at the top of the file
import { EmailOptionsModal } from "./EmailOptionsModal"

const services = [
  {
    icon: Users,
    titleKey: "services.headhunting.title",
    descriptionKey: "services.headhunting.description",
    longDescriptionKey: "services.headhunting.longDescription",
    color: "from-blue-400 to-blue-600",
    listKeys: {
      title: "services.headhunting.whyDifferent",
      items: "services.headhunting.points",
    },
    metricsKeys: {
      title: "services.headhunting.metricsTitle",
      items: "services.headhunting.metrics",
    },
  },
  {
    icon: Handshake,
    titleKey: "services.partnerships.title",
    descriptionKey: "services.partnerships.description",
    longDescriptionKey: "services.partnerships.longDescription",
    color: "from-purple-400 to-purple-600",
    listKeys: {
      title: "services.partnerships.whatWeDo",
      subtitle: "services.partnerships.weConnect",
      items: "services.partnerships.connectionTypes",
    },
    methodsKeys: {
      title: "services.partnerships.howWeDoIt",
      items: "services.partnerships.methods",
    },
  },
]

export default function Services() {
  const { t } = useLanguage()

  // Add a new state for controlling the modal visibility
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  const renderList = (items: string[], className = "") => (
    <ul className={`list-disc pl-5 mb-4 space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  )

  // Update the handleScheduleConsultation function
  const handleScheduleConsultation = () => {
    setIsEmailModalOpen(true)
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-full mr-4 bg-gradient-to-br ${service.color}`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {t(service.titleKey)}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">{t(service.descriptionKey)}</p>
                      <p className="text-gray-700 mb-6">{t(service.longDescriptionKey)}</p>

                      <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h4 className="text-xl font-semibold mb-4">{t(service.listKeys.title)}</h4>
                        {service.listKeys.subtitle && (
                          <p className="text-gray-700 mb-2">{t(service.listKeys.subtitle)}</p>
                        )}
                        {renderList(t(service.listKeys.items))}
                      </div>

                      {service.metricsKeys && (
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                          <h4 className="text-xl font-semibold mb-4">{t(service.metricsKeys.title)}</h4>
                          {renderList(t(service.metricsKeys.items))}
                        </div>
                      )}

                      {service.methodsKeys && (
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                          <h4 className="text-xl font-semibold mb-4">{t(service.methodsKeys.title)}</h4>
                          {renderList(t(service.methodsKeys.items))}
                        </div>
                      )}
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button size="lg" className="px-8 py-6 text-lg font-semibold" onClick={handleScheduleConsultation}>
            {t("services.ctaText")}
          </Button>
        </motion.div>
      </div>
      {/* Add the EmailOptionsModal component at the end of the return statement, just before the closing tag */}
      <EmailOptionsModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        subject={t("services.consultationSubject")}
      />
    </section>
  )
}

