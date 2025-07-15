const API_URL = 'https://botic-cms.vercel.app/api/posts'

export const fetchPosts = async () => {
    const res = await fetch(API_URL)
    const posts = await res.json()

    return posts
}

export const fetchPostById = async (id: string) => {
    const res = await fetch(`${API_URL}/${id}`)
    const post = await res.json()

    console.log(post)

    return post
}

export const fetchRelatedPosts = async (id: string) => {
    const res = await fetch(`${API_URL}?where={tags: {id: {eq: "${id}"}}}`)
    const posts = await res.json()

    return posts.docs.filter((post: any) => post.id !== parseInt(id))
}
