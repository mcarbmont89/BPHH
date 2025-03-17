"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ApplyModal } from "../components/ApplyModal"
import { motion } from "framer-motion"
import { Code, Cpu, Building2, Truck, Filter } from "lucide-react"

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

// Industry icons mapping
const industryIcons = {
  Software: Code,
  Hardware: Cpu,
  Construction: Building2,
  Logistics: Truck,
}

// Industry titles mapping
const industryTitles = {
  Software: "industries.software.title",
  Hardware: "industries.hardware.title",
  Construction: "industries.construction.title",
  Logistics: "industries.logistics.title",
}

export default function Careers() {
  const { t } = useLanguage()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

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
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">{t("careers.title")}</h1>

        {/* Industry filter buttons */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-lg font-medium">{t("careers.filterByIndustry")}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={selectedIndustry === null ? "default" : "outline"}
              onClick={() => setSelectedIndustry(null)}
              className="min-w-[100px]"
            >
              {t("careers.allIndustries")}
            </Button>
            {Object.keys(jobsByIndustry).map((industry) => {
              const Icon = industryIcons[industry as keyof typeof industryIcons]
              return (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  onClick={() => setSelectedIndustry(industry)}
                  className="min-w-[100px] flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{t(industryTitles[industry as keyof typeof industryTitles])}</span>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Industry sections */}
        {Object.entries(filteredIndustries).map(([industry, jobs], industryIndex) => {
          const Icon = industryIcons[industry as keyof typeof industryIcons]
          const titleKey = industryTitles[industry as keyof typeof industryTitles]

          return (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: industryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="h-0.5 flex-grow bg-primary/20 mr-4"></div>
                <div className="flex items-center">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary">{t(titleKey)}</h2>
                </div>
                <div className="h-0.5 flex-grow bg-primary/20 ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Card
                    key={job.id}
                    className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                  >
                    <CardContent className="flex flex-col flex-grow p-6">
                      <h3 className="text-xl font-semibold mb-2">{t(job.titleKey)}</h3>
                      <p className="text-gray-600 mb-2">
                        {t("careers.sector")}: {t(industryTitles[job.sector as keyof typeof industryTitles])}
                      </p>
                      <p className="text-sm text-gray-500 mb-4 flex-grow">{t(job.descriptionKey)}</p>
                      <Button onClick={() => handleApply(job)} className="w-full mt-auto">
                        {t("careers.apply")}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )
        })}
      </main>
      <Footer />
      {selectedJob && <ApplyModal isOpen={!!selectedJob} onClose={handleCloseModal} job={selectedJob} />}
    </div>
  )
}

