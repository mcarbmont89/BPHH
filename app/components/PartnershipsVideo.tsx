"use client";

import { motion } from "framer-motion";
import PartnershipsSection from "./PartnershipsSection";

export default function PartnershipsVideo() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white w-full hidden md:block">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-3/5 mx-auto overflow-hidden rounded-2xl shadow-lg"
        >
          <PartnershipsSection />
        </motion.div>
    </section>
  );
}
