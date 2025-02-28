"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  job: {
    title: string
    id: string
  }
}

export function ApplyModal({ isOpen, onClose, job }: ApplyModalProps) {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)

  const handleApply = (useGmail: boolean) => {
    setIsLoading(true)
    const subject = encodeURIComponent(`Application for ${job.title} - ${job.id}`)
    const email = "admin@boticpartners.com"
    const mailtoLink = `mailto:${email}?subject=${subject}`
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`

    setTimeout(() => {
      window.open(useGmail ? gmailLink : mailtoLink, "_blank")
      setIsLoading(false)
      onClose()
    }, 500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("careers.applyModalTitle")}</DialogTitle>
          <DialogDescription>{t("careers.applyModalDescription", { jobTitle: job.title })}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-4">
          <Button onClick={() => handleApply(false)} disabled={isLoading}>
            {t("careers.useDefaultEmail")}
          </Button>
          <Button onClick={() => handleApply(true)} disabled={isLoading}>
            {t("careers.useGmail")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

