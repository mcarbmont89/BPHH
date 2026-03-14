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
  const apiEndpoint = process.env.POWER_AUTOMATE_URL ||
    "https://default17147d47caf2493fb27550db21e737.f1.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/dbe91bb3513740ea89e7ef48e8168abd/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mlGCSvgAiClONiXqTXShB_W56pgp6X33dDpVV8Qyiq0"

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
    throw new Error(`API error: ${response.status} - ${errorText}`)
  }

  const contentType = response.headers.get("content-type")
  if (!contentType || !contentType.includes("application/json")) {
    return { success: true, message: "Application submitted successfully" }
  }

  const text = await response.text()
  return text ? JSON.parse(text) : { success: true }
}
