"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

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
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{t("clientCarousel.title")}</h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center h-24 p-4">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
            <CarouselItem className="md:basis-full">
              <Card className="bg-primary/10 border-none">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{t("clientCarousel.testimonial")}"
                  </blockquote>
                  <p className="font-semibold text-right">{t("clientCarousel.testimonialAuthor")}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
