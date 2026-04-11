"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, ArrowLeft } from "lucide-react";
import { industries } from "../data";
import { motion } from "framer-motion";
import Link from "next/link";
import { fetchCareers } from "@/app/api/careers";
import Header from "../../components/Header";

const currencySymbol = (code: string) => {
  const map: Record<string, string> = { EUR: "€", USD: "$", GBP: "£" };
  return map[(code || "").toUpperCase()] || (code ? code.toUpperCase() : "€");
};

const formatNumber = (n: number, locale: string) => new Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);

const formatSalaryText = (salaryRaw: unknown, currencyCode: string, locale: string) => {
  if (salaryRaw === null || salaryRaw === undefined) return null;

  const symbol = currencySymbol(currencyCode);
  const s = String(salaryRaw).trim();
  if (!s) return null;

  const hasCurrencyAlready = /€|\$|£|\bEUR\b|\bUSD\b|\bGBP\b/i.test(s);

  const rangeMatch = s.match(/^\s*([\d.,]+)\s*[-–]\s*([\d.,]+)\s*$/);
  if (rangeMatch) {
    const a = Number(rangeMatch[1].replace(/\./g, "").replace(",", "."));
    const b = Number(rangeMatch[2].replace(/\./g, "").replace(",", "."));
    const left = Number.isFinite(a) ? formatNumber(a, locale) : rangeMatch[1];
    const right = Number.isFinite(b) ? formatNumber(b, locale) : rangeMatch[2];
    return `${left} - ${right}${hasCurrencyAlready ? "" : ` ${symbol}`}`;
  }

  const singleNumberMatch = s.match(/^\s*[\d.,]+\s*$/);
  if (singleNumberMatch) {
    const n = Number(s.replace(/\./g, "").replace(",", "."));
    if (Number.isFinite(n)) return `${formatNumber(n, locale)}${hasCurrencyAlready ? "" : ` ${symbol}`}`;
  }

  return hasCurrencyAlready ? s : `${s} ${symbol}`;
};

export default function ClosedCareersPage() {
  const { t, language: ctxLang } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [careers, setCareers] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let alive = true;
    const lang = (typeof window !== "undefined" && window.localStorage?.getItem("lang")) || ctxLang || "es";

    fetchCareers(lang as "es" | "en")
      .then((data) => {
        if (alive) setCareers(data?.docs ?? []);
      })
      .catch(console.error);

    setMounted(true);
    return () => {
      alive = false;
    };
  }, [ctxLang]);

  if (!mounted) return null;

  const isClosed = (career: any) => {
    const status = String(career?.status ?? "").toLowerCase();
    const title = String(career?.position ?? "").toLowerCase();
    return status === "closed" || title.includes("(closed)") || title.includes("(cerrada)");
  };

  const filteredCareers = careers?.filter((career) => {
    const matchesIndustry = selectedIndustry === "all" || career.sector === selectedIndustry;
    return isClosed(career) && matchesIndustry;
  });

  const lang = (typeof window !== "undefined" && window.localStorage?.getItem("lang")) || ctxLang || "es";
  const locale = lang === "en" ? "en-US" : "es-ES";
  const salaryLabel = lang === "en" ? "Salary" : "Salario";
  const locationLabel = lang === "en" ? "Location" : "Ubicación";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero section with background */}
      <section className="relative bg-[#1A1A2E] py-20">
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/careers" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("careers.backToCareers")}
          </Link>
          <div className="max-w-3xl mx-auto text-center mt-2">
            <motion.h1 className="text-4xl py-4 md:text-5xl lg:text-6xl font-bold mb-6 text-white" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {t("careers.closedVacancyHeroTitle")}
            </motion.h1>
            <motion.div className="w-24 h-1 bg-gray-500 mx-auto mb-6" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 0.7, delay: 0.3 }} />
            <motion.p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              {t("careers.closedVacancyHeroSubtitle")}
            </motion.p>
          </div>
        </div>

        {/* Animated background elements (grayscale for closed) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full bg-white/5" initial={{ x: Math.random() * 100, y: Math.random() * 100, opacity: 0 }} animate={{ x: [Math.random() * 100, Math.random() * 100 + 50], y: [Math.random() * 100, Math.random() * 100 + 50], opacity: [0, 0.1, 0] }} transition={{ duration: Math.random() * 5 + 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }} style={{ width: Math.random() * 100 + 50, height: Math.random() * 100 + 50, left: `${Math.random() * 90}%`, top: `${Math.random() * 90}%` }} />
          ))}
        </div>
      </section>

      <div className="bg-gray-50 w-full flex-grow">
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
              <Button key={industry.id} variant={isSelected ? "default" : "outline"} onClick={() => setSelectedIndustry(industry.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base ${isSelected ? "bg-gray-800 text-white hover:bg-gray-700" : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"}`}>
                {Icon && <Icon className="w-4 h-4" />}
                {t(industry.nameKey)}
              </Button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map((career) => {
            const hideSalary = Boolean(career?.["Ocultar salario"]);
            const salaryText = hideSalary ? null : formatSalaryText(career?.salary, career?.currency_code, locale);

            return (
              <motion.div key={career.id} whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 200 }}>
                <Card className="flex flex-col justify-between h-full bg-white text-gray-500 border-gray-200 opacity-90 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {!career["Ocultar empresa"] && (
                        <div className="grayscale opacity-75">
                          <img
                            src={(() => {
                              const server = process.env.NEXT_PUBLIC_CMS_URL || "";
                              const url = career?.logo?.url;

                              if (url) return url.startsWith("http") ? url : `${server}${url}`;
                              if ((career.company || "").toLowerCase() === "botic partners") return "/boticlogo.png";
                              if (career.company_url) return `https://logo.clearbit.com/${career.company_url.replace("https://", "").replace("http://", "").replace("www.", "")}`;
                              return "/placeholder-company.png";
                            })()}
                            alt={career.company || "Company logo"}
                            className="w-12 h-12"
                          />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-700">{career.position}</CardTitle>
                        <CardDescription className="text-gray-400 text-sm">{career["Ocultar empresa"] ? "Confidencial" : career.company}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col gap-2">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded w-fit mb-2 border border-gray-200">
                      {t("careers.closedPositionBadge")}
                    </span>
                    {career.location && (
                      <p className="text-sm">
                        <b>{locationLabel}:</b> {career.location}
                      </p>
                    )}

                    {!hideSalary && salaryText && (
                      <p className="text-sm">
                        <b>{salaryLabel}:</b> {salaryText}
                      </p>
                    )}

                    {hideSalary && (
                      <p className="text-sm">
                        <b>{salaryLabel}:</b> {lang === "en" ? "Confidential" : "Confidencial"}
                      </p>
                    )}
                  </CardContent>

                  <CardFooter>
                    <Link href={`/careers/${career.id}`} className="w-full bg-gray-200 py-2 text-center rounded-lg text-gray-700 hover:bg-gray-300 font-medium transition-colors">
                      {t("careers.viewClosedPositions") || "Ver detalles"}
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}

          {filteredCareers.length === 0 && (
             <div className="col-span-full py-12 text-center text-gray-500">
             <p>{lang === "en" ? "No closed vacancies found for this sector." : "No se han encontrado posiciones cerradas para este sector."}</p>
           </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
