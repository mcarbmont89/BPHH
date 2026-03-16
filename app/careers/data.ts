import type React from "react"
import { Code, Cpu, Building2, Truck, Briefcase, Filter, Landmark, Megaphone } from "lucide-react"

export interface Job {
  id: string
  titleKey: string
  sectorKey: string
  descriptionKey: string
  industry: string
  icon: React.ElementType // Use React.ElementType for Lucide icons
}

export const jobs: Job[] = [
  {
    id: "1",
    titleKey: "careers.jobs.seniorFullStack.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.seniorFullStack.description",
    industry: "Software (AI and Development)",
    icon: Code,
  },
  {
    id: "2",
    titleKey: "careers.jobs.aiResearchScientist.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.aiResearchScientist.description",
    industry: "Software (AI and Development)",
    icon: Code,
  },
  {
    id: "3",
    titleKey: "careers.jobs.dataScientist.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.dataScientist.description",
    industry: "Software (AI and Development)",
    icon: Code,
  },
  {
    id: "4",
    titleKey: "careers.jobs.semiconductorProcessEngineer.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.semiconductorProcessEngineer.description",
    industry: "Hardware (Deep Tech)",
    icon: Cpu,
  },
  {
    id: "5",
    titleKey: "careers.jobs.asicDesignEngineer.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.asicDesignEngineer.description",
    industry: "Hardware (Deep Tech)",
    icon: Cpu,
  },
  {
    id: "6",
    titleKey: "careers.jobs.embeddedSystemsEngineer.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.embeddedSystemsEngineer.description",
    industry: "Hardware (Deep Tech)",
    icon: Cpu,
  },
  {
    id: "7",
    titleKey: "careers.jobs.constructionProjectManager.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.constructionProjectManager.description",
    industry: "Construction & Real Estate",
    icon: Building2,
  },
  {
    id: "8",
    titleKey: "careers.jobs.bimSpecialist.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.bimSpecialist.description",
    industry: "Construction & Real Estate",
    icon: Building2,
  },
  {
    id: "9",
    titleKey: "careers.jobs.smartBuildingEngineer.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.smartBuildingEngineer.description",
    industry: "Construction & Real Estate",
    icon: Building2,
  },
  {
    id: "10",
    titleKey: "careers.jobs.supplyChainAnalyst.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.supplyChainAnalyst.description",
    industry: "Logistics",
    icon: Truck,
  },
  {
    id: "11",
    titleKey: "careers.jobs.logisticsOperationsManager.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.logisticsOperationsManager.description",
    industry: "Logistics",
    icon: Truck,
  },
  {
    id: "12",
    titleKey: "careers.jobs.warehouseAutomationSpecialist.title",
    sectorKey: "careers.sector",
    descriptionKey: "careers.jobs.warehouseAutomationSpecialist.description",
    industry: "Logistics",
    icon: Truck,
  },
]

export const industries = [
  { id: "all", nameKey: "careers.allIndustries", icon: Filter },
  { id: "software", nameKey: "Technology (AI & Development)", icon: Code },
  { id: "hardware", nameKey: "Hardware (Deep Tech)", icon: Cpu },
  { id: "construction", nameKey: "Construction & Real Estate", icon: Building2 },
  { id: "logistics", nameKey: "Logistics", icon: Truck },
  { id: "sales", nameKey: "Sales", icon: Briefcase },
  { id: "finance_fintech", nameKey: "Finance & Fintech", icon: Landmark },
  { id: "digital_marketing", nameKey: "Digital & Marketing", icon: Megaphone },
]
