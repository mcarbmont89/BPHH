"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  job: {
    titleKey: string
    id: string
    descriptionKey: string
    sector: string
  }
}

export function ApplyModal({ isOpen, onClose, job }: ApplyModalProps) {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [showEmailOptions, setShowEmailOptions] = useState(false)

  const handleApply = (useGmail: boolean) => {
    setIsLoading(true)
    const jobTitle = t(job.titleKey)
    const subject = encodeURIComponent(`Application for ${jobTitle} - ${job.id}`)
    const email = "admin@boticpartners.com"
    const mailtoLink = `mailto:${email}?subject=${subject}`
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`

    setTimeout(() => {
      window.open(useGmail ? gmailLink : mailtoLink, "_blank")
      setIsLoading(false)
      setShowEmailOptions(false)
      onClose()
    }, 500)
  }

  // Use the descriptionKey directly instead of trying to construct it
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("careers.jobDetails") || "Job Details"}</DialogTitle>
          <DialogDescription>
            {t("careers.jobDetailsDescription") || "Review the details of this position before applying."}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <h3 className="text-lg font-semibold mb-2">{t(job.titleKey)}</h3>
          <p className="text-sm text-gray-500 mb-2">ID: {job.id}</p>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="text-sm text-gray-700">{t(job.descriptionKey) || "No description available."}</p>
          </div>

          {!showEmailOptions ? (
            <Button onClick={() => setShowEmailOptions(true)} className="w-full bg-primary hover:bg-primary/90">
              {t("careers.apply")}
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-center">
                {t("careers.applyModalDescription", { jobTitle: t(job.titleKey) }) ||
                  `How would you like to apply for the ${t(job.titleKey)} position?`}
              </p>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => handleApply(false)} disabled={isLoading} variant="outline">
                  {t("careers.useDefaultEmail")}
                </Button>
                <Button onClick={() => handleApply(true)} disabled={isLoading}>
                  {t("careers.useGmail")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
