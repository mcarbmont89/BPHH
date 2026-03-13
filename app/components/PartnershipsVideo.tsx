"use client";

import { motion } from "framer-motion";

export default function PartnershipsVideo() {
  return (
    <section className="pb-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-md aspect-video md:aspect-auto md:h-[450px]"
        >
          {/* Mobile: Static image */}
          <img
            alt="Partnership network diagram"
            className="w-full h-full object-cover md:hidden"
            src="https://jyliu6i7fajxf7tx.public.blob.vercel-storage.com/partnerships-mobile-2ddb6e4f.jpg"
          />

          {/* Desktop: Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hidden md:block"
            style={{ objectPosition: "center center", transform: "scale(0.95)", transformOrigin: "center center" }}
            src="https://jyliu6i7fajxf7tx.public.blob.vercel-storage.com/Grabaci%C3%B3n%20de%20pantalla%20desde%2012-03-26%2015%3A08%3A07.webm"
          />
        </motion.div>
      </div>
    </section>
  );
}
