"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "InnovateLabs", logo: "/placeholder.svg" },
  { name: "DataFlow", logo: "/placeholder.svg" },
  { name: "CloudNine", logo: "/placeholder.svg" },
  { name: "AIVentures", logo: "/placeholder.svg" },
  { name: "SmartSystems", logo: "/placeholder.svg" },
  { name: "FutureTech", logo: "/placeholder.svg" },
  { name: "QuantumWorks", logo: "/placeholder.svg" },
]

export default function ClientCarousel() {
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{t("clientCarousel.title")}</h2>
        <Marquee gradient={false} speed={50}>
          <div className="flex items-center space-x-12">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center h-16 w-40">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

