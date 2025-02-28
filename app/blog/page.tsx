"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface BlogPost {
  id: string
  titleKey: string
  excerptKey: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: "recruitment-process",
    titleKey: "blog.posts.recruitmentProcess.title",
    excerptKey: "blog.posts.recruitmentProcess.excerpt",
    date: "2025-01-15",
  },
  {
    id: "connecting-companies",
    titleKey: "blog.posts.connectingCompanies.title",
    excerptKey: "blog.posts.connectingCompanies.excerpt",
    date: "2025-01-15",
  },
  {
    id: "ai-agents-implementation",
    titleKey: "blog.posts.aiAgentsImplementation.title",
    excerptKey: "blog.posts.aiAgentsImplementation.excerpt",
    date: "2025-03-15",
  },
]

export default function Blog() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">{t("blog.title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{t(post.titleKey)}</h2>
                    <p className="text-gray-600 mb-4">{t(post.excerptKey)}</p>
                    <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

