"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type SuccessStoriesSectionProps = {
  prefix?: string;
  id?: string;
  className?: string;
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

export function SuccessStoriesSection({ prefix = "services.partnerships", id, className = "" }: SuccessStoriesSectionProps) {
  const { t } = useLanguage();
console.log("TITLE =>", t(`${prefix}.successStories.title`));

  const title = t(`${prefix}.successStories.title`);
  const paragraphs = t(`${prefix}.successStories.paragraphs`) as unknown as string[];

  const candidatesLabel = t(`${prefix}.successStories.candidatesLabel`);
  const clientsLabel = t(`${prefix}.successStories.clientsLabel`);

  const candidates = t(`${prefix}.successStories.candidates`) as unknown as Testimonial[];
  const clients = t(`${prefix}.successStories.clients`) as unknown as Testimonial[];

  const slides: Slide[] = useMemo(() => {
    const a = (Array.isArray(candidates) ? candidates : []).map((x) => ({ ...x, kind: "candidate" as const }));
    const b = (Array.isArray(clients) ? clients : []).map((x) => ({ ...x, kind: "client" as const }));
    return [...a, ...b];
  }, [candidates, clients]);

  const [active, setActive] = useState(0);

  const current = slides[active];

  const next = () => setActive((i) => (slides.length ? (i + 1) % slides.length : 0));
  const prev = () => setActive((i) => (slides.length ? (i - 1 + slides.length) % slides.length : 0));

  const kindLabel = current?.kind === "candidate" ? candidatesLabel : clientsLabel;

  return (
    <section id={id} className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {(Array.isArray(paragraphs) ? paragraphs : []).map((p, i) => (
              <p key={i} className="text-gray-600">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Controls */}
            <button type="button" onClick={prev} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50" aria-label="Previous">
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <button type="button" onClick={next} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50" aria-label="Next">
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <AnimatePresence mode="wait">
                {current && (
                  <motion.div key={`${current.name}-${active}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }} className="p-6 md:p-8">
                    {/* Top row */}
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="relative h-14 w-14 flex-shrink-0">{current.image ? <Image src={current.image} alt={current.name} fill className="object-cover rounded-full border border-gray-200" /> : <div className="h-14 w-14 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center font-semibold text-gray-700">{initials(current.name)}</div>}</div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* 5 stars */}
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                            ))}
                          </div>

                          {/* Badge */}
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">{kindLabel}</span>
                        </div>

                        <div className="mt-3 font-semibold text-gray-900">{current.name}</div>
                        <div className="text-sm text-gray-500">{current.role}</div>
                      </div>

                      <Quote className="hidden md:block h-7 w-7 text-boticPurple/30" />
                    </div>

                    {/* Quote */}
                    <div className="mt-5">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">“{current.quote}”</p>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center justify-between mt-6">
                      <button type="button" onClick={prev} className="h-10 px-4 rounded-full bg-white shadow-sm border border-gray-200">
                        <span className="flex items-center gap-2 text-gray-700">
                          <ChevronLeft className="h-5 w-5" />
                          Prev
                        </span>
                      </button>

                      <button type="button" onClick={next} className="h-10 px-4 rounded-full bg-white shadow-sm border border-gray-200">
                        <span className="flex items-center gap-2 text-gray-700">
                          Next
                          <ChevronRight className="h-5 w-5" />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {slides.map((_, i) => (
                <button key={i} type="button" onClick={() => setActive(i)} className={`h-2.5 rounded-full transition-all ${i === active ? "w-6 bg-boticPurple" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
