"use client";

import { motion } from "framer-motion";

export default function PartnershipsVideo() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white w-full hidden md:block">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-4/5 mx-auto overflow-hidden rounded-2xl shadow-lg"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-contain bg-gray-50"
            src="https://jyliu6i7fajxf7tx.public.blob.vercel-storage.com/Grabaci%C3%B3n%20de%20pantalla%20desde%2012-03-26%2015%3A08%3A07.webm"
          />
        </motion.div>
    </section>
  );
}
