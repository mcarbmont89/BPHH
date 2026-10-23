"use server"

interface CVData {
  nombreArchivo: string
  contenidoBase64: string
}

interface ApplicationData {
  nombre: string
  apellido: string
  correo: string
  telefono: string
  nombreVacante: string
  cv: CVData
}

export async function submitApplication(data: ApplicationData) {
  if (!data.nombre?.trim() || !data.apellido?.trim()) {
    throw new Error("Nombre y apellido son requeridos")
  }

  const apiEndpoint = process.env.POWER_AUTOMATE_URL
  if (!apiEndpoint) {
    console.error("[submitApplication] Falta la variable de entorno POWER_AUTOMATE_URL")
    throw new Error("El envío de candidaturas no está configurado")
  }

  const payload = {
    nombre: data.nombre,
    apellido: data.apellido,
    correo: data.correo,
    telefono: data.telefono,
    nombreVacante: data.nombreVacante,
    cv: {
      nombreArchivo: data.cv.nombreArchivo,
      contenidoBase64: data.cv.contenidoBase64,
    },
  }

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => "")
    console.error(`[submitApplication] API error ${response.status}:`, errorText)
    throw new Error(`API error: ${response.status} - ${errorText}`)
  }

  const contentType = response.headers.get("content-type")
  if (!contentType || !contentType.includes("application/json")) {
    return { success: true, message: "Application submitted successfully" }
  }

  const text = await response.text()
  return text ? JSON.parse(text) : { success: true }
}
