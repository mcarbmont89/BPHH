export function resolveMediaUrl(url?: string | null) {
    if (!url) return null
    if (/^https?:\/\//i.test(url)) return url

    const base = process.env.NEXT_PUBLIC_CMS_URL?.replace(/\/+$/, '') || ''
    return `${base}${url.startsWith('/') ? '' : '/'}${url}`
}
