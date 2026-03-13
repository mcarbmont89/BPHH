"use server"

interface CVData {
  nombreArchivo: string
  contenidoBase64: string
  tipoMime?: string
  tamanoBytes?: number
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

  const cvPayload: Record<string, unknown> = {
    nombre_archivo: data.cv.nombreArchivo,
    contenido_base64: data.cv.contenidoBase64,
  }
  if (data.cv.tipoMime) cvPayload.tipo_mime = data.cv.tipoMime
  if (data.cv.tamanoBytes) cvPayload["tamaño_bytes"] = data.cv.tamanoBytes

  const payload = {
    candidato: {
      nombre: data.nombre,
      apellido: data.apellido,
      correo: data.correo,
      telefono: data.telefono,
      cv: cvPayload,
    },
    origen: {
      timestamp: new Date().toISOString(),
      pagina_web: data.nombreVacante,
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
