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
    stats: {
      placements: 10,
      companies: 4,
      retention: 90,
    },
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
    stats: {
      placements: 8,
      companies: 3,
      retention: 91,
    },
    technologies: ["Semiconductors", "ASIC", "FPGA", "IoT", "Embedded"],
  },
  {
    titleKey: "industries.construction.title",
    descriptionKey: "industries.construction.description",
    image: "/images/construction.jpg",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
    stats: {
      placements: 15,
      companies: 10,
      retention: 94,
    },
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
    stats: {
      placements: 13,
      companies: 5,
      retention: 90,
    },
    technologies: ["Supply Chain", "Fleet Management", "Warehouse Automation", "Last-Mile", "Blockchain"],
  },
];

// Particle animation points
const particlePoints = Array.from({ length: 30 }, () => ({
  x: Math.random() * 1200,
  y: Math.random() * 600,
  size: Math.random() * 4 + 2,
  speed: Math.random() * 3 + 2,
}));

export default function Industries() {
  const { t } = useLanguage();
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null);
  const [animateParticles, setAnimateParticles] = useState(true);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const [counters, setCounters] = useState({
    placements: 0,
    companies: 0,
    retention: 0,
  });
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");

  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number>();

  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const duplicatedIndustries = [...industries, ...industries];

  const handleIndustryHover = (index: number | null) => {
    setHoveredIndustry(index);

    setIsAutoScrollEnabled(index === null);

    if (index !== null) {
      const industry = industries[index];
      setCounters({
        placements: 0,
        companies: 0,
        retention: 0,
      });

      let frame = 0;
      const frames = 30;
      const interval = setInterval(() => {
        frame++;
        setCounters({
          placements: Math.floor((industry.stats.placements * frame) / frames),
          companies: Math.floor((industry.stats.companies * frame) / frames),
          retention: Math.floor((industry.stats.retention * frame) / frames),
        });

        if (frame >= frames) clearInterval(interval);
      }, 20);
    }
  };

  const handleIndustryExplore = (index: number) => {
    const industryNames = ["Software", "Hardware", "Construction", "Logistics"];
    const industryName = industryNames[index % industries.length];

    window.location.href = `/careers?industry=${industryName}`;
  };

  const scrollLeft = () => {
    const track = scrollRef.current;
    if (!track) return;

    setIsAutoScrollEnabled(false);
    positionRef.current -= 400;
    track.style.transform = `translateX(-${positionRef.current}px)`;

    setTimeout(() => setIsAutoScrollEnabled(true), 3000);
  };

  const scrollRight = () => {
    const track = scrollRef.current;
    if (!track) return;

    setIsAutoScrollEnabled(false);
    positionRef.current += 400;
    track.style.transform = `translateX(-${positionRef.current}px)`;

    setTimeout(() => setIsAutoScrollEnabled(true), 3000);
  };

  const positionRef = useRef(0);

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    let animationFrame: number;
    let lastTime: number | null = null;

    const speed = 40;
    const totalWidth = track.scrollWidth / 2;

    const animate = (time: number) => {
      if (!isAutoScrollEnabled) return;

      if (lastTime !== null) {
        const delta = (time - lastTime) / 1000;
        positionRef.current += speed * delta;
        positionRef.current %= totalWidth;

        track.style.transform = `translateX(-${positionRef.current}px)`;
      }

      lastTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isAutoScrollEnabled]);

  useEffect(() => {
    if (isInView) {
      setExpandedIndustry(null);

      industries.forEach((industry, index) => {
        setTimeout(() => {
          setHoveredIndustry(index);

          let frame = 0;
          const frames = 30;
          const interval = setInterval(() => {
            frame++;
            setCounters({
              placements: Math.floor((industry.stats.placements * frame) / frames),
              companies: Math.floor((industry.stats.companies * frame) / frames),
              retention: Math.floor((industry.stats.retention * frame) / frames),
            });

            if (frame >= frames) clearInterval(interval);
          }, 20);
        }, index * 300);
      });

      setTimeout(() => {
        setHoveredIndustry(null);
      }, industries.length * 300 + 1000);
    }
  }, [isInView]);

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">{t("industries.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("industries.subtitle")}</p>
        </motion.div>

        <div className="relative">
          <button onClick={scrollLeft} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition transform hover:shadow-xl" aria-label="Scroll left">
            ←
          </button>

          <button onClick={scrollRight} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition transform hover:shadow-xl" aria-label="Scroll right">
            →
          </button>

          <div className="overflow-hidden">
            <div ref={scrollRef} className="flex gap-6 py-4 will-change-transform">
              {duplicatedIndustries.map((industry, index) => {
                const isHovered = hoveredIndustry === index;
                const isExpanded = expandedIndustry === index;

                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }} 
                    className="relative w-[220px] md:w-[240px] lg:w-[260px] snap-center flex-shrink-0" 
                    onMouseEnter={() => handleIndustryHover(index)} 
                    onMouseLeave={() => handleIndustryHover(null)}
                  >
                    <Card className={`h-[700px] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl ${isHovered ? `border-2 ${industry.borderColor} shadow-lg` : `border-2 ${industry.borderColor} shadow-md`}`}>
                      <CardContent className={`p-4 ${industry.bgColor} h-full`}>
                        <div className="flex flex-col items-center text-center h-full">
                          
                          <motion.div
                            className={`w-14 h-14 rounded-full mb-3 bg-gradient-to-br ${industry.color} group-hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden`}
                            animate={
                              isHovered
                                ? {
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0],
                                  }
                                : {}
                            }
                            transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                          >
                            <Image
                              src={industry.image}
                              alt={t(industry.titleKey)}
                              width={56}
                              height={56}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          {/* Título */}
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{t(industry.titleKey)}</h3>

                          {/* Descripción */}
                          <p className="text-gray-600 text-xs group-hover:text-gray-800 transition-colors duration-300 mb-3 line-clamp-3">
                            {t(industry.descriptionKey)}
                          </p>

                          {/* Stats section */}
                          <div className="w-full mb-3">
                            <div className="grid grid-cols-3 gap-1 text-center">
                              <div className={`p-1.5 rounded-lg ${industry.bgColor}`}>
                                <div className={`text-base font-bold ${industry.iconColor}`}>{industry.stats.placements}+</div>
                                <div className="text-[9px] text-gray-600">Placements</div>
                              </div>
                              <div className={`p-1.5 rounded-lg ${industry.bgColor}`}>
                                <div className={`text-base font-bold ${industry.iconColor}`}>{industry.stats.companies}+</div>
                                <div className="text-[9px] text-gray-600">Companies</div>
                              </div>
                              <div className={`p-1.5 rounded-lg ${industry.bgColor}`}>
                                <div className={`text-base font-bold ${industry.iconColor}`}>{industry.stats.retention}%</div>
                                <div className="text-[9px] text-gray-600">Retention</div>
                              </div>
                            </div>
                          </div>

                          {/* Technologies section */}
                          <div className="w-full mb-3">
                            <h4 className={`text-[10px] font-semibold mb-1.5 ${industry.iconColor}`}>Tecnologías clave</h4>
                            <div className="flex flex-wrap justify-center gap-1">
                              {industry.technologies.map((tech, techIndex) => (
                                <motion.span 
                                  key={techIndex} 
                                  initial={{ opacity: 0, scale: 0.8 }} 
                                  animate={{ opacity: 1, scale: 1 }} 
                                  transition={{ delay: 0.2 + techIndex * 0.05 }} 
                                  className={`px-1.5 py-0.5 text-[8px] rounded-full ${industry.bgColor} ${industry.iconColor} border ${industry.borderColor}`}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Botón */}
                          <div className="mt-auto pt-3 w-full border-t border-gray-200">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`w-full px-2 py-1.5 rounded-full text-[10px] text-white bg-gradient-to-r ${industry.color} shadow-md`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleIndustryExplore(index);
                              }}
                            >
                              {t("industries.exploreOpportunities")}
                            </motion.button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </section>
  );
}