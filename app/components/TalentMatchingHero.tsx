"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function TalentMatchingHero() {
  const { t, language } = useLanguage()

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-boticPurple/20 text-boticPurple mb-6">
        <span className="text-sm font-medium">AI-Powered Recruitment</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-boticPurple">
        AI-Powered Talent Matching & Business Acceleration
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-3xl mx-auto mb-10 text-lg">
        At Botic Partners, we optimize recruitment with AI-driven precision. Our AI agents process thousands of profiles
        and shortlist top talent, while our expert headhunters conduct interviews—ensuring faster, smarter hiring.
      </p>

      {/* Illustration with stats - language dependent */}
      <div className="mb-10">
        <Image
          src={language === "es" ? "/images/ai-recruitment-es.png" : "/images/ai-recruitment-en.png"}
          alt={language === "es" ? "Agente IA y estadísticas de reclutamiento" : "AI Agent and recruitment statistics"}
          width={800}
          height={400}
          className="mx-auto"
        />
      </div>

      {/* Highlighted Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border border-boticPurple/30 rounded-lg p-8 shadow-sm"
      >
        <h3 className="text-2xl font-bold text-boticPurple mb-4">In less than 2 days your candidates in a call</h3>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our AI-powered matching system delivers qualified candidates faster than traditional recruitment methods.
          Experience the future of recruitment with our advanced AI technology.
        </p>

        <a href="https://talent.boticpartners.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <button className="bg-boticPurple hover:bg-boticPurple/90 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors">
            Discover
            <ArrowRight className="w-4 h-4" />
          </button>
        </a>
      </motion.div>
    </section>
  )
}
