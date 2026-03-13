"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection(Math.floor(Math.random() * connectionLines.length));
      setTimeout(() => setActiveConnection(null), 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getNodeCoords = (index: number) =>
    index === -1 ? CENTER : networkNodes[index];

  return (
    <section className="bg-white w-full hidden md:block">
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
          <text x={CENTER.x} y={CENTER.y + 5} fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
            Botic Partners
          </text>
        </svg>

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
