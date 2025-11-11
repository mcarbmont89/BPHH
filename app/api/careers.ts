const API_URL = `${process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:4000'}/api/careers`

export const fetchCareers = async (locale: 'es' | 'en' = 'es') => {
    const res = await fetch(`${API_URL}?depth=1&locale=${locale}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(`fetchCareers failed: ${res.status}`)
    return res.json()
}

export const fetchCareerById = async (id: string, locale: 'es' | 'en' = 'es') => {
    const res = await fetch(`${API_URL}/${id}?depth=1&locale=${locale}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(`fetchCareerById failed: ${res.status}`)
    return res.json()
}
