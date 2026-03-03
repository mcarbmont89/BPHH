"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion } from "framer-motion";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-boticPurple/10 flex justify-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-4 md:space-y-6 max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t("processSection.title")}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed italic">
            &ldquo;{t("processSection.description")}&rdquo;
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-boticPurple to-boticPurple/80 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-white ring-offset-4 ring-offset-boticPurple/10 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
              <img 
                src="/images/borja.png" 
                alt="Borja" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-boticPurple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-boticPurple/30 rounded-full blur-xl opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}