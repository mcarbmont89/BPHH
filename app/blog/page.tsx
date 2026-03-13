"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { fetchPosts, fetchFeaturedVideoPost } from "@/app/api/posts";
import { resolveMediaUrl } from "@/lib/resolveMediaUrl";
import { subscribeToNewsletter } from "@/app/api/newsletter";

export default function Blog() {
  const { t, language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  const [posts, setPosts] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any>(null);

  //  Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  useEffect(() => {
    Promise.all([fetchPosts(), fetchFeaturedVideoPost()]).then(([all, feat]) => {
      setPosts(all?.docs || []);
      setFeatured(feat || null);
      setMounted(true);
    });
  }, []);

  const filteredPosts = posts?.filter((post) => {
    return (
      searchQuery === "" ||
      post.title?.toLowerCase?.().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase?.().includes(searchQuery.toLowerCase())
    );
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail) return;

    setNewsletterStatus("loading");
    setNewsletterMessage(
      (t("blog.newsletter.subscribing") as string) || "Subscribing..."
    );

    try {
      await subscribeToNewsletter(newsletterEmail);

      setNewsletterStatus("success");
      setNewsletterMessage(
        (t("blog.newsletter.success") as string) || "Thanks! You’re subscribed."
      );
      setNewsletterEmail("");
    } catch (err: any) {
      setNewsletterStatus("error");
      setNewsletterMessage(
        err?.message ||
          ((t("blog.newsletter.error") as string) || "Something went wrong. Please try again.")
      );
    }
  };

  // Avoid hydration issues
  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero section */}
      <section className="relative bg-[#1A1A2E] py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl py-4 mt-8 md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("blog.title")}
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-primary/50 mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("blog.subtitle")}
            </motion.p>
          </div>
        </div>

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              initial={{ x: Math.random() * 100, y: Math.random() * 100, opacity: 0 }}
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

      {/* Search */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <main className="flex-grow py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter((p: any) => !featured || String(p.id) !== String(featured.id))
                .map((post: any, index: number) => (
                  <motion.div
                    key={post.id ?? `post-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.id}`}>
                      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-primary/30 group bg-white text-gray-900">
                        <div className="relative h-48 overflow-hidden">
                          {(() => {
                            const raw =
                              post?.image?.sizes?.xlarge?.url ||
                              post?.image?.sizes?.large?.url ||
                              post?.image?.sizes?.medium?.url ||
                              post?.image?.url ||
                              (typeof post?.image === "string" ? post.image : null);

                            const img = resolveMediaUrl(raw) || "/placeholder.svg";
                            const alt = post?.image?.alt || post?.title || "Post image";

                            return (
                              <Image
                                src={img}
                                alt={alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={90}
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            );
                          })()}
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>
                              {new Date(post.createdAt).toLocaleDateString(
                                language === "es" ? "es-ES" : "en-US"
                              )}
                            </span>
                          </div>

                          <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

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
                <Button onClick={() => setSearchQuery("")}>{t("blog.clearFilters")}</Button>
              </motion.div>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog.newsletter.title")}</h2>
            <p className="text-gray-600 mb-8">{t("blog.newsletter.description")}</p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t("blog.newsletter.placeholder")}
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="whitespace-nowrap" type="submit" disabled={newsletterStatus === "loading"}>
                {t("blog.newsletter.subscribe")}
              </Button>
            </form>

            {newsletterMessage ? (
              <p
                className={`mt-3 text-sm ${
                  newsletterStatus === "success"
                    ? "text-green-600"
                    : newsletterStatus === "error"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {newsletterMessage}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
