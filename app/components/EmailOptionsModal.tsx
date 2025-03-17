"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface EmailOptionsModalProps {
  isOpen: boolean
  onClose: () => void
  subject?: string
  body?: string
}

export function EmailOptionsModal({
  isOpen,
  onClose,
  subject = "Consultation Request",
  body = "",
}: EmailOptionsModalProps) {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailOption = (useGmail: boolean) => {
    setIsLoading(true)
    const email = "admin@boticpartners.com"
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)

    // Add the body parameter to both email links
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`

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
          <DialogTitle>{t("emailOptions.title")}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center space-x-4 mt-4">
          <Button onClick={() => handleEmailOption(false)} disabled={isLoading}>
            {t("emailOptions.useOutlook")}
          </Button>
          <Button onClick={() => handleEmailOption(true)} disabled={isLoading}>
            {t("emailOptions.useGmail")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

