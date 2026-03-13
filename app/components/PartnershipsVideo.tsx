"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Activity, Network, Lightbulb, Target, Rocket, Users, DollarSign, Briefcase, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

type ListItem = { title: string };
type ExplanatoryBlock = { title: string; description: string };

// Nodes spread across full 1200x400 viewBox, all connected to center (600,200)
const networkNodes = [
  { x: 130,  y: 90,  type: "company"  },
  { x: 370,  y: 55,  type: "investor" },
  { x: 600,  y: 50,  type: "partner"  },
  { x: 830,  y: 55,  type: "investor" },
  { x: 1070, y: 90,  type: "company"  },
  { x: 100,  y: 290, type: "investor" },
  { x: 340,  y: 340, type: "partner"  },
  { x: 860,  y: 340, type: "company"  },
  { x: 1100, y: 290, type: "partner"  },
];

// All nodes connect to center + a few cross-connections
const connectionLines = [
  ...networkNodes.map((_, i) => ({ from: -1, to: i })), // -1 = center
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 5, to: 6 },
  { from: 7, to: 8 },
];

const particlePoints = Array.from({ length: 25 }, () => ({
  x: Math.random() * 1200,
  y: Math.random() * 500,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 3 + 2,
}));

const marketGrowthData = [
  { year: "2020", growth: 20 },
  { year: "2021", growth: 35 },
  { year: "2022", growth: 50 },
  { year: "2023", growth: 65 },
  { year: "2024", growth: 82 },
  { year: "2025", growth: 95 },
];

const CENTER = { x: 600, y: 200 };

const whatWeDoIcons = [Users, DollarSign, Briefcase];
const howWeDoItIcons = [Network, Rocket, Handshake];

