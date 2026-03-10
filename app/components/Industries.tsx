"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, useAnimation, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { EmailOptionsModal } from "./EmailOptionsModal";
import Image from "next/image";

const industries = [
  {
    titleKey: "industries.software.title",
    descriptionKey: "industries.software.description",
    image: "/images/software.png",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    stats: { placements: 10, companies: 4, retention: 90 },
    technologies: ["AI/ML", "Cloud", "DevOps", "Mobile", "Web"],
  },
  {
    titleKey: "industries.hardware.title",
    descriptionKey: "industries.hardware.description",
    image: "/images/hardware.png",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
    stats: { placements: 8, companies: 3, retention: 91 },
    technologies: ["Digital Marketing", "SEO", "CRM", "Automation", "Social Media"],
  },
  {
    titleKey: "industries.construction.title",
    descriptionKey: "industries.construction.description",
    image: "/images/construction.jpg",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
    stats: { placements: 15, companies: 10, retention: 94 },
    technologies: ["BIM", "PropTech", "Smart Buildings", "Sustainability", "Project Management"],
  },
  {
    titleKey: "industries.logistics.title",
    descriptionKey: "industries.logistics.description",
    image: "/images/logistics.jpg",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-500",
    stats: { placements: 13, companies: 5, retention: 90 },
    technologies: ["Supply Chain", "Fleet Management", "Warehouse Automation", "Last-Mile", "Blockchain"],
  },
];

const particlePoints = Array.from({ length: 30 }, () => ({
  x: Math.random() * 1200,
  y: Math.random() * 600,
  size: Math.random() * 4 + 2,
  speed: Math.random() * 3 + 2,
}));

export default function Industries() {
  const { t } = useLanguage();
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");

  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const duplicatedIndustries = [...industries, ...industries, ...industries]; // Triple para evitar huecos en drag

  // --- Lógica de Auto-Scroll ---
  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let animationFrame: number;
    let lastTime: number | null = null;
    const speed = 40; 
    const totalWidth = track.scrollWidth / 3; // Basado en el triplicado

    const animate = (time: number) => {
      if (!isAutoScrollEnabled) {
        lastTime = null;
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (lastTime !== null) {
        const delta = (time - lastTime) / 1000;
        positionRef.current = (positionRef.current + speed * delta) % totalWidth;
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }

      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoScrollEnabled]);

  const handleIndustryExplore = (index: number) => {
    const industryNames = ["Software", "Hardware", "Construction", "Logistics"];
    const industryName = industryNames[index % industries.length];
    window.location.href = `/careers?industry=${industryName}`;
  };

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Fondo de Partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {particlePoints.map((point, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary/10"
            animate={{
              x: [point.x, point.x + 50],
              y: [point.y, point.y + 50],
              opacity: [0, 0.4, 0],
            }}
            transition={{ duration: point.speed * 5, repeat: Infinity, repeatType: "reverse" }}
            style={{ width: point.size, height: point.size }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            {t("industries.title")}
          </h2>
        </div>

        {/* Carrusel unificado (móvil y escritorio) */}
        <div className="relative group/carousel">
          <div className="overflow-hidden touch-pan-y select-none">
            <motion.div
              ref={scrollRef}
              drag="x"
              dragConstraints={{ left: -3000, right: 0 }}
              onDragStart={() => setIsAutoScrollEnabled(false)}
              onDragEnd={() => setTimeout(() => setIsAutoScrollEnabled(true), 5000)}
              className="flex will-change-transform cursor-grab active:cursor-grabbing snap-x snap-mandatory md:snap-none"
            >
              {duplicatedIndustries.map((industry, index) => {
                const isHovered = hoveredIndustry === index;
                return (
                  <div
                    key={index}
                    className="w-[75vw] md:w-[calc(25%-0.75rem)] flex-shrink-0 px-2 pb-8 snap-center md:snap-align-none"
                    onMouseEnter={() => { setHoveredIndustry(index); setIsAutoScrollEnabled(false); }}
                    onMouseLeave={() => { setHoveredIndustry(null); setIsAutoScrollEnabled(true); }}
                  >
                    <Card className={`h-full overflow-hidden transition-all duration-300 border-2 ${isHovered ? `shadow-xl ${industry.borderColor}` : 'border-transparent shadow-md'}`}>
                      <CardContent className={`${industry.bgColor} p-5 md:p-4 h-full flex flex-col`}>
                        <div className="flex flex-col items-center text-center h-full">
                          <div className={`w-16 h-16 md:w-14 md:h-14 rounded-full mb-4 bg-gradient-to-br ${industry.color} flex items-center justify-center overflow-hidden shadow-sm`}>
                            <Image src={industry.image} alt={t(industry.titleKey)} width={64} height={64} className="w-full h-full object-cover" />
                          </div>
                          <h3 className="text-xl md:text-base font-bold mb-2">{t(industry.titleKey)}</h3>
                          <p className="text-gray-600 text-sm md:text-xs mb-4 line-clamp-3">{t(industry.descriptionKey)}</p>
                          <div className="w-full space-y-3 mb-4 flex-grow flex flex-col justify-center">
                            <div className="grid grid-cols-3 gap-1 border-y border-gray-200/50 py-4 md:py-3">
                              <div>
                                <div className={`text-lg md:text-base font-bold ${industry.iconColor}`}>{industry.stats.placements}+</div>
                                <div className="text-[10px] md:text-[9px] uppercase text-gray-500">Placements</div>
                              </div>
                              <div>
                                <div className={`text-lg md:text-base font-bold ${industry.iconColor}`}>{industry.stats.companies}+</div>
                                <div className="text-[10px] md:text-[9px] uppercase text-gray-500">Companies</div>
                              </div>
                              <div>
                                <div className={`text-lg md:text-base font-bold ${industry.iconColor}`}>{industry.stats.retention}%</div>
                                <div className="text-[10px] md:text-[9px] uppercase text-gray-500">Retention</div>
                              </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-1.5">
                              {industry.technologies.map((tech, i) => (
                                <span key={i} className={`px-2 py-1 text-[11px] md:text-[10px] rounded-md ${industry.bgColor} ${industry.iconColor} border ${industry.borderColor} font-medium`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); handleIndustryExplore(index); }}
                            className={`w-full py-3 md:py-2 rounded-xl text-sm md:text-xs font-bold text-white bg-gradient-to-r ${industry.color} shadow-lg hover:scale-[1.02] transition-transform`}
                          >
                            {t("industries.exploreOpportunities")}
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </section>
  );
}

