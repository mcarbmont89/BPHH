"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const marketGrowthData = [
  { year: "2020", growth: 20 },
  { year: "2021", growth: 35 },
  { year: "2022", growth: 50 },
  { year: "2023", growth: 65 },
  { year: "2024", growth: 82 },
  { year: "2025", growth: 95 },
];
import { useLanguage } from "@/lib/i18n/LanguageContext";

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

const connectionLines = [
  ...networkNodes.map((_, i) => ({ from: -1, to: i })),
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 5, to: 6 },
  { from: 7, to: 8 },
];

const CENTER = { x: 600, y: 200 };

export default function PartnershipsVideo() {
  const { t } = useLanguage();
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
          const iv = setInterval(() => {
            progress += 2;
            setChartProgress(Math.min(progress, 100));
            if (progress >= 100) clearInterval(iv);
          }, 20);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const getNodeCoords = (index: number) =>
    index === -1 ? CENTER : networkNodes[index];

  return (
    <section className="bg-white w-full hidden md:block" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden h-[400px] bg-white border-t border-gray-100"
      >
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

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
                  stroke={isActive ? "#7c3aed" : "#e9d5ff"}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? "none" : "6,4"}
                  opacity={isActive ? 1 : 0.8}
                />
                {isActive && (
                  <motion.circle
                    r={5}
                    fill="#a855f7"
                    filter="url(#glow)"
                    initial={{ offsetDistance: "0%" } as never}
                    animate={{ offsetDistance: "100%" } as never}
                    style={{ offsetPath: `path("M${from.x},${from.y} L${to.x},${to.y}")` } as never}
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
                  filter="url(#nodeGlow)"
                  opacity={0.8}
                  animate={{ r: [baseR, baseR + 2, baseR] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <text x={node.x} y={node.y + baseR + 14} fontSize="11" fill="#6b7280" textAnchor="middle" fontWeight="500">
                  {node.type === "company"  ? t("services.partnerships.company")
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
            filter="url(#nodeGlow)"
            animate={{ r: [30, 36, 30], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          {[1, 2, 3].map((k) => (
            <motion.circle
              key={`ripple-${k}`}
              cx={CENTER.x} cy={CENTER.y}
              fill="none"
              stroke="#7c3aed"
              strokeWidth={2 - k * 0.4}
              animate={{ r: [30, 100 * k, 30], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 4 + k * 1.5, repeat: Infinity, delay: k * 0.8 }}
            />
          ))}
          <text x={CENTER.x} y={CENTER.y + 5} fontSize="12" fill="#fde68a" textAnchor="middle" fontWeight="bold" style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.4))" }}>
            Botic Partners
          </text>
        </svg>

        {/* Growth chart */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[140px] bg-white/90 backdrop-blur-sm border-t border-l border-purple-100 rounded-tl-xl p-4 shadow-md">
          <h4 className="text-xs font-semibold text-gray-600 mb-1">{t("services.partnerships.marketGrowth")}</h4>
          <svg className="w-full h-[95px]" viewBox="0 0 280 95">
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={i} x1="30" y1={18 * i + 5} x2="270" y2={18 * i + 5} stroke="#f3e8ff" strokeWidth="1" />
            ))}
            {marketGrowthData.map((d, i) => (
              <text key={i} x={30 + i * 48} y="92" fontSize="8" fill="#9ca3af" textAnchor="middle">{d.year}</text>
            ))}
            <text x="22" y="85" fontSize="8" fill="#9ca3af" textAnchor="end">0%</text>
            <text x="22" y="47" fontSize="8" fill="#9ca3af" textAnchor="end">50%</text>
            <text x="22" y="9"  fontSize="8" fill="#9ca3af" textAnchor="end">100%</text>
            {/* Area fill */}
            <motion.polygon
              points={[
                `30,85`,
                ...marketGrowthData.map((d, i) => {
                  const prog = Math.max(Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1), 0);
                  return `${30 + i * 48},${85 - d.growth * 0.76 * prog}`;
                }),
                `${30 + (marketGrowthData.length - 1) * 48},85`,
              ].join(" ")}
              fill="#a855f7"
              opacity={0.08}
            />
            <motion.polyline
              points={marketGrowthData.map((d, i) => {
                const prog = Math.max(Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1), 0);
                return `${30 + i * 48},${85 - d.growth * 0.76 * prog}`;
              }).join(" ")}
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {marketGrowthData.map((d, i) => {
              const prog = Math.max(Math.min(chartProgress / (100 / marketGrowthData.length) - i, 1), 0);
              if (prog <= 0) return null;
              return (
                <circle key={i} cx={30 + i * 48} cy={85 - d.growth * 0.76} r={3} fill="#7c3aed" opacity={prog} />
              );
            })}
          </svg>
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 right-4 bg-white border border-purple-200 rounded-md px-3 py-2 text-xs text-gray-500 flex items-center gap-1 shadow-sm">
          <Activity className="h-3 w-3 text-purple-500 animate-pulse" />
          <span>{t("services.partnerships.livePartnershipData")}</span>
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