export default function PartnershipsVideo() {
  const { t } = useLanguage();
  const whatWeDoItems = t("services.partnerships.whatWeDoItems", { returnObjects: true }) as unknown as ListItem[];
  const howWeDoItItems = t("services.partnerships.howWeDoItItems", { returnObjects: true }) as unknown as ListItem[];
  const explanatoryBlocks = t("services.partnerships.explanatoryBlocks", { returnObjects: true }) as unknown as ExplanatoryBlock[];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [activeConnection, setActiveConnection] = useState<number | null>(null);
  const [chartProgress, setChartProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection(Math.floor(Math.random() * connectionLines.length));
      setTimeout(() => setActiveConnection(null), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 2;
            setChartProgress(Math.min(progress, 100));
            if (progress >= 100) clearInterval(interval);
          }, 20);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const getNodeCoords = (index: number) =>
    index === -1 ? CENTER : networkNodes[index];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative" ref={sectionRef}>
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {particlePoints.map((point, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute rounded-full bg-boticPurple/10"
              initial={{ x: point.x, y: point.y, opacity: 0 }}
              animate={{
                x: [point.x, point.x + (Math.random() * 80 - 40)],
                y: [point.y, point.y + (Math.random() * 80 - 40)],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: point.speed * 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{ width: point.size, height: point.size }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-boticPurple">
            {t("services.partnerships.title")}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Handshake className="h-6 w-6 text-boticPurple" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-700">
              {t("services.partnerships.subtitle")}
            </h3>
          </div>
        </motion.div>

        {/* Network visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] mb-12 bg-gradient-to-br from-purple-50 to-indigo-100"
        >
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
            {/* Connection lines */}
            {connectionLines.map((line, index) => {
              const from = getNodeCoords(line.from);
              const to = getNodeCoords(line.to);
              const isActive = activeConnection === index;
              return (
                <g key={`line-${index}`}>
                  <line
                    x1={from.x} y1={from.y}
                    x2={to.x}   y2={to.y}
                    stroke={isActive ? "#7c3aed" : "#c4b5fd"}
                    strokeWidth={isActive ? 2.5 : 1}
                    strokeDasharray={isActive ? "none" : "6,4"}
                    opacity={isActive ? 1 : 0.5}
                  />
                  {/* Animated data packet along active line */}
                  {isActive && (
                    <motion.circle
                      r={5}
                      fill="#7c3aed"
                      initial={{ offsetDistance: "0%" } as never}
                      animate={{ offsetDistance: "100%" } as never}
                      style={{
                        offsetPath: `path("M${from.x},${from.y} L${to.x},${to.y}")`,
                      } as never}
                      transition={{ duration: 1.2, ease: "easeInOut", repeat: 1, repeatType: "reverse" }}
                    />
                  )}
                </g>
              );
            })}

            {/* Peripheral nodes */}
            {networkNodes.map((node, i) => {
              const isCompany  = node.type === "company";
              const isInvestor = node.type === "investor";
              const baseR = isCompany ? 12 : isInvestor ? 10 : 8;
              const color = isCompany ? "#8b5cf6" : isInvestor ? "#3b82f6" : "#10b981";
              return (
                <g key={`node-${i}`}>
                  <motion.circle
                    cx={node.x} cy={node.y}
                    fill={color}
                    opacity={0.85}
                    animate={{ r: [baseR, baseR + 2, baseR] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <text x={node.x} y={node.y + baseR + 14} fontSize="11" fill="#6b7280" textAnchor="middle" fontWeight="500">
                    {node.type === "company" ? t("services.partnerships.company")
                      : node.type === "investor" ? t("services.partnerships.investor")
                      : t("services.partnerships.partner")}
                  </text>
                </g>
              );
            })}

            {/* Central node */}
            <motion.circle
              cx={CENTER.x} cy={CENTER.y}
              fill="#7c3aed"
              animate={{ r: [28, 33, 28], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Ripple rings */}
            {[1, 2].map((k) => (
              <motion.circle
                key={`ripple-${k}`}
                cx={CENTER.x} cy={CENTER.y}
                fill="none"
                stroke="#7c3aed"
                strokeWidth={2 - k * 0.5}
                animate={{ r: [28, 120 * k, 28], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 5 + k, repeat: Infinity, delay: k * 1.2 }}
              />
            ))}
            <text x={CENTER.x} y={CENTER.y + 5} fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">
              Botic Partners
            </text>
          </svg>

          {/* Growth chart */}
          <div className="absolute bottom-0 right-0 w-[320px] h-[145px] bg-white/85 backdrop-blur-sm p-4 rounded-tl-xl shadow-md hidden md:block">
            <h4 className="text-xs font-semibold text-gray-700 mb-1">{t("services.partnerships.marketGrowth")}</h4>
            <svg className="w-full h-[100px]" viewBox="0 0 300 100">
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={i} x1="40" y1={20 * i + 10} x2="280" y2={20 * i + 10} stroke="#e5e7eb" strokeWidth="1" />
              ))}
              {marketGrowthData.map((d, i) => (
                <text key={i} x={40 + i * 48} y="100" fontSize="8" fill="#9ca3af" textAnchor="middle">{d.year}</text>
              ))}
              <text x="30" y="90" fontSize="8" fill="#9ca3af" textAnchor="end">0%</text>
              <text x="30" y="50" fontSize="8" fill="#9ca3af" textAnchor="end">50%</text>
              <text x="30" y="13" fontSize="8" fill="#9ca3af" textAnchor="end">100%</text>
              <motion.polyline
                points={marketGrowthData
                  .map((d, i) => {
                    const prog = Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1);
                    return `${40 + i * 48},${90 - d.growth * 0.8 * Math.max(prog, 0)}`;
                  })
                  .join(" ")}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {marketGrowthData.map((d, i) => {
                const prog = Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1);
                if (prog <= 0) return null;
                return (
                  <motion.circle
                    key={i}
                    cx={40 + i * 48}
                    cy={90 - d.growth * 0.8}
                    r={4}
                    fill="#7c3aed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Live indicator */}
          <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-md px-3 py-2 text-xs text-gray-500 flex items-center gap-1 shadow z-10">
            <Activity className="h-3 w-3 text-purple-500 animate-pulse" />
            <span>{t("services.partnerships.livePartnershipData")}</span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
          </div>
        </motion.div>

        {/* What We Do / How We Do It */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-blue-50 rounded-xl p-6 shadow border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-blue-100 mr-3">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">{t("services.partnerships.whatWeDo")}</h3>
            </div>
            <div className="space-y-3">
              {(whatWeDoItems ?? []).map((item, i) => {
                const Icon = whatWeDoIcons[i] ?? Users;
                return (
                  <motion.div
                    key={i}
                    className={`flex items-start p-3 rounded-lg transition-colors ${hoveredItem === i ? "bg-blue-100/70" : "hover:bg-blue-100/50"}`}
                    onMouseEnter={() => setHoveredItem(i)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-blue-200 mr-3 flex-shrink-0"
                      animate={hoveredItem === i ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-4 w-4 text-blue-600" />
                    </motion.div>
                    <h4 className="font-semibold text-blue-900 pt-1">{item.title}</h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="bg-green-50 rounded-xl p-6 shadow border border-green-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-green-100 mr-3">
                <Lightbulb className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">{t("services.partnerships.howWeDoIt")}</h3>
            </div>
            <div className="space-y-3">
              {(howWeDoItItems ?? []).map((item, i) => {
                const Icon = howWeDoItIcons[i] ?? Handshake;
                return (
                  <motion.div
                    key={i}
                    className={`flex items-start p-3 rounded-lg transition-colors ${hoveredMethod === i ? "bg-green-100/70" : "hover:bg-green-100/50"}`}
                    onMouseEnter={() => setHoveredMethod(i)}
                    onMouseLeave={() => setHoveredMethod(null)}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-green-200 mr-3 flex-shrink-0"
                      animate={hoveredMethod === i ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="h-4 w-4 text-green-600" />
                    </motion.div>
                    <h4 className="font-semibold text-green-900 pt-1">{item.title}</h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Explanatory blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(explanatoryBlocks ?? []).map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-2">{block.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{block.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-2">{t("services.partnerships.cta.title")}</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">{t("services.partnerships.cta.subtitle")}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://acquisition.boticpartners.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-purple-700 hover:bg-white/90 px-8 py-6 rounded-md font-semibold flex items-center mx-auto">
                {t("services.ctaText")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
