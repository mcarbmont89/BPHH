"use client"
import { useLanguage } from "@/lib/i18n/LanguageContext"
import { motion } from "framer-motion"

const imageUrls = [
  "/images/recruitment/client-brief.png",
  "/images/recruitment/search-shortlist.png",
  "/images/recruitment/interview-decision.png",
  "/images/recruitment/offer-onboarding.png",
]

export default function RecruitmentTimeline() {
  const { t } = useLanguage()

  const steps = t("recruitment.steps") as {
    title: string
    description: string
  }[]

  if (!steps || !Array.isArray(steps)) return null

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white text-gray-800 py-20 md:py-32 overflow-hidden">

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-boticPurple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-boticPurple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t("recruitment.title")}
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-boticPurple to-blue-500" />
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Vertical connecting line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-boticPurple/20 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isImageStep = index % 2 !== 0
              const slideFrom = isImageStep ? 60 : -60

              const numberEl = (
                <div className="flex items-center justify-center h-full">
                  <span
                    className="text-8xl lg:text-[9rem] font-extrabold select-none leading-none"
                    style={{
                      background: "linear-gradient(135deg, #4251f0 0%, #818cf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      opacity: 0.18,
                    }}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              )

              const contentEl = isImageStep ? (
                /* Image card */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group min-h-[340px] lg:min-h-[400px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${imageUrls[index]})` }}
                  />
                  {/* gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  {/* subtle purple glow on hover */}
                  <div className="absolute inset-0 bg-boticPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 min-h-[340px] lg:min-h-[400px]">
                    {/* accent bar */}
                    <div className="w-10 h-1 rounded-full bg-gradient-to-r from-boticPurple to-blue-400 mb-4" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ) : (
                /* Text card */
                <div className="flex flex-col justify-center h-full py-8 md:py-0">
                  <div className="relative pl-6 border-l-4 border-boticPurple/30 hover:border-boticPurple transition-colors duration-300">
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-boticPurple/60" />
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: slideFrom }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="grid md:grid-cols-4 gap-8 md:gap-16 items-center"
                >
                  <div className={`${!isImageStep ? "md:order-2" : "md:order-1"} md:col-span-3`}>
                    {contentEl}
                  </div>
                  <div className={`${!isImageStep ? "md:order-1" : "md:order-2"} md:col-span-1`}>
                    {numberEl}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
