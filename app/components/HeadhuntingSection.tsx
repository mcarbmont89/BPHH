"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"
import { Search, CheckCircle, TrendingUp, Users, BarChart, Brain, Activity } from "lucide-react"
import { useLanguage } from "@/lib/i18n/LanguageContext"

// Data flow animation points
const dataFlowPoints = [
  { x: 150, y: 150 },
  { x: 650, y: 200 },
  { x: 350, y: 500 },
  { x: 550, y: 450 },
  { x: 250, y: 300 },
  { x: 450, y: 150 },
  { x: 600, y: 350 },
  { x: 200, y: 400 },
]

// Particle animation points
const particlePoints = Array.from({ length: 40 }, () => ({
  x: Math.random() * 1200,
  y: Math.random() * 600,
  size: Math.random() * 5 + 2,
  speed: Math.random() * 3 + 2,
}))

// Why our headhunting stands out points
const standoutPoints = [
  "services.headhunting.points.0",
  "services.headhunting.points.1",
  "services.headhunting.points.2",
]

// Success metrics with animated counters
const metrics = [
  {
    id: "placements",
    value: "93%",
    target: 93,
    label: "services.headhunting.metrics.0",
    icon: TrendingUp,
    color: "text-blue-500",
  },
  {
    id: "retention",
    value: "85%",
    target: 85,
    label: "services.headhunting.metrics.1",
    icon: Users,
    color: "text-blue-500",
  },
  {
    id: "cost",
    value: "50%",
    target: 50,
    label: "services.headhunting.metrics.2",
    icon: BarChart,
    color: "text-blue-500",
  },
  {
    id: "professionals",
    value: "10k+",
    target: 10000,
    label: "services.headhunting.metrics.3",
    icon: CheckCircle,
    color: "text-blue-500",
  },
]

