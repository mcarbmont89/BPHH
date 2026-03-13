"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle2 } from "lucide-react"

interface ThankYouModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  candidateName: string
}

export function ThankYouModal({ open, onOpenChange, candidateName }: ThankYouModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white text-gray-900 border-gray-200">
        <DialogHeader className="flex flex-col items-center text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mb-2 mt-4" />
          <DialogTitle className="text-2xl">Gracias {candidateName}!</DialogTitle>
        </DialogHeader>
        <div className="py-4 text-center">
          <p className="mb-4">
            Ya recibimos tu información. Nuestro equipo va evaluar tu candidatura y te contactaremos pronto.
          </p>
          <p className="text-sm text-muted-foreground">
            Por favor, revisa tu correo electrónico regularmente ya que podremos contactarte para
            coordinar los siguientes pasos.
          </p>
        </div>
        <DialogFooter className="flex justify-center">
          <Button onClick={() => onOpenChange(false)}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
