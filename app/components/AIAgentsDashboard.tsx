"use client"

import { useState, useEffect, useRef } from "react"
import {
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  Brain,
  Search,
  FileText,
  MessageSquare,
  BarChart,
  Lock,
  Zap,
} from "lucide-react"
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Button } from "@/components/ui/button"

// Estilos para ocultar la barra de desplazamiento pero mantener la funcionalidad
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

// Talent positions data
const positions = [
  { id: 1, title: "Senior AI Engineer", company: "TechCorp", match: 94, status: "interviewing" },
  { id: 2, title: "VP of Engineering", company: "InnovateLabs", match: 89, status: "sourcing" },
  { id: 3, title: "ASIC Design Lead", company: "ChipWorks", match: 92, status: "analyzing" },
  { id: 4, title: "DevOps Specialist", company: "CloudNine", match: 87, status: "matched" },
  { id: 5, title: "Product Manager", company: "FutureTech", match: 91, status: "interviewing" },
  { id: 6, title: "Data Scientist", company: "AnalyticsPro", match: 95, status: "analyzing" },
  { id: 7, title: "UX/UI Designer", company: "DesignHub", match: 88, status: "sourcing" },
  { id: 8, title: "Cybersecurity Expert", company: "SecureNet", match: 93, status: "matched" },
]

// AI insights
const insights = [
  {
    id: 1,
    message: "AI Agent detected high potential match for Senior AI Engineer position",
    type: "match",
    icon: CheckCircle,
  },
  {
    id: 2,
    message: "Interview analysis complete: VP candidate shows strong leadership traits",
    type: "analysis",
    icon: BarChart,
  },
  {
    id: 3,
    message: "New talent pool identified for ASIC designers in APAC region",
    type: "discovery",
    icon: Search,
  },
  {
    id: 4,
    message: "AI Agent filtered 50 candidates for DevOps position",
    type: "scheduling",
    icon: Clock,
  },
  {
    id: 5,
    message: "Resume analysis complete: 87% match for Product Manager role",
    type: "analysis",
    icon: FileText,
  },
  {
    id: 6,
    message: "Sentiment analysis from Data Scientist interview: Very Positive",
    type: "sentiment",
    icon: TrendingUp,
  },
  {
    id: 7,
    message: "AI Agent identified skill gap in UX/UI candidate portfolio",
    type: "alert",
    icon: AlertCircle,
  },
  {
    id: 8,
    message: "Cybersecurity Expert candidate verified with blockchain credentials",
    type: "verification",
    icon: Lock,
  },
]

// Get color based on match percentage
const getMatchColor = (match) => {
  if (match >= 90) return "#22c55e" // Green
  if (match >= 85) return "#eab308" // Yellow
  if (match >= 80) return "#f97316" // Orange
  return "#ef4444" // Red
}

// Get status icon and color
const getStatusInfo = (status) => {
  switch (status) {
    case "sourcing":
      return { icon: Search, color: "#3b82f6" } // Blue
    case "analyzing":
      return { icon: FileText, color: "#8b5cf6" } // Purple
    case "interviewing":
      return { icon: MessageSquare, color: "#f59e0b" } // Amber
    case "matched":
      return { icon: CheckCircle, color: "#10b981" } // Emerald
    default:
      return { icon: Activity, color: "#6b7280" } // Gray
  }
}

// AI features
const aiFeatures = [
  {
    icon: Search,
    title: "Automated Talent Sourcing",
    description: "AI agents scan multiple platforms to identify ideal candidates.",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Understand and analyze candidate communications and responses.",
  },
  {
    icon: BarChart,
    title: "Predictive Analytics",
    description: "Forecast candidate success and retention based on data patterns.",
  },
  {
    icon: Lock,
    title: "Secure Data Handling",
    description: "Ensure compliance and data security throughout the process.",
  },
]

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

// Particle animation points - Increased size and count
const particlePoints = Array.from({ length: 60 }, () => ({
  x: Math.random() * 800,
  y: Math.random() * 600,
  size: Math.random() * 6 + 2, // Increased size
  speed: Math.random() * 4 + 2, // Increased speed
}))

