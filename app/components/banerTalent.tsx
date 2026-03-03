"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export default function TalentDemoBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-boticPurple/10 to-boticPurple/5 dark:from-boticPurple/20 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-10 text-center">

          {/* Title */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{t("talentDemoBanner.title")}</h2>

          {/* Description */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("talentDemoBanner.description")}</p>

          {/* CTA */}
          <div className="mt-8">
            <Button asChild className="bg-boticPurple text-white hover:bg-boticPurple/90 px-8 py-6 text-lg font-semibold shadow-lg shadow-boticPurple/30 transition-all duration-200">
              <Link href="https://talent.boticpartners.com/">{t("talentDemoBanner.cta")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
