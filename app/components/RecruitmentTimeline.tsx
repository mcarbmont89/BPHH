"use client"
import { useLanguage } from "@/lib/i18n/LanguageContext"

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

  if (!steps || !Array.isArray(steps)) {
    return null
  }

  return (
    <section className="bg-white text-gray-800 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 md:mb-24 text-gray-900">{t("recruitment.title")}</h2>
        <div className="space-y-20 md:space-y-24">
          {steps.map((step, index) => {
            const isTextStep = index % 2 === 0
            const isNumberLeft = index % 2 === 0

            const numberEl = (
              <div className="flex items-center justify-center h-full">
                <span className="text-8xl lg:text-9xl font-bold text-primary/20 select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>
            )

            const contentEl = isTextStep ? (
              <div className="flex flex-col justify-center h-full">
               
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ) : (
              <div
                className="relative rounded-lg shadow-xl text-white bg-cover bg-center min-h-[350px] lg:min-h-[400px] flex flex-col justify-end p-8 md:p-12 w-full"
                style={{ backgroundImage: `url(${imageUrls[index]})` }}
              >
                <div className="absolute inset-0 bg-slate-900/70 rounded-lg" />
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </div>
            )

            return (
              <div key={index} className="grid md:grid-cols-4 gap-8 md:gap-16 items-center">
                <div className={`${isNumberLeft ? "md:order-2" : "md:order-1"} md:col-span-3`}>{contentEl}</div>
                <div className={`${isNumberLeft ? "md:order-1" : "md:order-2"} md:col-span-1`}>{numberEl}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