export default function AIAgentsDashboard() {
  const { t } = useLanguage()
  const [activeInsights, setActiveInsights] = useState([])
  const [highlightedPosition, setHighlightedPosition] = useState(null)
  const [time, setTime] = useState(new Date())
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [animateParticles, setAnimateParticles] = useState(true)

  // Referencias para animaciones
  const dashboardRef = useRef(null)
  const isInView = useInView(dashboardRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  // Efecto para controlar animaciones basadas en visibilidad
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Simulate real-time insights
  useEffect(() => {
    // Start with 3 insights
    setActiveInsights(insights.slice(0, 3))

    // Add a new insight every 3-5 seconds
    const addInsight = () => {
      setActiveInsights((current) => {
        // Select a random insight not already in the list
        const availableInsights = insights.filter((insight) => !current.some((i) => i.id === insight.id))

        if (availableInsights.length === 0) return current

        const newInsight = availableInsights[Math.floor(Math.random() * availableInsights.length)]

        // Keep only the latest 5 insights
        const updatedInsights = [...current, newInsight].slice(-5)
        return updatedInsights
      })
    }

    const insightInterval = setInterval(addInsight, Math.random() * 2000 + 3000)
    return () => clearInterval(insightInterval)
  }, [])

  // Simulate position highlights
  useEffect(() => {
    const highlightInterval = setInterval(() => {
      const randomPosition = positions[Math.floor(Math.random() * positions.length)].id
      setHighlightedPosition(randomPosition)

      // Reset after 2 seconds
      setTimeout(() => setHighlightedPosition(null), 2000)
    }, 5000)

    return () => clearInterval(highlightInterval)
  }, [])

  // Aplicar estilos para ocultar scrollbar
  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.innerHTML = scrollbarHideStyles
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50" ref={dashboardRef}>
      <div className="container mx-auto px-4">
        {/* Update the title and subtitle to use translations */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t("services.aiTalentMatching.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.aiTalentMatching.subtitle")}</p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <div className="bg-gray-100 p-3 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-6 w-6 text-primary mr-2" />
              <h3 className="font-bold text-lg">{t("solution.aiAgents.talentDashboard")}</h3>
            </div>
            <div className="text-gray-500 text-sm flex items-center">
              <Clock className="h-5 w-5 mr-1" />
              <span>
                {time.toLocaleTimeString()} | {time.toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left side: AI-powered recruitment visualization */}
            <div className="w-full lg:w-2/3 p-4 relative">
              <motion.div
                className="absolute top-4 left-4 z-10 bg-white/90 p-3 md:p-4 rounded-md text-xs md:text-sm shadow-lg max-w-[180px] md:max-w-none hidden md:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-bold mb-2 md:mb-3 text-base md:text-xl">{t("solution.aiAgents.matchQuality")}</div>
                <div className="flex flex-col space-y-2 md:space-y-4">
                  <div className="flex items-center gap-2 md:gap-4">
                    <motion.span
                      className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#22c55e]"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    ></motion.span>
                    <span className="text-sm md:text-base font-medium">{t("solution.aiAgents.excellentMatch")}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <motion.span
                      className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#eab308]"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    ></motion.span>
                    <span className="text-sm md:text-base font-medium">{t("solution.aiAgents.goodMatch")}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <motion.span
                      className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#f97316]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    ></motion.span>
                    <span className="text-sm md:text-base font-medium">{t("solution.aiAgents.potentialMatch")}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <motion.span
                      className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#ef4444]"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                    ></motion.span>
                    <span className="text-sm md:text-base font-medium">{t("solution.aiAgents.reviewRequired")}</span>
                  </div>
                </div>
              </motion.div>

              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-50 rounded-md overflow-hidden border border-gray-100">
                {/* Fondo con partículas animadas */}
                <div className="absolute inset-0 overflow-hidden">
                  <AnimatePresence>
                    {animateParticles &&
                      particlePoints.map((point, index) => (
                        <motion.div
                          key={`particle-${index}`}
                          className="absolute rounded-full bg-primary/30"
                          initial={{ x: point.x, y: point.y, opacity: 0 }}
                          animate={{
                            x: [point.x, point.x + (Math.random() * 150 - 75)], // Increased movement range
                            y: [point.y, point.y + (Math.random() * 150 - 75)], // Increased movement range
                            opacity: [0, 0.8, 0], // Increased opacity
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

                {/* Talent matching visualization */}
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  {/* Background grid with animation */}
                  <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f0f0f0" strokeWidth="1" />
                    </pattern>
                    <radialGradient id="aiGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" /> {/* Increased opacity */}
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="800" height="600" fill="url(#grid)" />

                  {/* Glow effect behind AI core - Increased size */}
                  <circle cx="400" cy="300" r="120" fill="url(#aiGlow)">
                    <animate attributeName="r" values="120;140;120" dur="4s" repeatCount="indefinite" />
                  </circle>

                  {/* Data flow lines in background - Increased width and animation */}
                  {dataFlowPoints.map((point, index) => (
                    <g key={`flow-${index}`}>
                      <path
                        d={`M400,300 Q${(400 + point.x) / 2 + (Math.random() * 80 - 40)},${
                          (300 + point.y) / 2 + (Math.random() * 80 - 40)
                        } ${point.x},${point.y}`}
                        fill="none"
                        stroke="#7c3aed"
                        strokeWidth="2" // Increased width
                        strokeDasharray="5,5"
                        opacity="0.3" // Increased opacity
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="100"
                          dur={`${Math.random() * 4 + 3}s`} // Faster animation
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  ))}

                  {/* Central AI node with pulsing animation - Increased size */}
                  <g>
                    <circle cx="400" cy="300" r="50" fill="#7c3aed" opacity="0.8">
                      {" "}
                      {/* Increased radius */}
                      <animate attributeName="r" values="50;60;50" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.6;0.8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <foreignObject x="380" y="280" width="40" height="40">
                      {" "}
                      {/* Adjusted position and size */}
                      <Brain className="w-10 h-10 text-white" /> {/* Increased size */}
                    </foreignObject>
                    <text x="400" y="360" textAnchor="middle" fill="#7c3aed" fontSize="16" fontWeight="bold">
                      {t("solution.aiAgents.aiMatchingCore")}
                    </text>
                  </g>

                  {/* Rotating orbit path - Increased animation */}
                  <circle
                    cx="400"
                    cy="300"
                    r="180"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2" // Increased width
                    strokeDasharray="5,5"
                    opacity="0.4" // Increased opacity
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="100" dur="15s" repeatCount="indefinite" />{" "}
                    {/* Faster animation */}
                    <animate attributeName="r" values="180;190;180" dur="20s" repeatCount="indefinite" />{" "}
                    {/* Added size animation */}
                  </circle>

                  {/* Position nodes */}
                  {positions.map((position, index) => {
                    // Calculate position in a circle around the AI core
                    const angle = (index / positions.length) * Math.PI * 2
                    const radius = 180
                    const x = 400 + Math.cos(angle) * radius
                    const y = 300 + Math.sin(angle) * radius

                    const isHighlighted = position.id === highlightedPosition
                    const nodeRadius = isHighlighted ? 30 : 25 // Increased size
                    const pulseRadius = nodeRadius + 15 // Increased pulse size

                    const { icon: StatusIcon, color: statusColor } = getStatusInfo(position.status)

                    return (
                      <g key={position.id}>
                        {/* Connection line to AI core with animated gradient - Increased width */}
                        <line
                          x1="400"
                          y1="300"
                          x2={x}
                          y2={y}
                          stroke="#7c3aed"
                          strokeWidth="3" // Increased width
                          strokeDasharray="5,5"
                          opacity={isHighlighted ? "0.7" : "0.4"} // Increased opacity
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="100"
                            dur={isHighlighted ? "3s" : "15s"} // Faster animation
                            repeatCount="indefinite"
                          />
                        </line>

                        {/* Multiple data flow animations - Increased size and count */}
                        {isHighlighted && (
                          <>
                            <circle cx="400" cy="300" r="12" fill="#7c3aed" opacity="0.8">
                              {" "}
                              {/* Increased size */}
                              <animateMotion path={`M0,0 L${x - 400},${y - 300}`} dur="1.2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="400" cy="300" r="10" fill="#7c3aed" opacity="0.6">
                              {" "}
                              {/* Increased size */}
                              <animateMotion
                                path={`M0,0 L${x - 400},${y - 300}`}
                                dur="1.5s"
                                repeatCount="indefinite"
                                begin="0.3s"
                              />
                            </circle>
                            <circle cx="400" cy="300" r="8" fill="#7c3aed" opacity="0.4">
                              {" "}
                              {/* Increased size */}
                              <animateMotion
                                path={`M0,0 L${x - 400},${y - 300}`}
                                dur="1.8s"
                                repeatCount="indefinite"
                                begin="0.6s"
                              />
                            </circle>
                            <circle cx={x} cy={y} r="8" fill="#7c3aed" opacity="0.6">
                              {" "}
                              {/* Increased size */}
                              <animateMotion path={`M0,0 L${400 - x},${300 - y}`} dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx={x} cy={y} r="6" fill="#7c3aed" opacity="0.4">
                              {" "}
                              {/* Increased size */}
                              <animateMotion
                                path={`M0,0 L${400 - x},${300 - y}`}
                                dur="2.3s"
                                repeatCount="indefinite"
                                begin="0.4s"
                              />
                            </circle>
                          </>
                        )}

                        {/* Pulse animation when highlighted - Increased size and intensity */}
                        {isHighlighted && (
                          <>
                            <circle
                              cx={x}
                              cy={y}
                              r={pulseRadius}
                              fill="none"
                              stroke={getMatchColor(position.match)}
                              strokeWidth="3" // Increased width
                              opacity="0.7" // Increased opacity
                            >
                              <animate
                                attributeName="r"
                                values={`${pulseRadius};${pulseRadius + 25};${pulseRadius}`} // Increased range
                                dur="1.2s" // Faster animation
                                repeatCount="indefinite"
                              />
                              <animate attributeName="opacity" values="0.7;0;0.7" dur="1.2s" repeatCount="indefinite" />
                            </circle>
                            <circle
                              cx={x}
                              cy={y}
                              r={pulseRadius - 5}
                              fill="none"
                              stroke={getMatchColor(position.match)}
                              strokeWidth="2"
                              opacity="0.5" // Increased opacity
                            >
                              <animate
                                attributeName="r"
                                values={`${pulseRadius - 5};${pulseRadius + 20};${pulseRadius - 5}`} // Increased range
                                dur="1.5s" // Faster animation
                                repeatCount="indefinite"
                              />
                              <animate attributeName="opacity" values="0.5;0;0.5" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                            <circle
                              cx={x}
                              cy={y}
                              r={pulseRadius - 10}
                              fill="none"
                              stroke={getMatchColor(position.match)}
                              strokeWidth="1"
                              opacity="0.3"
                            >
                              <animate
                                attributeName="r"
                                values={`${pulseRadius - 10};${pulseRadius + 15};${pulseRadius - 10}`}
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                              <animate attributeName="opacity" values="0.3;0;0.3" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                          </>
                        )}

                        {/* Position node with hover effect - Increased size and movement */}
                        <circle
                          cx={x}
                          cy={y}
                          r={nodeRadius}
                          fill={getMatchColor(position.match)}
                          stroke="#fff"
                          strokeWidth="3" // Increased width
                          className={`transition-all duration-300 cursor-pointer ${isHighlighted ? "opacity-100" : "opacity-80"}`}
                          onMouseEnter={() => setHighlightedPosition(position.id)}
                          onMouseLeave={() => setTimeout(() => setHighlightedPosition(null), 1000)}
                        >
                          <animate
                            attributeName="r"
                            values={`${nodeRadius};${nodeRadius + 5};${nodeRadius}`} // Increased range
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${index * 0.5}s`}
                          />
                          <animate
                            attributeName="cy"
                            values={`${y};${y + (Math.random() * 15 - 7.5)};${y}`} // Increased range
                            dur="5s"
                            repeatCount="indefinite"
                            begin={`${index * 0.3}s`}
                          />
                          <animate
                            attributeName="cx"
                            values={`${x};${x + (Math.random() * 15 - 7.5)};${x}`} // Increased range
                            dur="6s"
                            repeatCount="indefinite"
                            begin={`${index * 0.2}s`}
                          />
                        </circle>

                        {/* Status icon with animation - Increased size */}
                        <circle
                          cx={x + nodeRadius * 0.7}
                          cy={y - nodeRadius * 0.7}
                          r={nodeRadius * 0.6} // Increased size
                          fill={statusColor}
                          stroke="#fff"
                          strokeWidth="2" // Increased width
                        >
                          <animate
                            attributeName="r"
                            values={`${nodeRadius * 0.6};${nodeRadius * 0.7};${nodeRadius * 0.6}`} // Increased range
                            dur="2s"
                            repeatCount="indefinite"
                            begin={`${index * 0.3}s`}
                          />
                        </circle>
                        <foreignObject x={x + nodeRadius * 0.7 - 8} y={y - nodeRadius * 0.7 - 8} width="16" height="16">
                          {" "}
                          {/* Adjusted position and size */}
                          <StatusIcon className="w-4 h-4 text-white" /> {/* Increased size */}
                        </foreignObject>

                        {/* Match percentage with counter animation - Increased size */}
                        <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                          {" "}
                          {/* Increased font size */}
                          {isHighlighted ? `${position.match}%` : `${position.match}%`}
                        </text>

                        {/* Position title (visible when highlighted) with animated appearance - Increased size */}
                        <AnimatePresence>
                          {isHighlighted && (
                            <>
                              <rect
                                x={x - 100} // Wider
                                y={y + 35}
                                width="200" // Wider
                                height="50" // Taller
                                rx="8" // Rounder corners
                                fill="white"
                                stroke="#e5e7eb"
                                strokeWidth="2" // Thicker border
                              >
                                <animate attributeName="opacity" from="0" to="1" dur="0.3s" fill="freeze" />
                              </rect>
                              <text
                                x={x}
                                y={y + 55}
                                textAnchor="middle"
                                fill="#374151"
                                fontSize="12" // Larger font
                                fontWeight="bold"
                              >
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
                                {position.title}
                              </text>
                              <text
                                x={x}
                                y={y + 75}
                                textAnchor="middle"
                                fill="#6b7280"
                                fontSize="10" // Larger font
                              >
                                <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
                                {position.company}
                              </text>
                            </>
                          )}
                        </AnimatePresence>
                      </g>
                    )
                  })}

                  {/* Decorative elements with random animations - Increased size and intensity */}
                  <g className="opacity-50">
                    {" "}
                    {/* Increased opacity */}
                    {dataFlowPoints.map((point, index) => (
                      <circle key={`deco-${index}`} cx={point.x} cy={point.y} r="4" fill="#7c3aed">
                        {" "}
                        {/* Increased size */}
                        <animate
                          attributeName="opacity"
                          values="0.5;0.9;0.5" // Increased opacity range
                          dur={`${Math.random() * 3 + 2}s`}
                          repeatCount="indefinite"
                          begin={`${index * 0.5}s`}
                        />
                        <animate
                          attributeName="r"
                          values={`3;6;3`} // Increased size range
                          dur={`${Math.random() * 3 + 2}s`}
                          repeatCount="indefinite"
                          begin={`${index * 0.5}s`}
                        />
                      </circle>
                    ))}
                  </g>
                </svg>

                {/* Real-time data overlay with animated icon - Increased size */}
                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-md px-4 py-3 text-sm text-gray-500 flex items-center shadow-md">
                  {" "}
                  {/* Increased size and padding */}
                  <Activity className="h-4 w-4 text-primary mr-2 animate-pulse" />
                  <span className="relative">
                    {t("aiAgents.realTimeData")}
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      {" "}
                      {/* Increased size */}
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  </span>
                </div>

                {/* Floating stats cards - Increased size and animation */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100 text-sm hidden md:block"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-bold mb-3 text-gray-700 text-lg">{t("solution.aiAgents.processingStats")}</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>{t("solution.aiAgents.profilesAnalyzed")}</span>
                      <motion.span
                        className="font-semibold text-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        2,458 today
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{t("solution.aiAgents.interviewsConducted")}</span>
                      <motion.span
                        className="font-semibold text-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      >
                        37 today
                      </motion.span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{t("solution.aiAgents.matchAccuracy")}</span>
                      <motion.span
                        className="font-semibold text-primary"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      >
                        94.3%
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right side: AI insights feed */}
            <div className="w-full lg:w-1/3 border-t lg:border-t-0 lg:border-l border-gray-200 p-4">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-primary mr-2 animate-pulse" />
                <h3 className="font-bold text-lg">{t("aiAgents.insights")}</h3>
              </div>

              <div className="space-y-4 h-[300px] md:h-[450px] overflow-y-auto overflow-x-hidden pr-2 scrollbar-hide">
                <AnimatePresence>
                  {activeInsights.map((insight, index) => {
                    const IconComponent = insight.icon

                    // Determine color based on insight type
                    let bgColor = "bg-gray-50"
                    let iconColor = "text-primary"
                    let borderColor = "border-gray-200"
                    let shadowColor = ""

                    if (insight.type === "alert") {
                      bgColor = "bg-red-50"
                      iconColor = "text-red-500"
                      borderColor = "border-red-100"
                      shadowColor = "shadow-red-100/50"
                    } else if (insight.type === "match") {
                      bgColor = "bg-green-50"
                      iconColor = "text-green-500"
                      borderColor = "border-green-100"
                      shadowColor = "shadow-green-100/50"
                    } else if (insight.type === "analysis") {
                      bgColor = "bg-purple-50"
                      iconColor = "text-purple-500"
                      borderColor = "border-purple-100"
                      shadowColor = "shadow-purple-100/50"
                    } else if (insight.type === "discovery") {
                      bgColor = "bg-blue-50"
                      iconColor = "text-blue-500"
                      borderColor = "border-blue-100"
                      shadowColor = "shadow-blue-100/50"
                    } else if (insight.type === "scheduling") {
                      bgColor = "bg-yellow-50"
                      iconColor = "text-yellow-500"
                      borderColor = "border-yellow-100"
                      shadowColor = "shadow-yellow-100/50"
                    } else if (insight.type === "sentiment") {
                      bgColor = "bg-indigo-50"
                      iconColor = "text-indigo-500"
                      borderColor = "border-indigo-100"
                      shadowColor = "shadow-indigo-100/50"
                    } else if (insight.type === "verification") {
                      bgColor = "bg-teal-50"
                      iconColor = "text-teal-500"
                      borderColor = "border-teal-100"
                      shadowColor = "shadow-teal-100/50"
                    }

                    return (
                      <motion.div
                        key={`${insight.id}-${index}`}
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          mass: 1,
                        }}
                        className={`${bgColor} border-2 ${borderColor} rounded-lg p-4 flex items-start gap-4 shadow-md ${shadowColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`${iconColor} flex-shrink-0 mt-0.5 p-3 bg-white rounded-full shadow-md`}>
                          <IconComponent className={`h-6 w-6`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 font-medium text-base">{insight.message}</p>
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-gray-400 text-sm">
                              {new Date(time.getTime() - index * 60000).toLocaleTimeString()}
                            </p>
                            <motion.span
                              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              {insight.type}
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
            <motion.h3
              className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Advanced Agentic AI Recruitment Features
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                const isHovered = hoveredFeature === index

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`bg-white p-4 md:p-5 rounded-lg shadow-md border-2 ${
                      isHovered ? "border-primary/30 shadow-xl" : "border-gray-100"
                    } transition-all duration-500`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    onTouchStart={() => setHoveredFeature(index)}
                    onTouchEnd={() => setTimeout(() => setHoveredFeature(null), 1000)}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-3 md:mb-4">
                      <motion.div
                        className={`p-2 md:p-3 rounded-full mb-2 sm:mb-0 sm:mr-3 ${
                          isHovered ? "bg-primary text-white" : "bg-primary/10 text-primary"
                        }`}
                        animate={{
                          scale: isHovered ? [1, 1.2, 1] : 1,
                          rotate: isHovered ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                          repeatType: "loop",
                        }}
                      >
                        <IconComponent className="h-5 w-5 md:h-7 md:w-7" />
                      </motion.div>
                      <h4 className="font-semibold text-base">
                        {t(
                          `solution.aiAgents.${index === 0 ? "automatedTalentSourcing" : index === 1 ? "naturalLanguageProcessing" : index === 2 ? "predictiveAnalytics" : "secureDataHandling"}`,
                        )}
                      </h4>
                    </div>
                    <motion.p
                      className="text-gray-600 text-xs md:text-sm"
                      animate={{
                        opacity: isHovered ? 1 : 0.8,
                      }}
                    >
                      {t(
                        `solution.aiAgents.${index === 0 ? "automatedTalentDescription" : index === 1 ? "naturalLanguageDescription" : index === 2 ? "predictiveAnalyticsDescription" : "secureDataDescription"}`,
                      )}
                    </motion.p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="p-4 md:p-8 flex justify-center bg-gradient-to-r from-primary/10 to-primary/20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center w-full max-w-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">
                In less than 2 days your candidates in a call
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-lg px-2">
                Our AI-powered matching system delivers qualified candidates faster than traditional recruitment
                methods.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 px-4 md:px-8 py-3 md:py-6 text-base md:text-lg w-full sm:w-auto"
                >
                  {t("solution.aiAgents.scheduleConsultation")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-6 md:w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
