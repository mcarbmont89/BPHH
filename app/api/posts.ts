const API_URL = `${process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:4000'}/api/careers'}/api/posts`

export const fetchPosts = async () => {
    const res = await fetch(`${API_URL}?depth=1`, { cache: 'no-store' })
    return res.json()
}

export const fetchPostById = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}?depth=1`, { cache: 'no-store' })
    return res.json()
}

export const fetchRelatedPosts = async (id: string) => {
    const current = await fetchPostById(id)
    const currentTags: string[] = (current?.tags || []).map((t: any) => (t?.tag || '').toLowerCase())

    const res = await fetch(`${API_URL}?depth=1`, { cache: 'no-store' })
    const all = await res.json()

    return (all?.docs || [])
        .filter((p: any) => String(p.id) !== String(id))
        .filter((p: any) => {
        const tags: string[] = (p?.tags || []).map((t: any) => (t?.tag || '').toLowerCase())
        return tags.some((t) => currentTags.includes(t))
    })
}

export const fetchFeaturedVideoPost = async () => {
    const res = await fetch(`${API_URL}?where[heroType][equals]=video&limit=1&depth=1`, { cache: 'no-store' })
    const data = await res.json()
    return data?.docs?.[0] || null
}
