"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { Button } from "@/components/ui/button"
import { jobsByIndustry, industryTitles } from "../data"
import type { Job } from "../data"
import { ArrowLeft } from "lucide-react"

// Helper function to find a job by ID
const findJobById = (id: string): Job | undefined => {
  for (const industry in jobsByIndustry) {
    const job = jobsByIndustry[industry as keyof typeof jobsByIndustry].find((job) => job.id === id)
    if (job) return job
  }
  return undefined
}

export default function JobDetailsPage() {
  const { t } = useLanguage()
  const params = useParams()
  const jobId = params.id as string
  const job = findJobById(jobId)
  const [isLoading, setIsLoading] = useState(false)

  const handleApply = (useGmail: boolean) => {
    if (!job) return
    setIsLoading(true)
    const jobTitle = t(job.titleKey)
    const subject = encodeURIComponent(`Application for ${jobTitle} - ${job.id}`)
    const email = "admin@boticpartners.com"
    const mailtoLink = `mailto:${email}?subject=${subject}`
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`

    setTimeout(() => {
      window.open(useGmail ? gmailLink : mailtoLink, "_blank")
      setIsLoading(false)
    }, 500)
  }

  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 pt-28 pb-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-4">{t("careers.jobNotFound.title")}</h1>
          <p className="text-gray-600 mb-8">{t("careers.jobNotFound.description")}</p>
          <Link href="/careers">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("careers.jobNotFound.backButton")}
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers" className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("careers.backToCareers")}
          </Link>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-bold text-primary">{t(job.titleKey)}</h1>
                <p className="text-gray-500 mt-1">{industryTitles[job.sector as keyof typeof industryTitles]}</p>
              </div>
              <span className="text-sm text-gray-400 flex-shrink-0 ml-4">ID: {job.id}</span>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <h2 className="text-xl font-semibold mb-4">{t("careers.jobDescription")}</h2>
            <div className="prose max-w-none text-gray-700">
              <p>{t(job.descriptionKey)}</p>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-4">{t("careers.readyToApply")}</h3>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => handleApply(false)} disabled={isLoading} variant="outline">
                  {t("careers.useDefaultEmail")}
                </Button>
                <Button onClick={() => handleApply(true)} disabled={isLoading}>
                  {t("careers.useGmail")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
