"use client"
import { useLanguage } from "@/lib/i18n/LanguageContext"

const imageUrls = [
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1620712943543-2858200e94b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className="bg-gray-50 text-gray-800 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t("recruitment.title")}</h2>
        <div className="relative border-l-4 border-blue-500 pl-8">
          {steps.map((step, index) => (
            <div key={index} className="mb-16 relative">
              <div className="absolute -left-[18px] top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-white z-10 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div
                className="rounded-lg shadow-xl p-6 text-white bg-cover bg-center relative overflow-hidden min-h-[200px] flex flex-col justify-end"
                style={{ backgroundImage: `url(${imageUrls[index]})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 p-4">
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
