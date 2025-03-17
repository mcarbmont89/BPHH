"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import {
  Handshake,
  Activity,
  Network,
  ArrowRight,
  Lightbulb,
  Target,
  Rocket,
  Users,
  DollarSign,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Image from "next/image"

// Connection points for network visualization
const connectionPoints = [
  { x: 50, y: 50, type: "company" },
  { x: 150, y: 80, type: "investor" },
  { x: 200, y: 40, type: "partner" },
  { x: 100, y: 150, type: "company" },
  { x: 180, y: 180, type: "investor" },
  { x: 70, y: 220, type: "partner" },
  { x: 220, y: 120, type: "company" },
]

// Connection lines between points
const connectionLines = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 4, to: 6 },
  { from: 5, to: 6 },
  { from: 0, to: 6 },
]

// Particle animation points
const particlePoints = Array.from({ length: 30 }, () => ({
  x: Math.random() * 1200,
  y: Math.random() * 600,
  size: Math.random() * 4 + 2,
  speed: Math.random() * 3 + 2,
}))

// What We Do items
const whatWeDo = [
  {
    icon: Users,
    title: "New Clients or Strategic Partners",
    description: "We facilitate high-value connections between companies seeking new business relationships.",
  },
  {
    icon: DollarSign,
    title: "Investors or Potential Buyers",
    description: "We connect businesses with the right investors or buyers to fuel growth or enable transitions.",
  },
  {
    icon: Briefcase,
    title: "Collaboration Opportunities in Key Industries",
    description: "We identify and facilitate strategic collaborations across industries for mutual benefit.",
  },
]

// How We Do It items
const howWeDoIt = [
  {
    icon: Network,
    title: "No Platforms, No Automation",
    description: "We leverage our validated direct network instead of relying on automated platforms.",
  },
  {
    icon: Rocket,
    title: "Fast and Flexible",
    description: "We tailor our approach to each case, ensuring high-value introductions that matter.",
  },
  {
    icon: Handshake,
    title: "Trust-Based Approach",
    description: "Every connection is relevant and has real potential for meaningful business outcomes.",
  },
]

// Market growth data for chart
const marketGrowthData = [
  { year: "2020", growth: 20 },
  { year: "2021", growth: 35 },
  { year: "2022", growth: 45 },
  { year: "2023", growth: 65 },
  { year: "2024", growth: 85 },
  { year: "2025", growth: 95 },
]

