"use client"

import { useState, useMemo } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter } from "lucide-react"
import { jobs, industries } from "./data"

export default function CareersPage() {
  const { t } = useLanguage()
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all")

  const filteredJobs = useMemo(() => {
    if (selectedIndustry === "all") {
      return jobs
    }
    return jobs.filter((job) => job.industry === selectedIndustry)
  }, [selectedIndustry])

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground flex items-center justify-center gap-2">
          <Filter className="w-6 h-6 md:w-8 md:h-8" />
          {t("careers.filterByIndustry")}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {industries.map((industry) => {
          const Icon = industry.icon
          const isSelected = selectedIndustry === industry.id
          return (
            <Button
              key={industry.id}
              variant={isSelected ? "default" : "outline"}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base ${
                isSelected
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {t(industry.nameKey)}
            </Button>
          )
        })}
      </div>

      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground flex items-center justify-center gap-2">
          {selectedIndustry === "all"
            ? t("careers.allIndustries")
            : t(industries.find((i) => i.id === selectedIndustry)?.nameKey || "")}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="flex flex-col justify-between h-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">{t(job.titleKey)}</CardTitle>
              <CardDescription className="text-muted-foreground text-sm">
                {t(job.sectorKey)}: {job.industry.split(" ")[0]}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground">{t(job.descriptionKey)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t("careers.learnMore")}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
