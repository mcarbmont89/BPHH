"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

type AboutBorjaSectionProps = {
  id?: string
  className?: string
  /** Ruta en /public (ej: "/images/team/borja.jpg") */
  imageSrc?: string
  imageAlt?: string
  /** Mostrar CTA “Conoce al equipo” (por ahora false) */
  showTeamCta?: boolean
  /** Link futuro para “Conoce al equipo” */
  teamHref?: string
}

export default function AboutBorjaSection({
  id = "about-us",
  className = "",
  imageSrc = "/images/borja.png",
  imageAlt = "Borja Moreno-Luque, fundador de Botic Partners",
  showTeamCta = false,
  teamHref = "/team",
}: AboutBorjaSectionProps) {
  const { language } = useLanguage()

  const content =
    language === "es"
      ? {
          title: "About us",
          p1: "Borja Moreno-Luque es el fundador de Botic Partners. Tras años trabajando en selección de talento y colaborando con empresas de distintos sectores, decidió crear su propia firma para apoyar el crecimiento de las empresas desde una perspectiva AI-native.",
          p2: "Su enfoque combina una visión muy práctica del negocio con una forma de trabajar cercana y exigente, apoyándose en la tecnología para multiplicar el impacto:",
          quote:
            "“La IA nos está permitiendo cuadruplicar la velocidad de contratación a la que yo personalmente estaba acostumbrado, y al mismo tiempo ampliar nuestro alcance en áreas como el scouting estratégico y la automatización de procesos para empresas.”",
          p3: "Hoy, Borja trabaja mano a mano con empresas en Europa y Latam, actuando como partner estratégico en procesos de headhunting, automatización con IA y crecimiento empresarial.",
          p4: "Botic Partners nace con una idea clara: hacer las cosas bien, construir relaciones de confianza y aportar valor real en cada proyecto.",
          teamCta: "Conoce al equipo",
        }
      : {
          title: "About us",
          p1: "Borja Moreno-Luque is the founder of Botic Partners. After years working in talent acquisition and collaborating with companies across multiple industries, he decided to build his own firm to support business growth from an AI-native perspective.",
          p2: "His approach combines a practical business mindset with a close, high-standard way of working—using technology to multiply impact:",
          quote:
            "“AI is allowing us to quadruple the hiring speed I was personally used to—while also expanding our reach into areas like strategic scouting and process automation for companies.”",
          p3: "Today, Borja works side by side with companies across Europe and LatAm, acting as a strategic partner in headhunting, AI automation, and business growth.",
          p4: "Botic Partners was founded with a clear idea: do things right, build trust-based relationships, and deliver real value in every project.",
          teamCta: "Meet the team",
        }

  return (
    <section id={id} className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority={false} />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{content.title}</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            {/* Quote block */}
            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm relative">
              <div className="absolute -top-4 left-6 bg-white border border-gray-100 rounded-xl p-2 shadow-sm">
                <Quote className="h-5 w-5 text-boticPurple" />
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">{content.quote}</p>
            </div>

            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>{content.p3}</p>
              <p>{content.p4}</p>
            </div>

            {/* Future CTA */}
            {showTeamCta && (
              <div className="mt-8">
                <a
                  href={teamHref}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-boticPurple text-white hover:bg-boticPurple/90 transition"
                >
                  {content.teamCta}
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
