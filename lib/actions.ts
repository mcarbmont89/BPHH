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
  const apiEndpoint =
    "https://e963b58743eceb64a5f2d1c08952b9.49.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/6b307d153e924322929f7061ddb571c3/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FeT1fzFs64boh_bqTZY6hiIQNTUG-MFdnblNjLoPqik"

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

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API error: ${response.status} - ${errorText}`)
    }

    // Check if there's content before trying to parse as JSON
    const contentType = response.headers.get("content-type")

    // If the response is empty or not JSON, just return a success message
    if (!contentType || !contentType.includes("application/json")) {
      return { success: true, message: "Application submitted successfully" }
    }

    // Only try to parse JSON if we have JSON content
    const text = await response.text()
    return text ? JSON.parse(text) : { success: true }
  } catch (error) {
    console.error("Error submitting application:", error)
    throw error
  }
}
