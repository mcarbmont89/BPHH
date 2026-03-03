"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

type AboutBorjaSectionProps = {
  id?: string
  className?: string
  imageSrc?: string
  imageAlt?: string
}

export default function AboutBorjaSection({
  id = "about-us",
  className = "",
  imageSrc = "/images/borja.png",
  imageAlt = "Borja Moreno-Luque, fundador de Botic Partners",
}: AboutBorjaSectionProps) {
  const { language } = useLanguage()

  const content =
    language === "es"
      ? {
          title: "About us",
          p1: "Borja Moreno-Luque es el fundador de Botic Partners. Tras más de ocho años liderando procesos de selección y desarrollo de negocio en firmas como Michael Page, Catenon o FED Group, y trabajando con empresas de distintos sectores y mercados, decidió crear su propia firma para acompañar el crecimiento empresarial desde una perspectiva AI-native.",
          p2: "Su enfoque combina experiencia en negocio, conocimiento del mercado y una forma de trabajar cercana y exigente, apoyándose en la tecnología para escalar resultados reales:",
          quote: "“La IA nos está permitiendo cuadruplicar la velocidad de contratación a la que yo estaba acostumbrado, y al mismo tiempo ampliar nuestro impacto en áreas como el scouting estratégico y la automatización de procesos.”",
        }
      : {
          title: "About us",
          p1: "Borja Moreno-Luque is the founder of Botic Partners. After over eight years leading recruitment and business development processes at firms like Michael Page, Catenon, and FED Group, and working with companies across industries and markets, he decided to create his own firm to support business growth from an AI-native perspective.",
          p2: "His approach combines business experience, market knowledge, and a close, high-standard way of working—using technology to scale real results:",
          quote: "“AI is allowing us to quadruple the hiring speed I was used to, while also expanding our impact into areas like strategic scouting and process automation.”",
        }

  return (
    <section id={id} className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{content.title}</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm relative">
              <div className="absolute -top-4 left-6 bg-white border border-gray-100 rounded-xl p-2 shadow-sm">
                <Quote className="h-5 w-5 text-boticPurple" />
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">{content.quote}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority={false} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
