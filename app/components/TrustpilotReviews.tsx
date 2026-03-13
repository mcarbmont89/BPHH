"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"

const reviews = [
  {
    name: "Rebeca Ayuso Álvarez",
    company: "KPMG España",
    avatar: "/avatars/ayuso.jpeg",
    rating: 5,
    date: "10 de marzo, 2026",
    title: "Todo ha ido muy bien",
    text: "Todo ha ido muy bien. Borja me ha aportado la cercanía y seguimiento que se requiere en un momento de cambio.",
  },
  {
    name: "Núria Martí",
    company: "Nanusens",
    avatar: "/avatars/nuria.jpeg",
    rating: 5,
    date: "4 de febrero, 2026",
    title: "Experiencia de selección excelente",
    text: "Borja es una persona excepcional, un ejemplo de cómo debería gestionarse un proceso de selección. Desde el primer momento supo entender mi perfil y encontrar un encaje perfecto con la empresa. Su profesionalidad es impecable, pero lo que realmente marca la diferencia es su cercanía y humanidad durante todo el proceso.",
  },
  {
    name: "Abhairaj Singh",
    company: "IBM",
    avatar: "/avatars/ABJ.jpeg",
    rating: 4,
    date: "2 de febrero, 2026",
    title: "Borja was great",
    text: "Borja gave me the confidence to do my best. Unfortunately, I could not secure the job but this was a good learning experience.",
  },
  {
    name: "Nicolas Sopeña Lopez De Lerma",
    company: "Astara",
    avatar: "/avatars/nicolas.png",
    rating: 5,
    date: "14 de enero, 2026",
    title: "Excellent service and management",
    text: "Excellent service and management.",
  },
  {
    name: "Laura Núñez Molero",
    company: "CECOP Group",
    avatar: "/avatars/LAURA .png",
    rating: 5,
    date: "13 de enero, 2026",
    title: "Todo muy bien 👍",
    text: "Todo muy bien 👍",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src="https://jyliu6i7fajxf7tx.public.blob.vercel-storage.com/TRST.L.svg"
          alt="star"
          className={`w-5 h-5 ${i < rating ? "opacity-100" : "opacity-20"}`}
        />
      ))}
    </div>
  )
}

function YellowStarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const partial = rating - full // 0.1 for 4.1

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = i < full ? 1 : i === full ? partial : 0
        const id = `clip-${i}`
        return (
          <svg key={i} width="20" height="20" viewBox="0 0 20 20">
            <defs>
              <clipPath id={id}>
                <rect x="0" y="0" width={20 * fill} height="20" />
              </clipPath>
            </defs>
            {/* Background star (gray) */}
            <path
              d="M10 1l2.39 5.26 5.61.49-4.2 3.76 1.3 5.49L10 13.27l-5.1 2.73 1.3-5.49L2 6.75l5.61-.49z"
              fill="#d1d5db"
            />
            {/* Foreground star (yellow), clipped */}
            <path
              d="M10 1l2.39 5.26 5.61.49-4.2 3.76 1.3 5.49L10 13.27l-5.1 2.73 1.3-5.49L2 6.75l5.61-.49z"
              fill="#FACC15"
              clipPath={`url(#${id})`}
            />
          </svg>
        )
      })}
    </div>
  )
}

function Avatar({ name, avatar }: { name: string; avatar: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  if (avatar) {
    return (
      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div className="w-10 h-10 rounded-full bg-boticPurple/10 flex items-center justify-center flex-shrink-0">
      <span className="text-sm font-semibold text-boticPurple">{initials}</span>
    </div>
  )
}

export default function TrustpilotReviews() {
  const { language } = useLanguage()
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const heading = language === "en" ? "Our Reviews" : "Nuestras Reseñas"
  const subheading = language === "en" ? "Verified reviews on Trustpilot" : "Reseñas verificadas en Trustpilot"

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{heading}</h2>
          <p className="text-gray-500 text-sm mb-4">{subheading}</p>

          {/* Trustpilot badge */}
          <a
            href="https://es.trustpilot.com/review/boticpartners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5 mb-0.5">
                <img
                  src="https://jyliu6i7fajxf7tx.public.blob.vercel-storage.com/TRST.L.svg"
                  alt="Trustpilot logo"
                  className="w-6 h-6"
                />
                <span className="text-lg font-bold text-gray-900 leading-none tracking-tight">Trustpilot</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <YellowStarRating rating={4.1} />
                <span className="text-sm text-gray-600 font-medium">4.1 / 5</span>
              </div>
            </div>
          </a>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full border border-gray-200 rounded-xl p-6 flex flex-col gap-3 bg-white shadow-sm">
                  <StarRating rating={review.rating} />
                  <p className="font-semibold text-gray-800">{review.title}</p>
                  <p className="text-gray-600 text-sm flex-1">{review.text}</p>
                  <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
                    <Avatar name={review.name} avatar={review.avatar} />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{review.name}</p>
                      {review.company && (
                        <p className="text-xs text-boticPurple font-medium">{review.company}</p>
                      )}
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center mt-6">
          <a
            href="https://es.trustpilot.com/review/boticpartners.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#00b67a] hover:underline font-medium"
          >
            {language === "en" ? "See all reviews on Trustpilot →" : "Ver todas las reseñas en Trustpilot →"}
          </a>
        </div>
      </div>
    </section>
  )
}
