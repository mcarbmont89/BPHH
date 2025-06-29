"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/LanguageContext"

interface EmailOptionsModalProps {
  isOpen: boolean
  onClose: () => void
  subject: string
}

export function EmailOptionsModal({ isOpen, onClose, subject }: EmailOptionsModalProps) {
  const { t } = useLanguage()

  const handleEmailOption = (option: string) => {
    const outlookUrl =
      "https://outlook.office.com/bookwithme/user/5dc7b4ad41ef41dfa5e4f1053f4710b8@boticpartners.com/meetingtype/n6FtRriP-0afMrnBYzgN9w2?anonymous&ep=mlink"
    window.open(outlookUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("emailModal.title")}</h3>
            <p className="text-gray-600">{t("emailModal.subtitle")}</p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => handleEmailOption("meeting")}
              className="w-full flex items-center justify-start gap-3 p-4 h-auto bg-primary hover:bg-primary/90"
            >
              <Calendar className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">{t("emailModal.scheduleMeeting")}</div>
                <div className="text-sm opacity-90">{t("emailModal.scheduleMeetingDesc")}</div>
              </div>
            </Button>

            <Button
              onClick={() => handleEmailOption("email")}
              variant="outline"
              className="w-full flex items-center justify-start gap-3 p-4 h-auto border-gray-200 hover:bg-gray-50"
            >
              <Mail className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">{t("emailModal.sendEmail")}</div>
                <div className="text-sm text-gray-600">{t("emailModal.sendEmailDesc")}</div>
              </div>
            </Button>

            <Button
              onClick={() => handleEmailOption("chat")}
              variant="outline"
              className="w-full flex items-center justify-start gap-3 p-4 h-auto border-gray-200 hover:bg-gray-50"
            >
              <MessageSquare className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">{t("emailModal.startChat")}</div>
                <div className="text-sm text-gray-600">{t("emailModal.startChatDesc")}</div>
              </div>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
