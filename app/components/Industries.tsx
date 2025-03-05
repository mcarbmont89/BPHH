"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Code, Cpu, Building2, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const industries = [
  {
    icon: Code,
    titleKey: "industries.software.title",
    descriptionKey: "industries.software.description",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Cpu,
    titleKey: "industries.hardware.title",
    descriptionKey: "industries.hardware.description",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Building2,
    titleKey: "industries.construction.title",
    descriptionKey: "industries.construction.description",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Truck,
    titleKey: "industries.logistics.title",
    descriptionKey: "industries.logistics.description",
    color: "from-green-400 to-green-600",
  },
]

export default function Industries() {
  const { t } = useLanguage()

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t("industries.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`p-4 rounded-full mb-6 bg-gradient-to-br ${industry.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                        {t(industry.titleKey)}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {t(industry.descriptionKey)}
                      </p>
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
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-primary-foreground/10 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{t("industries.expertise.title")}</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">{t("industries.expertise.description")}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

