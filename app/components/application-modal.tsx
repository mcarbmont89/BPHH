"use client"

import { useState, useMemo } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitApplication } from "@/lib/actions"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ThankYouModal } from "@/app/components/thank-you-modal"

interface ApplicationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  career: any
  onSuccess?: (name: string) => void
}

export function ApplicationModal({ open, onOpenChange, career, onSuccess }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const [candidateName, setCandidateName] = useState("")

  // Create schema only on client side
  const formSchema = useMemo(() => {
    if (typeof window === "undefined") {
      // Server-side fallback schema
      return z.object({
        nombre: z.string().min(1, "Campo requerido"),
        apellido: z.string().min(1, "Campo requerido"),
        correo: z.string().email("Email inválido"),
        telefono: z.string().min(1, "Campo requerido"),
        nombreVacante: z.string().min(1, "Campo requerido"),
        cv: z.any(),
      })
    }

    // Client-side schema with FileList
    return z.object({
      nombre: z.string().min(1, "Campo requerido"),
      apellido: z.string().min(1, "Campo requerido"),
      correo: z.string().email("Email inválido"),
      telefono: z.string().min(1, "Campo requerido"),
      nombreVacante: z.string().min(1, "Campo requerido"),
      cv: z
        .instanceof(FileList)
        .refine((files) => files.length > 0, "CV requerido")
        .refine((files) => files[0].size <= 5 * 1024 * 1024, "Tu CV debe pesar menos de 5MB"),
    })
  }, [])

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      nombreVacante: career.ref + " - " + career.position,
    },
  })

  async function onSubmit(data: FormValues) {
    console.log('submiting')
    try {
      setIsSubmitting(true)

      const file = data.cv[0]
      const reader = new FileReader()

      reader.onload = async (e) => {
        try {
          const base64Content = e.target?.result?.toString().split(",")[1] || ""

          await submitApplication({
            nombre: data.nombre,
            apellido: data.apellido,
            correo: data.correo,
            telefono: data.telefono,
            nombreVacante: data.nombreVacante,
            cv: {
              nombreArchivo: file.name,
              contenidoBase64: base64Content,
            },
          })

          // After successful submission
          if (onSuccess) {
            onSuccess(data.nombre)
          } else {
            // Only show the internal thank you modal if no external handler is provided
            setCandidateName(data.nombre)
            setShowThankYouModal(true)
          }

          // Reset form and close application modal
          form.reset()
          onOpenChange(false)

          // Still show toast for additional feedback
          toast({
            title: "Application submitted",
            description: "Thank you for your application!",
          })
        } catch (error) {
          console.error("Error in file upload handler:", error)
          toast({
            title: "Error",
            description: "There was an error submitting your application. Please try again.",
            variant: "destructive",
          })
        } finally {
          setIsSubmitting(false)
        }
      }

      reader.onerror = (error) => {
        console.error("Error reading file:", error)
        toast({
          title: "Error",
          description: "There was an error reading your file. Please try again with a different file.",
          variant: "destructive",
        })
        setIsSubmitting(false)
      }

      reader.readAsDataURL(file)
    } catch (error) {
      console.error("Error submitting application:", error)
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-white text-gray-900">
          <DialogHeader>
            <DialogDescription>Completa el formulario para postular a la vacante de {career.position}.</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 [&_input]:!bg-white [&_input]:!text-gray-900 [&_input]:!border-gray-300 [&_input]:placeholder:!text-gray-400">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="apellido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Perez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="correo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="juan.perez@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefono</FormLabel>
                    <FormControl>
                      <Input placeholder="+34 673 456 789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="nombreVacante"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Position</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Software Developer">Software Developer</SelectItem>
                        <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                        <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                        <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
                        <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                        <SelectItem value="Product Manager">Product Manager</SelectItem>
                        <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                        <SelectItem value="Data Analyst">Data Analyst</SelectItem>
                        <SelectItem value="Marketing Specialist">Marketing Specialist</SelectItem>
                        <SelectItem value="Sales Representative">Sales Representative</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="cv"
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel>CV</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => onChange(e.target.files)}
                        {...rest}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="!bg-white !text-gray-700 !border-gray-300 hover:!bg-gray-50">
                  Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar aplicación"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <ThankYouModal open={showThankYouModal} onOpenChange={setShowThankYouModal} candidateName={candidateName} />
    </>
  )
}
