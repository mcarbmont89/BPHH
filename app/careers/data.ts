export interface Job {
  titleKey: string
  sector: string
  id: string
  descriptionKey: string
}

// Organize jobs by the four industry sectors shown in the image
export const jobsByIndustry = {
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
export const industryTitles = {
  Software: "Software (AI and Development)",
  Hardware: "Hardware (Deep Tech)",
  Construction: "Construction & Real Estate",
  Logistics: "Logistics",
}
