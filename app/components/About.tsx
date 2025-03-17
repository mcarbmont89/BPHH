"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Target, Lightbulb, Globe, Activity } from "lucide-react"

// Network visualization data
const networkData = {
  points: [
    { x: 50, y: 50 },
    { x: 150, y: 80 },
    { x: 200, y: 40 },
    { x: 100, y: 150 },
    { x: 180, y: 180 },
    { x: 70, y: 220 },
    { x: 220, y: 120 },
  ],
  connections: [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 6 },
    { from: 0, to: 6 },
  ],
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Update the ContentSection component to use translations
function ContentSection({ title, icon: Icon, iconColor, bgColor, content, delay = 0 }) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-3"
    >
      <div className="flex items-center gap-3">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${bgColor}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ul className="space-y-3 pl-10">
        <li className="list-disc text-gray-700">{content}</li>
      </ul>
    </motion.div>
  )
}

// Update the main About component to use translations
export default function About() {
  const { t } = useLanguage()
  const [activeConnection, setActiveConnection] = useState<number | null>(null)

  // Animate active connection periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const randomConnection = Math.floor(Math.random() * networkData.connections.length)
      setActiveConnection(randomConnection)

      const timeout = setTimeout(() => {
        setActiveConnection(null)
      }, 2000)

      return () => clearTimeout(timeout)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Update the content sections to use translations
  const contentSections = [
    {
      title: t("about.mission.title"),
      icon: Target,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      content: t("about.mission.point1"),
    },
    {
      title: t("about.vision.title"),
      icon: Lightbulb,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      content: t("about.vision.description"),
    },
    {
      title: t("about.valuesApproach.strategicConnections.title"),
      icon: Globe,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      content: t("about.valuesApproach.strategicConnections.description"),
    },
  ]

  return (
    <section id="about" className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        {/* Title and subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-purple-600">{t("about.title")}</h2>
          <p className="text-center text-sm md:text-base text-gray-800 max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Building image with network visualization */}
          <NetworkVisualization activeConnection={activeConnection} networkData={networkData} />

          {/* Content sections */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            variants={fadeInUp}
            className="w-full md:w-1/2 space-y-6"
          >
            {contentSections.map((section, index) => (
              <ContentSection
                key={`section-${index}`}
                title={section.title}
                icon={section.icon}
                iconColor={section.iconColor}
                bgColor={section.bgColor}
                content={section.content}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Network Visualization Component
function NetworkVisualization({ activeConnection, networkData }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      variants={fadeInUp}
      className="w-full md:w-1/2 relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/companies-B6UI2QkomHDNsIdBfsHQTL1gPU9q3H.png"
        alt="Modern Corporate Building"
        width={600}
        height={450}
        className="object-cover w-full h-full"
      />

      {/* Network visualization overlay */}
      <div className="absolute inset-0 bg-black/20">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
          {/* Connection lines */}
          {networkData.connections.map((line, index) => {
            const fromPoint = networkData.points[line.from]
            const toPoint = networkData.points[line.to]
            const isActive = activeConnection === index

            return (
              <g key={`connection-${index}`}>
                <line
                  x1={fromPoint.x}
                  y1={fromPoint.y}
                  x2={toPoint.x}
                  y2={toPoint.y}
                  stroke={isActive ? "#8b5cf6" : "#ffffff"}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? "none" : "5,5"}
                  opacity={isActive ? 1 : 0.6}
                />

                {isActive && (
                  <motion.circle
                    cx={fromPoint.x}
                    cy={fromPoint.y}
                    r={3}
                    fill="#8b5cf6"
                    animate={{
                      cx: [fromPoint.x, toPoint.x],
                      cy: [fromPoint.y, toPoint.y],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: 1,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                )}
              </g>
            )
          })}

          {/* Connection points */}
          {networkData.points.map((point, index) => (
            <motion.circle
              key={`point-${index}`}
              cx={point.x}
              cy={point.y}
              r={5}
              fill="#8b5cf6"
              opacity={0.8}
              animate={{
                r: [5, 7, 5],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.5,
              }}
            />
          ))}
        </svg>

        {/* Real-time data indicator */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-xs text-gray-700 flex items-center shadow-md">
          <Activity className="h-3 w-3 text-purple-500 mr-1 animate-pulse" />
          <span className="relative">
            Global Network
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

