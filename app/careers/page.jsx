"use client";

import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { industries } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";
import { fetchCareers } from "@/app/api/careers";

import Header from "../components/Header";

export default function CareersPage() {
  const { t, language: ctxLang } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [careers, setCareers] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Use useEffect to ensure component is mounted before rendering the website
  useEffect(() => {
    let alive = true;
    const lang = (typeof window !== "undefined" && window.localStorage?.getItem("lang")) || ctxLang || "es";
    fetchCareers(lang)
      .then((data) => {
        if (alive) setCareers(data?.docs ?? []);
      })
      .catch(console.error);
    setMounted(true);
    return () => {
      alive = false;
    };
  }, [ctxLang]);

  // Don't render anything until component is mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  // Filter careers by search query
const filteredCareers = careers?.filter((career) => {
  const status = String(career?.status ?? "active").toLowerCase();
  const isActive = status === "active";

  const matchesIndustry =
    selectedIndustry === "all" || career.sector === selectedIndustry;

  return isActive && matchesIndustry;
});

  const lang = (typeof window !== "undefined" && window.localStorage?.getItem("lang")) || ctxLang || "es";
  const locale = lang === "en" ? "en-US" : "es-ES";
  const currency = lang === "en" ? "USD" : "EUR";
  const salaryLabel = lang === "en" ? "Salary" : "Salario";
  const locationLabel = lang === "en" ? "Location" : "Ubicación";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero section with background */}
      <section className="relative bg-[#1A1A2E] py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 className="text-4xl py-4 mt-8 md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {t("careers.title")}
            </motion.h1>
            <motion.div className="w-24 h-1 bg-primary/50 mx-auto mb-6" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 0.7, delay: 0.3 }} />
            <motion.p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              {t("careers.subtitle")}
            </motion.p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0,
              }}
              animate={{
                x: [Math.random() * 100, Math.random() * 100 + 50],
                y: [Math.random() * 100, Math.random() * 100 + 50],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
            />
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Filter className="w-6 h-6 md:w-8 md:h-8" />
            {t("careers.filterByIndustry")}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry === industry.id;
            return (
              <Button key={industry.id} variant={isSelected ? "default" : "outline"} onClick={() => setSelectedIndustry(industry.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base ${isSelected ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"}`}>
                {Icon && <Icon className="w-4 h-4" />}
                {t(industry.nameKey)}
              </Button>
            );
          })}
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">{selectedIndustry === "all" ? t("careers.allIndustries") : t(industries.find((i) => i.id === selectedIndustry)?.nameKey || "")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => (
            <Card key={career.id} className="flex flex-col justify-between h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {!career["Ocultar empresa"] && (
                    <img
                      src={(() => {
                        const server = process.env.NEXT_PUBLIC_CMS_URL || "";
                        const url = career?.logo?.url;

                        if (url) return url.startsWith("http") ? url : `${server}${url}`;
                        if ((career.company || "").toLowerCase() === "botic partners") return "/boticlogo.png";
                        if (career.company_url) {
                          return `https://logo.clearbit.com/${career.company_url.replace("https://", "").replace("http://", "").replace("www.", "")}`;
                        }
                        return "/placeholder-company.png";
                      })()}
                      alt={career.company || "Company logo"}
                      className="w-12 h-12"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">{career.position}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{career["Ocultar empresa"] ? "Confidencial" : career.company}</CardDescription>{" "}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-2">
                {career.location && (
                  <p className="text-sm text-foreground">
                    <b>{locationLabel}:</b> {career.location}
                  </p>
                )}
                {career.salary && !career["Ocultar salario"] && (
                  <p className="text-sm text-foreground">
                    <b>{salaryLabel}:</b>{" "}
                    {(() => {
                      const amount =
                        typeof career.salary === "number"
                          ? career.salary
                          : Number(
                              String(career.salary)
                                .replace(/[^\d.-]/g, "")
                                .replace(",", ".")
                            );

                      const numberOnly = new Intl.NumberFormat(locale, {
                        style: "decimal",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(amount);

                      return `${numberOnly} €`;
                    })()}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Link href={`/careers/${career.id}`} className="w-full bg-primary py-2 text-center rounded-lg text-primary-foreground hover:bg-primary/90">
                  {t("careers.learnMore")}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
