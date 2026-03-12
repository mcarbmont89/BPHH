"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type SuccessStoriesSectionProps = {
  prefix?: string;
  id?: string;
  className?: string;
  filter?: "candidates" | "clients";
  showHeader?: boolean;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
};

type Slide = Testimonial & {
  kind: "candidate" | "client";
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

export function SuccessStoriesSection({ prefix = "services.partnerships", id, className = "", filter, showHeader = true }: SuccessStoriesSectionProps) {
  const { t } = useLanguage();

  const clientsTitle = t(`${prefix}.successStories.title`);
  const candidatesTitle = t(`${prefix}.successStories.candidatesTitle`);

  const title = filter === "candidates" ? candidatesTitle : clientsTitle;
  const paragraphs = t(`${prefix}.successStories.paragraphs`) as unknown as string[];

  const candidatesLabel = t(`${prefix}.successStories.candidatesLabel`);
  const clientsLabel = t(`${prefix}.successStories.clientsLabel`);

  const candidates = t(`${prefix}.successStories.candidates`) as unknown as Testimonial[];
  const clients = t(`${prefix}.successStories.clients`) as unknown as Testimonial[];

  const slides: Slide[] = useMemo(() => {
    const allSlides: Slide[] = [...(Array.isArray(candidates) ? candidates.map((x) => ({ ...x, kind: "candidate" as const })) : []), ...(Array.isArray(clients) ? clients.map((x) => ({ ...x, kind: "client" as const })) : [])];

    if (filter === "candidates") {
      return allSlides.filter((slide) => slide.kind === "candidate");
    } else if (filter === "clients") {
      return allSlides.filter((slide) => slide.kind === "client");
    }

    return allSlides;
  }, [candidates, clients, filter]);

  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = slides[active];
  const nextSlide = slides[(active + 1) % slides.length];
  const prevSlide = slides[(active - 1 + slides.length) % slides.length];

  const next = () => setActive((i) => (slides.length ? (i + 1) % slides.length : 0));
  const prev = () => setActive((i) => (slides.length ? (i - 1 + slides.length) % slides.length : 0));

  const kindLabel = current?.kind === "candidate" ? candidatesLabel : clientsLabel;

  useEffect(() => {
    if (!slides.length || isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, isHovered, active]);

  if (!slides.length) return null;

  return (
    <section id={id} className={`py-16 bg-gradient-to-b from-white to-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-boticPurple">{title}</h2>

          </div>
        )}

        <div className="max-w-6xl mx-auto relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} ref={containerRef}>
          <div className="relative h-[500px] md:h-[550px] flex items-center justify-center perspective-1000 overflow-hidden">
            {prevSlide && (
              <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 0.4, x: -80, scale: 0.85 }} exit={{ opacity: 0, x: -150 }} transition={{ duration: 0.5 }} className="absolute left-0 hidden lg:block w-80 cursor-pointer" style={{ zIndex: 5, filter: "blur(1px)" }} onClick={prev}>
                <CardPreview slide={prevSlide} kindLabel={prevSlide.kind === "candidate" ? candidatesLabel : clientsLabel} />
              </motion.div>
            )}

            <motion.div key={`${current?.name}-${active}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} className="relative z-10 w-full max-w-2xl">
              {current && (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <div className="relative h-16 w-16 flex-shrink-0">{current.image ? <Image src={current.image} alt={current.name} fill className="object-cover rounded-full border-2 border-boticPurple/20 shadow-md" /> : <div className="h-16 w-16 rounded-full bg-gradient-to-br from-boticPurple/10 to-boticPurple/30 flex items-center justify-center font-semibold text-boticPurple text-xl border-2 border-boticPurple/20">{initials(current.name)}</div>}</div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                            ))}
                          </div>

                          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-boticPurple/10 text-boticPurple border border-boticPurple/20">{kindLabel}</span>
                        </div>

                        <div className="mt-3 font-semibold text-gray-900 text-lg">{current.name}</div>
                        <div className="text-sm text-gray-500">{current.role}</div>
                      </div>

                      <Quote className="hidden md:block h-8 w-8 text-boticPurple/20" />
                    </div>

                    <div className="mt-6">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg min-h-[120px]">“{current.quote}”</p>
                    </div>

                    <div className="flex md:hidden items-center justify-between mt-6">
                      <button type="button" onClick={prev} className="h-10 px-4 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50">
                        <span className="flex items-center gap-2 text-gray-700">
                          <ChevronLeft className="h-5 w-5" />
                          Prev
                        </span>
                      </button>

                      <button type="button" onClick={next} className="h-10 px-4 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50">
                        <span className="flex items-center gap-2 text-gray-700">
                          Next
                          <ChevronRight className="h-5 w-5" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {nextSlide && (
              <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 0.4, x: 80, scale: 0.85 }} exit={{ opacity: 0, x: 150 }} transition={{ duration: 0.5 }} className="absolute right-0 hidden lg:block w-80 cursor-pointer" style={{ zIndex: 5, filter: "blur(1px)" }} onClick={next}>
                <CardPreview slide={nextSlide} kindLabel={nextSlide.kind === "candidate" ? candidatesLabel : clientsLabel} />
              </motion.div>
            )}
          </div>

          <button type="button" onClick={prev} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all z-20" aria-label="Previous">
            <ChevronLeft className="h-6 w-6 text-boticPurple" />
          </button>

          <button type="button" onClick={next} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all z-20" aria-label="Next">
            <ChevronRight className="h-6 w-6 text-boticPurple" />
          </button>

          <div className="flex items-center justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button key={i} type="button" onClick={() => setActive(i)} className={`h-3 rounded-full transition-all ${i === active ? "w-8 bg-boticPurple shadow-md" : "w-3 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

function CardPreview({ slide, kindLabel }: { slide: Slide; kindLabel: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden opacity-60 hover:opacity-80 transition-opacity">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative h-10 w-10 flex-shrink-0">{slide.image ? <Image src={slide.image} alt={slide.name} fill className="object-cover rounded-full" /> : <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600 text-sm">{initials(slide.name)}</div>}</div>
          <div>
            <div className="font-medium text-gray-900 text-sm">{slide.name}</div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-boticPurple/10 text-boticPurple">{kindLabel}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">“{slide.quote.substring(0, 80)}…”</p>
      </div>
    </div>
  );
}
