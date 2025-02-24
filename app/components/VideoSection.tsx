"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  const { t } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("video.title")}</h2>
          <p className="text-xl text-gray-600 mb-8">{t("video.subtitle")}</p>
        </div>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button onClick={handlePlay} size="lg" className="rounded-full p-4 bg-primary hover:bg-primary/90">
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </motion.div>
            </div>
          ) : null}
          <iframe
            className="w-full h-full"
            src={isPlaying ? "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" : "about:blank"}
            title="Botic Partners: Global AI-Powered Recruitment"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">{t("video.features.title")}</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-left">
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              {t("video.features.global")}
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              {t("video.features.aiPowered")}
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              {t("video.features.specialized")}
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">✓</span>
              {t("video.features.industries")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

