"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Brain, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { submitTalentForm } from "@/app/api/talent";
import { SuccessStoriesSection } from "../components/SuccessStoriesSection";
import { ProcessSection } from "../components/ProcessSection";

export default function PermanentTalent() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"idle" | "success" | "error">("idle");
  const [mailtoLink, setMailtoLink] = useState<string>("");
  const handleMailClick = () => {
    window.open("https://outlook.office.com/bookwithme/user/5dc7b4ad41ef41dfa5e4f1053f4710b8%40boticpartners.com/meetingtype/n6FtRriP-0afMrnBYzgN9w2?anonymous&ismsaljsauthenabled=true", "_blank");
  };

  const methodologySteps = useMemo(
    () => [
      {
        icon: Target,
        title: t("permanentTalent.methodologySteps.strategicAnalysis.title"),
        description: t("permanentTalent.methodologySteps.strategicAnalysis.description"),
      },
      {
        icon: Brain,
        title: t("permanentTalent.methodologySteps.aiSearch.title"),
        description: t("permanentTalent.methodologySteps.aiSearch.description"),
      },
      {
        icon: Users,
        title: t("permanentTalent.methodologySteps.humanExpertise.title"),
        description: t("permanentTalent.methodologySteps.humanExpertise.description"),
      },
      {
        icon: CheckCircle,
        title: t("permanentTalent.methodologySteps.qualification.title"),
        description: t("permanentTalent.methodologySteps.qualification.description"),
      },
      {
        icon: Clock,
        title: t("permanentTalent.methodologySteps.acceleratedPlacement.title"),
        description: t("permanentTalent.methodologySteps.acceleratedPlacement.description"),
      },
    ],
    [t],
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitResult("idle");

    try {
      const saved = await submitTalentForm({
        name: form.name,
        email: form.email,
        message: form.message,
        source: "permanent-talent",
      });

      if (!saved.ok) {
        console.error("Talent form save failed:", saved);
        setSubmitResult("error");
        return;
      }

      setSubmitResult("success");
      setForm({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-boticPurple/20 to-boticPurple/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight whitespace-pre-line">{t("permanentTalent.title")}</h1>

                  <p className="text-xl text-gray-700 mb-8">{t("permanentTalent.subtitle")}</p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("permanentTalent.retentionRate")}</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("permanentTalent.timeToHire")}</span>
                    </div>
                  </div>
                  <Button onClick={handleMailClick} className="w-auto bg-boticPurple hover:bg-boticPurple/90 text-white px-8 py-3 text-lg">
                    {t("contact.form.submit")}
                  </Button>
                </motion.div>
              </div>

              <div className="md:w-1/2">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/permanent-h7I3Vv9zLwcd0AzsD0lOqy2yCvMmsk.webp" alt="Executive team meeting" fill className="object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("permanentTalent.methodologyTitle")}</h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-boticPurple/20 hidden md:block"></div>

              <div className="space-y-12">
                {methodologySteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div key={index} initial={{ opacity: 0, x: isEven ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                      <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                          <div className="relative">
                            <div className="w-16 h-16 bg-boticPurple rounded-full flex items-center justify-center z-10 relative">
                              <Icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="absolute top-0 left-0 w-16 h-16 bg-boticPurple/20 rounded-full animate-ping"></div>
                          </div>
                        </div>

                        <div className={`md:w-1/2 ${isEven ? "md:pr-12 text-right" : "md:pl-12"}`}>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <ProcessSection />
        <SuccessStoriesSection prefix="permanentTalent" filter="clients" showHeader={true} />

        <SuccessStoriesSection prefix="permanentTalent" filter="candidates" showHeader={false} />

        <section id="permanent-talent-contact" className="py-16 bg-boticPurple/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 whitespace-pre-line">{t("permanentTalent.ctaTitle")}</h2> <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t("permanentTalent.ctaSubtitle")}</p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.name.label")}</label>
                  <input value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder={t("contact.form.name.placeholder")} className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-boticPurple/30" required />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.email.label")}</label>
                  <input type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} placeholder={t("contact.form.email.placeholder")} className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-boticPurple/30" required />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.message.label")}</label>
                  <textarea value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} placeholder={t("contact.form.message.placeholder")} className="w-full min-h-[140px] rounded-lg border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-boticPurple/30" required />
                </div>

                <Button onClick={handleMailClick} className="mt-4 w-full sm:w-auto bg-boticPurple hover:bg-boticPurple/90 text-white px-6 py-3 text-base md:text-lg">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
