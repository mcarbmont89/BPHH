"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Share2, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { fetchPostById, fetchRelatedPosts } from "@/app/api/posts";
import RichTextComponent from "@/components/RichText";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { resolveMediaUrl } from "@/lib/resolveMediaUrl";
import VideoEmbed from "@/components/VideoEmbed";
import { subscribeToNewsletter } from "@/app/api/newsletter";

type Media = {
  url?: string;
  alt?: string;
  sizes?: {
    thumbnail?: { url: string };
    square?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
    xlarge?: { url: string };
    og?: { url: string };
  };
};

interface Post {
  id: string;
  title: string;
  excerpt: string;
  createdAt: string;
  image?: Media | null;
  tags: { tag: string; id?: string }[];
  content: SerializedEditorState & string;

  heroType?: "image" | "video";
  heroVideo?: {
    heading?: string;
    intro?: SerializedEditorState;
    provider: "youtube" | "vimeo" | "custom";
    url: string;
    title?: string;
    start?: number;
    allowFullScreen?: boolean;
    aspect?: "16:9" | "4:3" | "1:1";
  };
}

export default function BlogPost() {
  const { t, language } = useLanguage();
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[] | null>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  // ✅ Newsletter state (igual que en /blog)
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  useEffect(() => {
    fetchPostById(id).then((data) => setPost(data));
    fetchRelatedPosts(id).then((data) => setRelatedPosts(data));
  }, [id]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail) return;

    setNewsletterStatus("loading");
    setNewsletterMessage((t("blog.newsletter.subscribing") as string) || "Subscribing...");

    try {
      await subscribeToNewsletter(newsletterEmail);

      setNewsletterStatus("success");
      setNewsletterMessage((t("blog.newsletter.success") as string) || "Thanks! You’re subscribed.");
      setNewsletterEmail("");
    } catch (err: any) {
      const msg = String(err?.message || "").toLowerCase();

      const isAlready =
        msg.includes("already") ||
        msg.includes("exists") ||
        msg.includes("duplicate") ||
        msg.includes("unique") ||
        msg.includes("e11000") ||
        msg.includes("409");

      setNewsletterStatus("error");

      setNewsletterMessage(isAlready ? (t("blog.newsletter.alreadySubscribed") as string) || "You’re already subscribed with this email." : (t("blog.newsletter.error") as string) || "Something went wrong. Please try again.");
    }
  };

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{t("blog.postNotFound")}</h1>
            <p className="text-gray-600 mb-8">{t("blog.postNotFoundMessage")}</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("blog.backToBlog")}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
        break;
      case "email":
        window.open(`mailto:?subject=${title}&body=${url}`, "_blank");
        break;
    }

    setIsShareMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] w-full flex flex-col justify-end pt-32 pb-8 md:pb-12 overflow-hidden">
        {(() => {
          const rawHero = post?.image?.sizes?.xlarge?.url || post?.image?.sizes?.large?.url || post?.image?.sizes?.og?.url || post?.image?.url || (typeof (post as any)?.image === "string" ? (post as any).image : null);

          const hero = resolveMediaUrl(rawHero) || "/placeholder.svg";
          const alt = post?.image?.alt || post?.title || "Post cover";

          return <Image src={hero} alt={alt} fill className="object-cover -z-20" priority />;
        })()}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 md:to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("blog.backToBlog")}
            </Link>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>

            <div className="flex items-center text-white/80 text-sm gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(post.createdAt).toLocaleDateString(language === "es" ? "es-ES" : "en-US")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {post?.heroType === "video" && post?.heroVideo?.url ? (
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{post.heroVideo.heading || post.title}</h2>

              {post.heroVideo.intro ? (
                <div className="prose prose-lg mx-auto max-w-prose text-gray-700 text-center px-3 sm:px-4 break-words">
                  <RichTextComponent content={post.heroVideo.intro as any} />
                </div>
              ) : null}

              <div className="mt-6">
                <VideoEmbed provider={post.heroVideo.provider} url={post.heroVideo.url} title={post.heroVideo.title || post.title} start={post.heroVideo.start} allowFullScreen={post.heroVideo.allowFullScreen} aspect={post.heroVideo.aspect || "16:9"} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg md:prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-blue-700 prose-img:rounded-xl prose-img:shadow-md">
                <RichTextComponent content={post.content} />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700 font-medium mr-2">Tags:</span>
                  {post?.tags?.map((tag, index) => (
                    <span key={tag?.id ?? `${tag?.tag ?? "tag"}-${index}`} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                      {tag?.tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share buttons */}
              <div className="mt-6 flex items-center">
                <span className="text-gray-700 font-medium mr-3">{language === "es" ? "Compartir:" : "Share:"}</span>

                <div className="relative">
                  <Button variant="outline" size="sm" className="flex items-center bg-white text-gray-800 border-gray-300 hover:bg-gray-50" onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}>
                    <Share2 className="h-4 w-4 mr-2" />
                    {language === "es" ? "Compartir" : "Share"}
                  </Button>

                  {isShareMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-2 z-10 w-40">
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" onClick={() => sharePost("twitter")}>
                        Twitter
                      </button>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" onClick={() => sharePost("linkedin")}>
                        LinkedIn
                      </button>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" onClick={() => sharePost("facebook")}>
                        Facebook
                      </button>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm" onClick={() => sharePost("email")}>
                        Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related posts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">{language === "es" ? "Artículos Relacionados" : "Related Articles"}</h3>

                {relatedPosts?.length === 0 && <p className="text-gray-500 text-sm">{language === "es" ? "No hay artículos relacionados" : "No related articles"}</p>}

                {relatedPosts?.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="block mb-4 group">
                    <h4 className="font-medium text-gray-800 group-hover:text-primary transition-colors">{post.title}</h4>
                    <div className="flex items-center text-gray-500 text-xs mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.createdAt).toLocaleDateString(language === "es" ? "es-ES" : "en-US")}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter section (igual que en /blog) */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("blog.newsletter.title")}</h2>
            <p className="text-gray-600 mb-8">{t("blog.newsletter.description")}</p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" required value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder={t("blog.newsletter.placeholder")} className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50" />

              <Button className="whitespace-nowrap" type="submit" disabled={newsletterStatus === "loading"}>
                {t("blog.newsletter.subscribe")}
              </Button>
            </form>

            {newsletterMessage ? <p className={`mt-3 text-sm ${newsletterStatus === "success" ? "text-green-600" : newsletterStatus === "error" ? "text-red-600" : "text-gray-600"}`}>{newsletterMessage}</p> : null}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