export default function HeadhuntingSection() {
  const { t } = useLanguage()
  const [hoveredBox, setHoveredBox] = useState<number | null>(null)
  const [animateParticles, setAnimateParticles] = useState(true)
  const [highlightedMetric, setHighlightedMetric] = useState<number | null>(null)
  const [counters, setCounters] = useState({
    placements: Math.floor(93 * 0.6),
    retention: Math.floor(85 * 0.6),
    cost: Math.floor(50 * 0.6),
    professionals: Math.floor(10000 * 0.6),
    network: Math.floor(6000 * 0.6),
  })

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  // Testimonials with auto-rotation
  const testimonials = [
    {
      quote: "services.headhunting.testimonials.0.quote",
      author: "services.headhunting.testimonials.0.author",
    },
    {
      quote: "services.headhunting.testimonials.1.quote",
      author: "services.headhunting.testimonials.1.author",
    },
    {
      quote: "services.headhunting.testimonials.2.quote",
      author: "services.headhunting.testimonials.2.author",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 9000) // Changed from 4500 to 9000 for longer display time
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Animate counters when in view
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (hoveredBox === 1) {
      let frame = 0
      const frames = 25 // Reduced from 50 to 25 for faster animation

      interval = setInterval(() => {
        frame++
        setCounters({
          placements: Math.min(Math.floor(93 * (0.6 + (0.4 * frame) / frames)), 93),
          retention: Math.min(Math.floor(85 * (0.6 + (0.4 * frame) / frames)), 85),
          cost: Math.min(Math.floor(50 * (0.6 + (0.4 * frame) / frames)), 50),
          professionals: Math.min(Math.floor(10000 * (0.6 + (0.4 * frame) / frames)), 10000),
          network: Math.min(Math.floor(6000 * (0.6 + (0.4 * frame) / frames)), 6000),
        })

        if (frame >= frames) clearInterval(interval)
      }, 15) // Reduced from 18 to 15ms for faster animation
    } else {
      // Reset to 60% instead of 0
      setCounters({
        placements: Math.floor(93 * 0.6),
        retention: Math.floor(85 * 0.6),
        cost: Math.floor(50 * 0.6),
        professionals: Math.floor(10000 * 0.6),
        network: Math.floor(6000 * 0.6),
      })
    }

    return () => clearInterval(interval)
  }, [hoveredBox])

  // Highlight random metrics periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedMetric(Math.floor(Math.random() * metrics.length))
      setTimeout(() => setHighlightedMetric(null), 1800)
    }, 3600)

    return () => clearInterval(interval)
  }, [metrics.length])

  // Format counter display
  const formatCounter = (id: string, value: number) => {
    if (id === "professionals" || id === "network") {
      if (value >= 10000) return "10k+"
      if (value >= 1000) return `${Math.floor(value / 1000)}k+`
      return value
    }
    return `${value}%`
  }

  // Auto-expand boxes when section comes into view
  useEffect(() => {
    if (isInView) {
      // Set a small delay to make the expansion feel natural
      const timer = setTimeout(() => {
        // Set all boxes to be "hovered" state
        setHoveredBox(0) // Start with the first box

        // Animate counters for the success metrics box
        let frame = 0
        const frames = 25
        const interval = setInterval(() => {
          frame++
          setCounters({
            placements: Math.min(Math.floor(93 * (0.6 + (0.4 * frame) / frames)), 93),
            retention: Math.min(Math.floor(85 * (0.6 + (0.4 * frame) / frames)), 85),
            cost: Math.min(Math.floor(50 * (0.6 + (0.4 * frame) / frames)), 50),
            professionals: Math.min(Math.floor(10000 * (0.6 + (0.4 * frame) / frames)), 10000),
            network: Math.min(Math.floor(6000 * (0.6 + (0.4 * frame) / frames)), 6000),
          })

          if (frame >= frames) {
            clearInterval(interval)
            // After the first box animation completes, show the second box
            setTimeout(() => setHoveredBox(1), 500)
            // Then after another delay, show the third box
            setTimeout(() => setHoveredBox(2), 1000)
          }
        }, 15)

        return () => {
          clearInterval(interval)
          clearTimeout(timer)
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative" ref={sectionRef}>
      {/* Dynamic background with particles and flow lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 600">
          <defs>
            <radialGradient id="headhuntingGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background grid */}
          <pattern id="headhuntingGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f0f0f0" strokeWidth="1" />
          </pattern>
          <rect width="1200" height="600" fill="url(#headhuntingGrid)" />

          {/* Glow effects */}
          <circle cx="600" cy="300" r="200" fill="url(#headhuntingGlow)">
            <animate attributeName="r" values="200;220;200" dur="9s" repeatCount="indefinite" />
          </circle>

          {/* Data flow lines */}
          {dataFlowPoints.map((point, index) => (
            <g key={`flow-${index}`}>
              <path
                d={`M600,300 Q${(600 + point.x) / 2 + (Math.random() * 80 - 40)},${
                  (300 + point.y) / 2 + (Math.random() * 80 - 40)
                } ${point.x},${point.y}`}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                opacity="0.2"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="100"
                  dur={`${Math.random() * 3.6 + 5.4}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}
        </svg>

        {/* Floating particles */}
        <AnimatePresence>
          {animateParticles &&
            particlePoints.map((point, index) => (
              <motion.div
                key={`particle-${index}`}
                className="absolute rounded-full bg-primary/20"
                initial={{ x: point.x, y: point.y, opacity: 0 }}
                animate={{
                  x: [point.x, point.x + (Math.random() * 100 - 50)],
                  y: [point.y, point.y + (Math.random() * 100 - 50)],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: point.speed * 4.5,
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
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t("services.headhunting.title")}
          </h2>
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2.7, repeat: Number.POSITIVE_INFINITY }}
              className="mr-2"
            >
              <Search className="h-6 w-6 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-semibold">{t("services.headhunting.description")}</h3>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.headhunting.longDescription")}</p>
        </motion.div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Left Box - Why Our Headhunting Stands Out */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.09 }}
            className={`bg-white p-6 rounded-xl shadow-lg border-2 transition-all duration-300 ${
              hoveredBox === 0 || isInView ? "border-blue-400 shadow-xl" : "border-gray-100"
            }`}
            onMouseEnter={() => setHoveredBox(0)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="p-3 rounded-full bg-blue-100 mr-3"
                animate={{
                  scale: hoveredBox === 0 ? [1, 1.1, 1] : 1,
                  rotate: hoveredBox === 0 ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 1.8, repeat: hoveredBox === 0 ? Number.POSITIVE_INFINITY : 0 }}
              >
                <Brain className="h-6 w-6 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">{t("services.headhunting.whyDifferent")}</h3>
            </div>

            {/* Animated data visualization */}
            <div className="relative h-32 mb-6 bg-blue-50/50 rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                {/* AI matching visualization */}
                <defs>
                  <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Base grid */}
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
                </pattern>
                <rect width="300" height="100" fill="url(#smallGrid)" />

                {/* Animated matching lines */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <g key={`match-line-${i}`}>
                    <path
                      d={`M0,${20 + i * 15} C${50 + i * 10},${40 + i * 5} ${100 + i * 20},${60 - i * 8} ${300},${30 + i * 12}`}
                      fill="none"
                      stroke="url(#matchGradient)"
                      strokeWidth="2"
                      opacity={hoveredBox === 0 ? 0.7 : 0.3}
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from={`${i * 50}`}
                        to="0"
                        dur={`${2.7 + i * 0.45}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-dasharray"
                        values={`${2 + i},${8 - i};${5 + i},${3 - i};${2 + i},${8 - i}`}
                        dur={`${4.5 + i}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                ))}

                {/* Data points */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <circle
                    key={`data-point-${i}`}
                    cx={50 + i * 30}
                    cy={30 + Math.sin(i) * 20}
                    r={hoveredBox === 0 ? 3 + Math.random() * 2 : 2}
                    fill="#3b82f6"
                    opacity={hoveredBox === 0 ? 0.8 : 0.4}
                  >
                    <animate
                      attributeName="cy"
                      values={`${30 + Math.sin(i) * 20};${30 + Math.cos(i) * 25};${30 + Math.sin(i) * 20}`}
                      dur={`${2.7 + i * 0.45}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="r"
                      values={`${hoveredBox === 0 ? 3 : 2};${hoveredBox === 0 ? 5 : 3};${hoveredBox === 0 ? 3 : 2}`}
                      dur={`${1.8 + i * 0.27}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </svg>

              {/* Overlay label */}
              <div className="absolute top-2 left-2 bg-white/80 rounded px-2 py-1 text-xs font-medium text-blue-600">
                AI Matching Algorithm
              </div>
            </div>

            <AnimatePresence>
              {(hoveredBox === 0 || isInView) && (
                <ul className="space-y-4 mt-6">
                  {standoutPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18 + index * 0.09 }}
                    >
                      <motion.div
                        animate={{
                          scale: hoveredBox === 0 ? [1, 1.2, 1] : 1,
                          rotate: hoveredBox === 0 ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 1.8,
                          delay: index * 0.27,
                          repeat: hoveredBox === 0 ? Number.POSITIVE_INFINITY : 0,
                        }}
                        className="mr-2 flex-shrink-0 mt-0.5"
                      >
                        <CheckCircle className="h-5 w-5 text-blue-500" />
                      </motion.div>
                      <span className="text-gray-700">{t(point)}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>

            <motion.div
              className="mt-6 pt-4 border-t border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
            >
              <p className="text-gray-600 italic">
                "Our AI algorithms analyze thousands of profiles to find your perfect match in seconds."
              </p>
            </motion.div>
          </motion.div>

          {/* Middle Box - Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className={`bg-white p-6 rounded-xl shadow-lg border-2 transition-all duration-300 ${
              hoveredBox === 1 || isInView ? "border-green-400 shadow-xl" : "border-gray-100"
            }`}
            onMouseEnter={() => setHoveredBox(1)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="p-3 rounded-full bg-green-100 mr-3"
                animate={{
                  scale: hoveredBox === 1 ? [1, 1.1, 1] : 1,
                  rotate: hoveredBox === 1 ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 1.8, repeat: hoveredBox === 1 ? Number.POSITIVE_INFINITY : 0 }}
              >
                <TrendingUp className="h-6 w-6 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">{t("services.headhunting.metricsTitle")}</h3>
            </div>

            {/* Animated chart */}
            <div className="relative h-32 mb-6 bg-green-50/50 rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                {/* Chart background */}
                <rect x="0" y="0" width="300" height="100" fill="#f9fafb" />

                {/* Grid lines */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <line key={`grid-h-${i}`} x1="0" y1={20 * i} x2="300" y2={20 * i} stroke="#e5e7eb" strokeWidth="1" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`grid-v-${i}`} x1={50 * i} y1="0" x2={50 * i} y2="100" stroke="#e5e7eb" strokeWidth="1" />
                ))}

                {/* Chart bars - Now with 4 bars including Network */}
                <motion.rect
                  x="30"
                  y={100 - (hoveredBox === 1 ? counters.placements : 0) * 0.9}
                  width="40"
                  height={(hoveredBox === 1 ? counters.placements : 0) * 0.9}
                  fill="#10b981"
                  opacity="0.8"
                />
                <motion.rect
                  x="90"
                  y={100 - (hoveredBox === 1 ? counters.retention : 0) * 0.9}
                  width="40"
                  height={(hoveredBox === 1 ? counters.retention : 0) * 0.9}
                  fill="#3b82f6"
                  opacity="0.8"
                />
                <motion.rect
                  x="150"
                  y={100 - (hoveredBox === 1 ? counters.cost : 0) * 0.9}
                  width="40"
                  height={(hoveredBox === 1 ? counters.cost : 0) * 0.9}
                  fill="#8b5cf6"
                  opacity="0.8"
                />
                <motion.rect
                  x="210"
                  y={100 - (hoveredBox === 1 ? 80 : 0)}
                  width="40"
                  height={hoveredBox === 1 ? 80 : 0}
                  fill="#f59e0b"
                  opacity="0.8"
                />

                {/* Labels */}
                <text x="50" y="95" textAnchor="middle" fontSize="8" fill="#374151">
                  Placements
                </text>
                <text x="110" y="95" textAnchor="middle" fontSize="8" fill="#374151">
                  Retention
                </text>
                <text x="170" y="95" textAnchor="middle" fontSize="8" fill="#374151">
                  Cost
                </text>
                <text x="230" y="95" textAnchor="middle" fontSize="8" fill="#374151">
                  Network
                </text>
              </svg>

              {/* Overlay label */}
              <div className="absolute top-2 left-2 bg-white/80 rounded px-2 py-1 text-xs font-medium text-green-600">
                Performance Metrics
              </div>
            </div>

            <AnimatePresence>
              {(hoveredBox === 1 || isInView) && (
                <div className="grid grid-cols-1 gap-4 mt-6">
                  {metrics.slice(0, 4).map((metric, index) => {
                    const Icon = metric.icon
                    const isHighlighted = highlightedMetric === index

                    return (
                      <motion.div
                        key={index}
                        className={`flex items-center ${isHighlighted ? "bg-green-50 rounded-lg p-2 -mx-2" : ""}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.27 + index * 0.09 }}
                        animate={{
                          scale: isHighlighted ? [1, 1.05, 1] : 1,
                        }}
                      >
                        <motion.div
                          className={`p-2 rounded-full ${isHighlighted ? "bg-green-100" : "bg-green-50"} mr-3`}
                          animate={{
                            scale: hoveredBox === 1 || isHighlighted ? [1, 1.2, 1] : 1,
                            rotate: isHighlighted ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{
                            duration: isHighlighted ? 0.45 : 1.8,
                            delay: index * 0.09,
                            repeat: hoveredBox === 1 || isHighlighted ? Number.POSITIVE_INFINITY : 0,
                          }}
                        >
                          <Icon className={`h-5 w-5 ${isHighlighted ? "text-green-600" : "text-green-500"}`} />
                        </motion.div>
                        <div>
                          <motion.span
                            className={`text-2xl font-bold ${isHighlighted ? "text-green-600" : "text-green-500"}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.36 + index * 0.09 }}
                          >
                            {metric.id === "professionals"
                              ? formatCounter(metric.id, counters.professionals)
                              : metric.id === "placements"
                                ? formatCounter(metric.id, counters.placements)
                                : metric.id === "retention"
                                  ? formatCounter(metric.id, counters.retention)
                                  : formatCounter(metric.id, counters.cost)}
                          </motion.span>
                          <span className="text-gray-700 ml-2">{t(metric.label)}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </AnimatePresence>

            <motion.div
              className="mt-6 pt-4 border-t border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.63 }}
            >
              <p className="text-gray-600 text-center">{t("services.headhunting.dataApproach")}</p>
            </motion.div>
          </motion.div>

          {/* Right Box - CTA & Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.27 }}
            className={`bg-white p-6 rounded-xl shadow-lg border-2 transition-all duration-300 ${
              hoveredBox === 2 || isInView ? "border-orange-400 shadow-xl" : "border-gray-100"
            }`}
            onMouseEnter={() => setHoveredBox(2)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="p-3 rounded-full bg-orange-100 mr-3"
                animate={{
                  scale: hoveredBox === 2 ? [1, 1.1, 1] : 1,
                  rotate: hoveredBox === 2 ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 1.8, repeat: hoveredBox === 2 ? Number.POSITIVE_INFINITY : 0 }}
              >
                <Users className="h-6 w-6 text-orange-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">{t("testimonials.title")}</h3>
            </div>

            {/* Animated satisfaction meter */}
            <div className="relative h-32 mb-6 bg-orange-50/50 rounded-lg overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                {/* Satisfaction meter background */}
                <defs>
                  <linearGradient id="satisfactionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Meter background */}
                <rect x="30" y="60" width="240" height="20" rx="10" fill="#e5e7eb" />

                {/* Animated meter fill */}
                <motion.rect
                  x="30"
                  y="60"
                  width={216} // Always show 90% (216 is 90% of 240)
                  height="20"
                  rx="10"
                  fill="url(#satisfactionGradient)"
                  initial={{ width: 216 }}
                  animate={{ width: 216 }}
                  transition={{ duration: 1.35, ease: "easeOut" }} // 10% faster (1.5 to 1.35)
                />

                {/* Meter labels */}
                <text x="30" y="50" fontSize="10" fill="#374151">
                  0%
                </text>
                <text x="150" y="50" fontSize="10" fill="#374151" textAnchor="middle">
                  50%
                </text>
                <text x="270" y="50" fontSize="10" fill="#374151" textAnchor="end">
                  100%
                </text>

                {/* Satisfaction percentage */}
                <text x="150" y="75" fontSize="12" fill="white" fontWeight="bold" textAnchor="middle">
                  90% Client Satisfaction
                </text>

                {/* Animated icons */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <g key={`satisfaction-icon-${i}`} opacity={hoveredBox === 2 ? 1 : 0}>
                    <motion.circle
                      cx={60 + i * 45}
                      cy="20"
                      r="8"
                      fill="#f59e0b"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 1.8,
                        delay: i * 0.27,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </g>
                ))}
              </svg>

              {/* Overlay label */}
              <div className="absolute top-2 left-2 bg-white/80 rounded px-2 py-1 text-xs font-medium text-orange-600">
                Client Satisfaction
              </div>
            </div>

            <AnimatePresence>
              {(hoveredBox === 2 || isInView) && (
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.36 }}
                >
                  <p className="text-lg text-gray-700 mb-6">
                    "See how our AI-driven approach transformed hiring for top companies."
                  </p>

                  <motion.div
                    className="mb-8 min-h-[120px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.45 }}
                      >
                        <blockquote className="italic text-gray-600 border-l-4 border-orange-300 pl-4 py-2 mb-4">
                          "{t(testimonials[currentTestimonial].quote)}"
                        </blockquote>
                        <p className="text-right text-sm text-gray-500">
                          - {t(testimonials[currentTestimonial].author)}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Real-time data indicator */}
        <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm rounded-md px-4 py-3 text-sm text-gray-500 flex items-center shadow-md z-20">
          <Activity className="h-4 w-4 text-primary mr-2 animate-pulse" />
          <span className="relative">
            Real-time AI Matching
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
          </span>
        </div>

        {/* Bottom animated wave */}
        <div className="mt-16 relative h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="rgba(124, 58, 237, 0.05)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,245.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

