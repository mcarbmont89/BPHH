"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { EmailOptionsModal } from "./EmailOptionsModal"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import Threads from "./backgrounds/Threads/Threads"
import { cn } from "@/lib/utils"

interface JobPosition {
  title: string
  description: string
  scores: {
    general: number
    technical: number
    teamFit: number
  }
}

export default function Hero() {
  const { t } = useLanguage()
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [emailSubject, setEmailSubject] = useState("")
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [threadsMounted, setThreadsMounted] = useState(false)

  // Sample job positions - you can replace these with your actual job data
  const jobPositions: JobPosition[] = [
    {
      title: "Senior Frontend Developer",
      description: t("home.hero.jobDescription"),
      scores: {
        general: 88.0,
        technical: 83.0,
        teamFit: 87.0
      }
    },
    {
      title: "Full Stack Engineer",
      description: "Looking for a versatile developer with experience in modern web technologies.",
      scores: {
        general: 92.0,
        technical: 94.0,
        teamFit: 89.0
      }
    },
    {
      title: "DevOps Specialist",
      description: "Join our team to optimize deployment pipelines and cloud infrastructure.",
      scores: {
        general: 85.0,
        technical: 90.0,
        teamFit: 88.0
      }
    }
  ]

  // Rotate through job positions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      // Wait for fade out before changing job
      setTimeout(() => {
        setCurrentJobIndex((prevIndex) => 
          prevIndex === jobPositions.length - 1 ? 0 : prevIndex + 1
        )
        setIsVisible(true)
      }, 500) // Match this with the transition duration
      
    }, 5000) // Change job every 5 seconds

    return () => clearInterval(interval)
  }, [jobPositions.length])

  useEffect(() => {
    const id = requestAnimationFrame(() => setThreadsMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const currentJob = jobPositions[currentJobIndex]

  return (
    <section className="relative w-full min-h-screen flex items-start justify-center overflow-hidden text-white bg-[#1A1A2E]">
      {" "}
      {/* Added a fallback background color matching the screenshot */}
      {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover -z-10">
        <source src="/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${threadsMounted ? "opacity-100" : "opacity-0"}`}>
        <Threads amplitude={0.2} className="w-full h-full object-cover -mt-4 md:mt-0" />
      </div>
      <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center pt-32 md:pt-48">
        <div className="space-y-4 text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
          >
            {t("home.hero.title")}
          </h1>
        </div>
        <div className="flex justify-center md:justify-end mb-8 md:mb-0">
          <Card className="w-full max-w-md bg-black/70 text-white shadow-lg border border-white/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm">
                  {t("home.hero.lastMatch")}
                </Badge>
              </div>
              <div className="relative h-24 overflow-hidden">
                <div 
                  className={cn(
                    "transition-opacity duration-500 absolute inset-0",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}
                >
                  <h3 className="text-2xl font-bold">{currentJob.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{currentJob.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">
                    <span className={cn(
                      "transition-all duration-500 inline-block",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      {currentJob.scores.general}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">
                    <span className={cn(
                      "transition-all duration-500 delay-200 inline-block",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      {t("home.hero.generalScore")}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">
                    <span className={cn(
                      "transition-all duration-500 delay-100 inline-block",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      {currentJob.scores.technical}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">
                  <span className={cn(
                      "transition-all duration-500 delay-100 inline-block",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                    {t("home.hero.technicalSkills")}
                  </span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">
                    <span className={cn(
                      "transition-all duration-500 delay-200 inline-block",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      {currentJob.scores.teamFit}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 uppercase tracking-wider">
                    <span className={cn(
                      "transition-all duration-500 delay-300 inline-block",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    )}>
                      {t("home.hero.teamFit")}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </section>
  )
}
