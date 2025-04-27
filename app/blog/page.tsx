"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Search, Calendar, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Update the blog page to use the translated content based on the selected language

// First, update the BlogPost interface to include translations
interface BlogPost {
  id: string
  titleKey: string
  excerptKey: string
  date: string
  category: string
  imageUrl: string
}

const blogPosts: BlogPost[] = [
  {
    id: "recruitment-process",
    titleKey: "blog.posts.recruitmentProcess.title",
    excerptKey: "blog.posts.recruitmentProcess.excerpt",
    date: "2025-01-15",
    category: "Recruitment",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2014_56_15-9G8Pl56e7GyYUUquCqdMyWiTfMpQxG.png",
  },
  {
    id: "connecting-companies",
    titleKey: "blog.posts.connectingCompanies.title",
    excerptKey: "blog.posts.connectingCompanies.excerpt",
    date: "2025-01-15",
    category: "Business Growth",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2012_27_18-ANHdHODVQFX0EsM4a7FyXlKx8cRoDb.png",
  },
  {
    id: "ai-agents-implementation",
    titleKey: "blog.posts.aiAgentsImplementation.title",
    excerptKey: "blog.posts.aiAgentsImplementation.excerpt",
    date: "2025-03-15",
    category: "AI Technology",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2015_32_15-39a4zY9RPLXSTRXLrM6PtC743trwfW.png",
  },
]

// Add more blog posts for a more complete look
const additionalPosts: BlogPost[] = [
  {
    id: "ai-recruitment-trends",
    titleKey: "blog.posts.aiRecruitmentTrends.title",
    excerptKey: "blog.posts.aiRecruitmentTrends.excerpt",
    date: "2025-02-10",
    category: "Industry Trends",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2015_52_25-l7QNyXnPwAO5G9cRMRtnpM8g5Z5ZtY.png",
  },
  {
    id: "talent-retention-strategies",
    titleKey: "blog.posts.talentRetentionStrategies.title",
    excerptKey: "blog.posts.talentRetentionStrategies.excerpt",
    date: "2025-02-22",
    category: "Talent Management",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2012_51_58-bstYWBgRPMl0ZqJWW149VZ71DkaVXi.png",
  },
  {
    id: "future-of-work",
    titleKey: "blog.posts.futureOfWork.title",
    excerptKey: "blog.posts.futureOfWork.excerpt",
    date: "2025-03-05",
    category: "Future Insights",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20abr%202025%2C%2015_52_08-Sq8nfJEM4qzpzIn4rkQ58amsR7bPzz.png",
  },
]

const allPosts = [...blogPosts, ...additionalPosts]

// Categories for filter
const categories = [
  "All",
  "Recruitment",
  "Business Growth",
  "AI Technology",
  "Industry Trends",
  "Talent Management",
  "Future Insights",
]

export default function Blog() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mounted, setMounted] = useState(false)

  // Use useEffect to ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update the filteredPosts mapping to use the correct translations
  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      t(post.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(post.excerptKey).toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Don't render anything until component is mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero section with background */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/30 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("blog.title")}
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("blog.subtitle")}
            </motion.p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: 0,
              }}
              animate={{
                x: [Math.random() * 100, Math.random() * 100 + 50],
                y: [Math.random() * 100, Math.random() * 100 + 50],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Search and filter section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button
                key="All"
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
                className="text-sm"
              >
                {t("blog.categories.all")}
              </Button>
              <Button
                key="Recruitment"
                variant={selectedCategory === "Recruitment" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Recruitment")}
                className="text-sm"
              >
                {t("blog.categories.recruitment")}
              </Button>
              <Button
                key="Business Growth"
                variant={selectedCategory === "Business Growth" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Business Growth")}
                className="text-sm"
              >
                {t("blog.categories.businessGrowth")}
              </Button>
              <Button
                key="AI Technology"
                variant={selectedCategory === "AI Technology" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("AI Technology")}
                className="text-sm"
              >
                {t("blog.categories.aiTechnology")}
              </Button>
              <Button
                key="Industry Trends"
                variant={selectedCategory === "Industry Trends" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Industry Trends")}
                className="text-sm"
              >
                {t("blog.categories.industryTrends")}
              </Button>
              <Button
                key="Talent Management"
                variant={selectedCategory === "Talent Management" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Talent Management")}
                className="text-sm"
              >
                {t("blog.categories.talentManagement")}
              </Button>
              <Button
                key="Future Insights"
                variant={selectedCategory === "Future Insights" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("Future Insights")}
                className="text-sm"
              >
                {t("blog.categories.futureInsights")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-primary/30 group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={t(post.titleKey)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString(language === "es" ? "es-ES" : "en-US")}</span>
                        </div>
                        <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {t(post.titleKey)}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{t(post.excerptKey)}</p>
                        <div className="flex items-center text-primary font-medium">
                          <span>{t("blog.readMore")}</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Search className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("blog.noResults")}</h3>
                <p className="text-gray-600 mb-6">{t("blog.tryDifferentSearch")}</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                >
                  {t("blog.clearFilters")}
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog.newsletter.title")}</h2>
            <p className="text-gray-600 mb-8">{t("blog.newsletter.description")}</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("blog.newsletter.placeholder")}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="whitespace-nowrap">{t("blog.newsletter.subscribe")}</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
