"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { ApplyModal } from "../components/ApplyModal"
import { Code, Cpu, Building2, Truck, Filter } from "lucide-react"

// Importar useSearchParams para obtener los parámetros de la URL
import { useSearchParams } from "next/navigation"

interface Job {
  titleKey: string
  sector: string
  id: string
  descriptionKey: string
}

// Organize jobs by the four industry sectors shown in the image
const jobsByIndustry = {
  Software: [
    {
      titleKey: "careers.jobs.seniorFullStack.title",
      sector: "Software",
      id: "SFS001",
      descriptionKey: "careers.jobs.seniorFullStack.description",
    },
    {
      titleKey: "careers.jobs.aiResearchScientist.title",
      sector: "Software",
      id: "AIRS001",
      descriptionKey: "careers.jobs.aiResearchScientist.description",
    },
    {
      titleKey: "careers.jobs.dataScientist.title",
      sector: "Software",
      id: "DS001",
      descriptionKey: "careers.jobs.dataScientist.description",
    },
  ],
  Hardware: [
    {
      titleKey: "careers.jobs.semiconductorProcessEngineer.title",
      sector: "Hardware",
      id: "SPE001",
      descriptionKey: "careers.jobs.semiconductorProcessEngineer.description",
    },
    {
      titleKey: "careers.jobs.asicDesignEngineer.title",
      sector: "Hardware",
      id: "ADE001",
      descriptionKey: "careers.jobs.asicDesignEngineer.description",
    },
    {
      titleKey: "careers.jobs.embeddedSystemsEngineer.title",
      sector: "Hardware",
      id: "ESE001",
      descriptionKey: "careers.jobs.embeddedSystemsEngineer.description",
    },
  ],
  Construction: [
    {
      titleKey: "careers.jobs.constructionProjectManager.title",
      sector: "Construction",
      id: "CPM001",
      descriptionKey: "careers.jobs.constructionProjectManager.description",
    },
    {
      titleKey: "careers.jobs.bimSpecialist.title",
      sector: "Construction",
      id: "BIM001",
      descriptionKey: "careers.jobs.bimSpecialist.description",
    },
    {
      titleKey: "careers.jobs.smartBuildingEngineer.title",
      sector: "Construction",
      id: "SBE001",
      descriptionKey: "careers.jobs.smartBuildingEngineer.description",
    },
  ],
  Logistics: [
    {
      titleKey: "careers.jobs.supplyChainAnalyst.title",
      sector: "Logistics",
      id: "SCA001",
      descriptionKey: "careers.jobs.supplyChainAnalyst.description",
    },
    {
      titleKey: "careers.jobs.logisticsOperationsManager.title",
      sector: "Logistics",
      id: "LOM001",
      descriptionKey: "careers.jobs.logisticsOperationsManager.description",
    },
    {
      titleKey: "careers.jobs.warehouseAutomationSpecialist.title",
      sector: "Logistics",
      id: "WAS001",
      descriptionKey: "careers.jobs.warehouseAutomationSpecialist.description",
    },
  ],
}

// Update the industry titles mapping to match the image
const industryTitles = {
  Software: "Software (AI and Development)",
  Hardware: "Hardware (Deep Tech)",
  Construction: "Construction & Real Estate",
  Logistics: "Logistics",
}

export default function Careers() {
  const { t } = useLanguage()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  // Dentro del componente Careers, agregar este código después de las declaraciones de useState
  const searchParams = useSearchParams()
  const industryParam = searchParams.get("industry")

  // Modificar el useEffect existente o agregar uno nuevo para establecer el filtro de industria basado en el parámetro de URL
  useEffect(() => {
    if (industryParam) {
      // Ahora el parámetro ya viene con el nombre correcto de la industria
      if (Object.keys(industryTitles).includes(industryParam)) {
        setSelectedIndustry(industryParam)
      }
    }
  }, [industryParam])

  const handleApply = (job: Job) => {
    setSelectedJob(job)
  }

  const handleCloseModal = () => {
    setSelectedJob(null)
  }

  // Filter jobs based on selected industry
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

        {/* Divider line */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Display selected industry header */}
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

        {/* Industry sections */}
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
                <div
                  key={job.id}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3">{t(job.titleKey)}</h3>

                  <p className="text-gray-600 mb-4">
                    {t("careers.sector")}: {industryTitles[job.sector as keyof typeof industryTitles].split(" ")[0]}
                  </p>

                  <p className="text-gray-500 mb-8 text-sm">{t(job.descriptionKey)}</p>

                  <Button onClick={() => handleApply(job)} className="w-full bg-primary hover:bg-primary/90">
                    {t("careers.learnMore") || "Learn More"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <Footer />
      {selectedJob && <ApplyModal isOpen={!!selectedJob} onClose={handleCloseModal} job={selectedJob} />}
    </div>
  )
}
