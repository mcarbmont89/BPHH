"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Network, ArrowRight, Building2, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Particle animation points for subtle background effect
const particlePoints = Array.from({ length: 30 }, () => ({
  x: Math.random() * 1200,
  y: Math.random() * 600,
  size: Math.random() * 4 + 2,
  speed: Math.random() * 3 + 2,
}));

export default function PartnershipsSection() {
  const { t } = useLanguage();
  const [animateParticles, setAnimateParticles] = useState(true);
  const sectionRef = useRef(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative" ref={sectionRef}>
      {/* Dynamic background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {animateParticles &&
            particlePoints.map((point, index) => (
              <motion.div
                key={`particle-${index}`}
                className="absolute rounded-full bg-boticPurple/10"
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
        <div className="flex flex-col items-center text-center mb-10">
          {/* Label "Alianzas estratégicas" removed */}

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl font-bold mb-3 text-boticPurple">
            {t("services.partnerships.title")}
          </motion.h2>

          {/* Subtitle removed */}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="max-w-6xl mx-auto border border-gray-200 rounded-2xl p-8 md:p-12 bg-white shadow-sm">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{t("services.partnerships.cta")}</h3>

            <p className="text-gray-600 max-w-xl leading-relaxed">{t("services.partnerships.longDescription")}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center px-3 py-2 bg-boticPurple/10 rounded-lg">
                <Network className="h-4 w-4 text-boticPurple mr-2" />
                <span className="text-sm text-boticPurple">Validated Direct Network</span>
              </div>

              <div className="flex items-center px-3 py-2 bg-boticPurple/10 rounded-lg">
                <Building2 className="h-4 w-4 text-boticPurple mr-2" />
                <span className="text-sm text-boticPurple">Strategic Collaborations</span>
              </div>

              <div className="flex items-center px-3 py-2 bg-boticPurple/10 rounded-lg">
                <DollarSign className="h-4 w-4 text-boticPurple mr-2" />
                <span className="text-sm text-boticPurple">Growth Opportunities</span>
              </div>
            </div>

            <div className="pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://acquisition.boticpartners.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="bg-boticPurple hover:bg-boticPurple/90 text-white px-8 py-6 rounded-md flex items-center">
                    {t("services.ctaText")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
