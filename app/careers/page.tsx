"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ApplyModal } from "../components/ApplyModal"

interface Job {
  titleKey: string
  sector: string
  id: string
  descriptionKey: string
}

const jobs: Job[] = [
  // Technology
  {
    titleKey: "careers.jobs.seniorFullStack.title",
    sector: "Technology",
    id: "SFS001",
    descriptionKey: "careers.jobs.seniorFullStack.description",
  },
  {
    titleKey: "careers.jobs.aiResearchScientist.title",
    sector: "Artificial Intelligence",
    id: "AIRS001",
    descriptionKey: "careers.jobs.aiResearchScientist.description",
  },
  {
    titleKey: "careers.jobs.devOpsEngineer.title",
    sector: "Cloud Infrastructure",
    id: "DOE001",
    descriptionKey: "careers.jobs.devOpsEngineer.description",
  },
  {
    titleKey: "careers.jobs.uxUiDesigner.title",
    sector: "Design",
    id: "UXD001",
    descriptionKey: "careers.jobs.uxUiDesigner.description",
  },
  {
    titleKey: "careers.jobs.dataScientist.title",
    sector: "Data Analytics",
    id: "DS001",
    descriptionKey: "careers.jobs.dataScientist.description",
  },
  {
    titleKey: "careers.jobs.cybersecuritySpecialist.title",
    sector: "Information Security",
    id: "CS001",
    descriptionKey: "careers.jobs.cybersecuritySpecialist.description",
  },

  // Semiconductors
  {
    titleKey: "careers.jobs.semiconductorProcessEngineer.title",
    sector: "Semiconductors",
    id: "SPE001",
    descriptionKey: "careers.jobs.semiconductorProcessEngineer.description",
  },
  {
    titleKey: "careers.jobs.asicDesignEngineer.title",
    sector: "Semiconductors",
    id: "ADE001",
    descriptionKey: "careers.jobs.asicDesignEngineer.description",
  },
  {
    titleKey: "careers.jobs.photolithographySpecialist.title",
    sector: "Semiconductors",
    id: "PS001",
    descriptionKey: "careers.jobs.photolithographySpecialist.description",
  },
  {
    titleKey: "careers.jobs.semiconductorEquipmentTechnician.title",
    sector: "Semiconductors",
    id: "SET001",
    descriptionKey: "careers.jobs.semiconductorEquipmentTechnician.description",
  },

  // Healthcare
  {
    titleKey: "careers.jobs.medicalDeviceSoftwareEngineer.title",
    sector: "Healthcare",
    id: "MDSE001",
    descriptionKey: "careers.jobs.medicalDeviceSoftwareEngineer.description",
  },
  {
    titleKey: "careers.jobs.bioinformaticsSpecialist.title",
    sector: "Healthcare",
    id: "BS001",
    descriptionKey: "careers.jobs.bioinformaticsSpecialist.description",
  },

  // Energy
  {
    titleKey: "careers.jobs.renewableEnergyProjectManager.title",
    sector: "Energy",
    id: "REPM001",
    descriptionKey: "careers.jobs.renewableEnergyProjectManager.description",
  },
  {
    titleKey: "careers.jobs.smartGridSystemsEngineer.title",
    sector: "Energy",
    id: "SGSE001",
    descriptionKey: "careers.jobs.smartGridSystemsEngineer.description",
  },

  // Manufacturing
  {
    titleKey: "careers.jobs.roboticsEngineer.title",
    sector: "Manufacturing",
    id: "RE001",
    descriptionKey: "careers.jobs.roboticsEngineer.description",
  },
  {
    titleKey: "careers.jobs.industrialIotSpecialist.title",
    sector: "Manufacturing",
    id: "IIOTS001",
    descriptionKey: "careers.jobs.industrialIotSpecialist.description",
  },

  // Retail
  {
    titleKey: "careers.jobs.eCommercePlatformArchitect.title",
    sector: "Retail",
    id: "EPA001",
    descriptionKey: "careers.jobs.eCommercePlatformArchitect.description",
  },
  {
    titleKey: "careers.jobs.supplyChainOptimizationAnalyst.title",
    sector: "Retail",
    id: "SCOA001",
    descriptionKey: "careers.jobs.supplyChainOptimizationAnalyst.description",
  },
]

export default function Careers() {
  const { t } = useLanguage()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const handleApply = (job: Job) => {
    setSelectedJob(job)
  }

  const handleCloseModal = () => {
    setSelectedJob(null)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{t("careers.title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="flex flex-col">
              <CardContent className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-semibold mb-2">{t(job.titleKey)}</h2>
                <p className="text-gray-600 mb-2">
                  {t("careers.sector")}: {job.sector}
                </p>
                <p className="text-sm text-gray-500 mb-4 flex-grow">{t(job.descriptionKey)}</p>
                <Button onClick={() => handleApply(job)} className="w-full">
                  {t("careers.apply")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
      {selectedJob && <ApplyModal isOpen={!!selectedJob} onClose={handleCloseModal} job={selectedJob} />}
    </div>
  )
}

