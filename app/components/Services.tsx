"use client"

import { useLanguage } from "@/lib/i18n/LanguageContext"
import { useState } from "react"
// Import the EmailOptionsModal at the top of the file
import { EmailOptionsModal } from "./EmailOptionsModal"

export default function Services() {
  const { t } = useLanguage()

  // Add a new state for controlling the modal visibility
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4"></div>
      {/* Keep the EmailOptionsModal component for potential future use */}
      <EmailOptionsModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        subject={t("services.consultationSubject")}
      />
    </section>
  )
}