export default function PartnershipsSection() {
  const { t } = useLanguage()
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)
  const [animateParticles, setAnimateParticles] = useState(true)
  const [activeConnection, setActiveConnection] = useState<number | null>(null)
  const [chartProgress, setChartProgress] = useState(0)

  const sectionRef = useRef(null)
  const controls = useAnimation()

  // Animate active connection periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection(Math.floor(Math.random() * connectionLines.length))
      setTimeout(() => setActiveConnection(null), 2000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Animate chart when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let progress = 0
          const interval = setInterval(() => {
            progress += 2
            setChartProgress(Math.min(progress, 100))
            if (progress >= 100) clearInterval(interval)
          }, 30)

          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative" ref={sectionRef}>
      {/* Dynamic background with particles - keep this the same */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {animateParticles &&
            particlePoints.map((point, index) => (
              <motion.div
                key={`particle-${index}`}
                className="absolute rounded-full bg-primary/10"
                initial={{ x: point.x, y: point.y, opacity: 0 }}
                animate={{
                  x: [point.x, point.x + (Math.random() * 100 - 50)],
                  y: [point.y, point.y + (Math.random() * 100 - 50)],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: point.speed * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                style={{ width: point.size, height: point.size }}
              />
            ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
            Strategic Partnerships & Business Growth
          </h2>
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="mr-2"
            >
              <Handshake className="h-6 w-6 text-purple-500" />
            </motion.div>
            <h3 className="text-2xl font-semibold">Strategic Connections for Business Expansion</h3>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Connecting Opportunities, Accelerating Business Growth
          </p>
        </motion.div>

        {/* Full-width animation/visualization at the top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden shadow-xl h-[400px] mb-12"
        >
          {/* Background image */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 z-0">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Business partnerships visualization"
              width={1200}
              height={400}
              className="object-cover w-full h-full opacity-20"
            />
          </div>

          {/* Network visualization overlay */}
          <div className="absolute inset-0 z-10">
            <svg className="w-full h-full" viewBox="0 0 1200 400">
              {/* Connection lines - scaled for full width */}
              {connectionLines.map((line, index) => {
                const fromPoint = {
                  x: connectionPoints[line.from].x * 4,
                  y: connectionPoints[line.from].y * 1.3,
                }
                const toPoint = {
                  x: connectionPoints[line.to].x * 4,
                  y: connectionPoints[line.to].y * 1.3,
                }
                const isActive = activeConnection === index

                return (
                  <g key={`connection-${index}`}>
                    <line
                      x1={fromPoint.x}
                      y1={fromPoint.y}
                      x2={toPoint.x}
                      y2={toPoint.y}
                      stroke={isActive ? "#8b5cf6" : "#d1d5db"}
                      strokeWidth={isActive ? 3 : 1}
                      strokeDasharray={isActive ? "none" : "5,5"}
                      opacity={isActive ? 1 : 0.6}
                    />

                    {isActive && (
                      <motion.circle
                        cx={fromPoint.x}
                        cy={fromPoint.y}
                        r={4}
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

              {/* Connection points - scaled for full width */}
              {connectionPoints.map((point, index) => {
                const isCompany = point.type === "company"
                const isInvestor = point.type === "investor"
                const isPartner = point.type === "partner"
                const x = point.x * 4
                const y = point.y * 1.3

                return (
                  <g key={`point-${index}`}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={isCompany ? 12 : isInvestor ? 10 : 8}
                      fill={isCompany ? "#8b5cf6" : isInvestor ? "#3b82f6" : "#10b981"}
                      opacity={0.8}
                      animate={{
                        r: [
                          isCompany ? 12 : isInvestor ? 10 : 8,
                          isCompany ? 14 : isInvestor ? 12 : 10,
                          isCompany ? 12 : isInvestor ? 10 : 8,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    />

                    <text x={x} y={y + 25} fontSize="10" fill="#4b5563" textAnchor="middle">
                      {point.type === "company" ? "Company" : point.type === "investor" ? "Investor" : "Partner"}
                    </text>
                  </g>
                )
              })}

              {/* Central node - Botic Partners - centered in the full width */}
              <motion.circle
                cx="600"
                cy="200"
                r="25"
                fill="#7c3aed"
                animate={{
                  r: [25, 30, 25],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              <text x="600" y="205" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
                Botic Partners
              </text>

              {/* Animated pulses from central node */}
              <motion.circle
                cx="600"
                cy="200"
                r="25"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                animate={{
                  r: [25, 150, 25],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              <motion.circle
                cx="600"
                cy="200"
                r="25"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="1"
                animate={{
                  r: [25, 250, 25],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              />
            </svg>
          </div>

          {/* Growth chart overlay - positioned at the bottom right */}
          <div className="absolute bottom-0 right-0 w-[350px] h-[150px] bg-white/80 backdrop-blur-sm p-4 z-20 rounded-tl-lg hidden md:block">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Market Growth with Strategic Partnerships</h4>
            <svg className="w-full h-[100px]" viewBox="0 0 300 100">
              {/* Chart grid */}
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={`grid-h-${i}`}
                  x1="40"
                  y1={20 * i + 10}
                  x2="280"
                  y2={20 * i + 10}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}

              {marketGrowthData.map((_, i) => (
                <line
                  key={`grid-v-${i}`}
                  x1={40 + i * 48}
                  y1="10"
                  x2={40 + i * 48}
                  y2="90"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}

              {/* X-axis labels */}
              {marketGrowthData.map((data, i) => (
                <text key={`label-${i}`} x={40 + i * 48} y="100" fontSize="8" fill="#4b5563" textAnchor="middle">
                  {data.year}
                </text>
              ))}

              {/* Y-axis labels */}
              <text x="30" y="90" fontSize="8" fill="#4b5563" textAnchor="end">
                0%
              </text>
              <text x="30" y="50" fontSize="8" fill="#4b5563" textAnchor="end">
                50%
              </text>
              <text x="30" y="10" fontSize="8" fill="#4b5563" textAnchor="end">
                100%
              </text>

              {/* Chart line */}
              <motion.path
                d={`M40,${90 - marketGrowthData[0].growth * 0.8} ${marketGrowthData
                  .slice(1)
                  .map((data, i) => {
                    const progress = Math.min(chartProgress / (100 / (marketGrowthData.length - 1)) - i, 1)
                    const x = 40 + (i + 1) * 48
                    const y = 90 - data.growth * 0.8 * progress
                    return `L${x},${y}`
                  })
                  .join(" ")}`}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {marketGrowthData.map((data, i) => {
                const progress = Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1)
                if (progress <= 0) return null

                return (
                  <motion.circle
                    key={`point-${i}`}
                    cx={40 + i * 48}
                    cy={90 - data.growth * 0.8}
                    r={5 * progress}
                    fill="#8b5cf6"
                    opacity={progress}
                    initial={{ r: 0 }}
                    animate={{ r: 5 * progress }}
                  />
                )
              })}

              {/* Partnership effect markers */}
              {[1, 3, 5].map((i) => {
                const progress = Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1)
                if (progress <= 0) return null

                return (
                  <g key={`partnership-${i}`} opacity={progress}>
                    <motion.circle
                      cx={40 + i * 48}
                      cy={90 - marketGrowthData[i].growth * 0.8}
                      r={8}
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      animate={{
                        r: [8, 12, 8],
                        opacity: [0.8, 0.4, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <text
                      x={40 + i * 48}
                      y={70 - marketGrowthData[i].growth * 0.8}
                      fontSize="8"
                      fill="#8b5cf6"
                      textAnchor="middle"
                    >
                      Partnership
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Real-time data indicator */}
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-md px-3 py-2 text-xs text-gray-500 flex items-center shadow-md z-30">
            <Activity className="h-3 w-3 text-purple-500 mr-1 animate-pulse" />
            <span className="relative">
              Live Partnership Data
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
            </span>
          </div>
        </motion.div>

        {/* Two-column layout for What We Do and How We Do It sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What We Do section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-blue-50 rounded-xl p-6 shadow-lg border border-blue-100 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">What do we do?</h3>
            </div>
            <p className="text-blue-700 mb-4">We facilitate high-value connections between companies seeking:</p>

            <div className="space-y-4">
              {whatWeDo.map((item, index) => {
                const Icon = item.icon
                const isHovered = hoveredItem === index

                return (
                  <motion.div
                    key={index}
                    className={`flex items-start p-3 rounded-lg transition-all duration-300 ${
                      isHovered ? "bg-blue-100/70" : "hover:bg-blue-100/50"
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-blue-200 mr-3 flex-shrink-0 mt-0.5"
                      animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        rotate: isHovered ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 1,
                        repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <Icon className="h-5 w-5 text-blue-600" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        {index === 0
                          ? "New Clients or Strategic Partners"
                          : index === 1
                            ? "Investors or Potential Buyers"
                            : "Collaboration Opportunities in Key Industries"}
                      </h4>
                      <p className="text-sm text-blue-700 mt-1">
                        {index === 0
                          ? "We facilitate high-value connections between companies seeking new business relationships."
                          : index === 1
                            ? "We connect businesses with the right investors or buyers to fuel growth or enable transitions."
                            : "We identify and facilitate strategic collaborations across industries for mutual benefit."}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* How We Do It section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-green-50 rounded-xl p-6 shadow-lg border border-green-100 h-full"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-green-100 mr-3">
                <Lightbulb className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">How do we do it?</h3>
            </div>

            <div className="space-y-4">
              {howWeDoIt.map((item, index) => {
                const Icon = item.icon
                const isHovered = hoveredMethod === index

                return (
                  <motion.div
                    key={index}
                    className={`flex items-start p-3 rounded-lg transition-all duration-300 ${
                      isHovered ? "bg-green-100/70" : "hover:bg-green-100/50"
                    }`}
                    onMouseEnter={() => setHoveredMethod(index)}
                    onMouseLeave={() => setHoveredMethod(null)}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-green-200 mr-3 flex-shrink-0 mt-0.5"
                      animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        rotate: isHovered ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 1,
                        repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <Icon className="h-5 w-5 text-green-600" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-green-900">
                        {index === 0
                          ? "No Platforms, No Automation"
                          : index === 1
                            ? "Fast and Flexible"
                            : "Trust-Based Approach"}
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
                        {index === 0
                          ? "We leverage our validated direct network instead of relying on automated platforms."
                          : index === 1
                            ? "We tailor our approach to each case, ensuring high-value introductions that matter."
                            : "Every connection is relevant and has real potential for meaningful business outcomes."}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Call to Action - centered below the two columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full max-w-md"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200 w-full relative overflow-hidden group py-6 text-lg"
            >
              <span className="relative z-10 flex items-center justify-center">
                Looking for the right connection to grow your business? Let's talk.
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>
              <motion.span
                className="absolute inset-0 bg-purple-800 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

