"use client"

import { clients } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Quote } from "lucide-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function Testimonials() {
  const { t } = useLanguage()
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("testimonials.title")}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>

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
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </div>
                    <Quote className="text-primary h-8 w-8 mb-4 opacity-50" />
                    <p className="text-gray-600 mb-4">{client.testimonial}</p>
                    <div>
                      <div className="font-semibold">{client.author}</div>
                      <div className="text-sm text-gray-500">{client.position}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
