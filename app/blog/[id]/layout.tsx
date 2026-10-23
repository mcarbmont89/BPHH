import type { Metadata } from "next"
import { cmsGet, truncate } from "@/lib/site"
import { resolveMediaUrl } from "@/lib/resolveMediaUrl"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await cmsGet(`/api/posts/${encodeURIComponent(params.id)}?depth=1`)
  const canonical = `/blog/${params.id}`
  if (!post?.title) return { title: "Blog", alternates: { canonical } }

  const description = post.excerpt ? truncate(String(post.excerpt)) : undefined
  const imageUrl = resolveMediaUrl(post?.image?.sizes?.large?.url || post?.image?.url || null)

  return {
    title: String(post.title),
    description,
    alternates: { canonical },
    openGraph: {
      title: String(post.title),
      description,
      url: canonical,
      type: "article",
      ...(post.createdAt ? { publishedTime: post.createdAt } : {}),
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
