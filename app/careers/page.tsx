"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Code, Cpu, Building2, Truck, Filter } from "lucide-react"
import { jobsByIndustry, industryTitles } from "./data"

export default function Careers() {
  const { t } = useLanguage()
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const industryParam = searchParams.get("industry")

  useEffect(() => {
    if (industryParam && Object.keys(industryTitles).includes(industryParam)) {
      setSelectedIndustry(industryParam)
    }
  }, [industryParam])

  const filteredIndustries = selectedIndustry
    ? { [selectedIndustry]: jobsByIndustry[selectedIndustry as keyof typeof jobsByIndustry] }
    : jobsByIndustry

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <h1 className="text-3xl font-bold mb-12 text-center">{t("careers.title")}</h1>

        {selectedIndustry === null && <p className="text-center text-gray-600 mb-8">{t("careers.subtitle")}</p>}

        {/* Industry filter buttons */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-lg font-medium">{t("careers.filterByIndustry")}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={selectedIndustry === null ? "default" : "outline"}
              onClick={() => setSelectedIndustry(null)}
              className="rounded-md"
            >
              {t("careers.allIndustries")}
            </Button>
            {Object.entries(industryTitles).map(([industry, title]) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                className="rounded-md flex items-center gap-2"
              >
                {industry === "Software" && <Code className="h-4 w-4" />}
                {industry === "Hardware" && <Cpu className="h-4 w-4" />}
                {industry === "Construction" && <Building2 className="h-4 w-4" />}
                {industry === "Logistics" && <Truck className="h-4 w-4" />}
                <span>{title}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 my-8"></div>

        {selectedIndustry && (
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              {selectedIndustry === "Software" && <Code className="h-5 w-5 text-primary mr-2" />}
              {selectedIndustry === "Hardware" && <Cpu className="h-5 w-5 text-primary mr-2" />}
              {selectedIndustry === "Construction" && <Building2 className="h-5 w-5 text-primary mr-2" />}
              {selectedIndustry === "Logistics" && <Truck className="h-5 w-5 text-primary mr-2" />}
              <h2 className="text-xl font-medium text-primary">
                {industryTitles[selectedIndustry as keyof typeof industryTitles]}
              </h2>
            </div>
          </div>
        )}

        {Object.entries(filteredIndustries).map(([industry, jobs]) => (
          <div key={industry} className="mb-16">
            {!selectedIndustry && (
              <div className="flex items-center mb-8">
                <div className="h-0.5 flex-grow bg-gray-200 mr-4"></div>
                <div className="flex items-center">
                  {industry === "Software" && <Code className="h-5 w-5 text-primary mr-2" />}
                  {industry === "Hardware" && <Cpu className="h-5 w-5 text-primary mr-2" />}
                  {industry === "Construction" && <Building2 className="h-5 w-5 text-primary mr-2" />}
                  {industry === "Logistics" && <Truck className="h-5 w-5 text-primary mr-2" />}
                  <h2 className="text-xl font-medium text-primary">
                    {industryTitles[industry as keyof typeof industryTitles]}
                  </h2>
                </div>
                <div className="h-0.5 flex-grow bg-gray-200 ml-4"></div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {jobs.map((job) => (
                <Link key={job.id} href={`/careers/${job.id}`} className="block">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-3">{t(job.titleKey)}</h3>
                    <p className="text-gray-600 mb-4">
                      {t("careers.sector")}: {industryTitles[job.sector as keyof typeof industryTitles].split(" ")[0]}
                    </p>
                    <p className="text-gray-500 mb-8 text-sm flex-grow">{t(job.descriptionKey)}</p>
                    <Button className="w-full mt-auto bg-primary hover:bg-primary/90">{t("careers.learnMore")}</Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}
