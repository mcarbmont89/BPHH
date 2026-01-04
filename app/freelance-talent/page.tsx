"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import { EmailOptionsModal } from "../components/EmailOptionsModal";

// Import useLanguage at the top of the file
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Freelance talent benefits
const benefits = [
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Access specialized talent within days, not weeks or months",
  },
  {
    icon: Zap,
    title: "Specialized Expertise",
    description: "Gain immediate access to niche skills for specific projects and initiatives",
  },
  {
    icon: Users,
    title: "Flexible Scaling",
    description: "Easily scale your team up or down based on project demands and business cycles",
  },
  {
    icon: Sparkles,
    title: "Fresh Perspectives",
    description: "Bring in outside expertise to spark innovation and solve complex challenges",
  },
];

// Use cases
const useCases = [
  {
    title: "Project-Based Initiatives",
    description: "Bring in specialized talent for time-bound projects with specific deliverables",
    examples: ["Digital transformation", "System implementation", "Product launches", "Research initiatives"],
  },
  {
    title: "Technical Expertise Gaps",
    description: "Access specialized skills that aren't needed full-time but are critical for success",
    examples: ["Cloud migration", "Security audits", "UX/UI redesigns", "Performance optimization"],
  },
  {
    title: "Interim Leadership",
    description: "Bridge leadership gaps during transitions or organizational changes",
    examples: ["Interim CTO", "Acting Engineering Director", "Temporary Product Lead", "Project Management"],
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Botic Partners found us a specialized AI engineer in just 3 days when we urgently needed expertise for a critical client project. The quality was exceptional.",
    author: "Maria Rodriguez",
    position: "CTO, Digital Solutions Inc.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "The freelance cloud architect Botic connected us with transformed our infrastructure approach, delivering 40% cost savings and improved performance.",
    author: "James Chen",
    position: "VP Engineering, TechScale",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    quote: "When we needed interim leadership during our CTO transition, Botic found us the perfect temporary leader who kept our roadmap on track.",
    author: "Sarah Johnson",
    position: "CEO, InnovateTech",
    image: "/placeholder.svg?height=60&width=60",
  },
];

export default function FreelanceTalent() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");

  // Inside the component, add this line near the top:
  const { t } = useLanguage();

  const handleContactRequest = () => {
    setEmailSubject("Freelance Talent Inquiry");
    setIsEmailModalOpen(true);
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t("freelanceTalent.title")}</h1>
                  <p className="text-xl text-gray-700 mb-8">{t("freelanceTalent.subtitle")}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("freelanceTalent.talentMatching")}</span>
                    </div>
                    <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                      <CheckCircle className="h-5 w-5 text-boticPurple mr-2" />
                      <span className="text-gray-800">{t("freelanceTalent.specialists")}</span>
                    </div>
                  </div>
                  <Button onClick={handleContactRequest} className="bg-boticPurple hover:bg-boticPurple/90 text-white px-6 py-3">
                    {t("freelanceTalent.findTalent")}
                  </Button>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freelancers-iGI0kFjX5v8wMpdkcwv3ubUob7POqf.webp" alt="Freelance professionals collaborating" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-boticPurple/10 p-2 rounded-full">
                        <Clock className="h-6 w-6 text-boticPurple" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t("freelanceTalent.avgTimeToStart")}</p>
                        <p className="text-xl font-bold text-gray-900">3 days</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("freelanceTalent.whyChoose")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("freelanceTalent.flexibleExpertise")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="w-14 h-14 bg-boticPurple/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-boticPurple" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{t(`freelanceTalent.benefits.${index}.title`)}</h3>
                    <p className="text-gray-600">{t(`freelanceTalent.benefits.${index}.description`)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("freelanceTalent.specializedExpertise")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("freelanceTalent.networkIncludes")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technical Expertise */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-boticPurple">{t("freelanceTalent.technicalExpertise")}</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.softwareDevelopment")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.fullStackEngineers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.mobileDevelopers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.frontendSpecialists")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.backendArchitects")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.dataAI")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.dataScientists")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.mlEngineers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.dataEngineers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.aiSpecialists")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.infrastructure")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.devOpsEngineers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.cloudArchitects")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.sreSpecialists")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.securityExperts")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.productDesign")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.productManagers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.uxuiDesigners")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.productDesigners")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.researchSpecialists")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Leadership & Specialized Roles */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-boticPurple">{t("freelanceTalent.leadershipSpecializedRoles")}</h3>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.interimLeadership")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.interimCTOs")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.actingEngineeringManagers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.temporaryProductLeaders")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.projectManagement")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.technicalProjectManagers")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.agileCoaches")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.digitalTransformationLeads")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t("freelanceTalent.specializedConsultants")}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.technologyStrategyConsultants")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.digitalInnovationSpecialists")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                        <span>{t("freelanceTalent.technicalDueDiligenceExperts")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("freelanceTalent.whenToUse")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("freelanceTalent.strategicScenarios")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="w-14 h-14 bg-boticPurple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-boticPurple">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(`freelanceTalent.useCases.${index}.title`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`freelanceTalent.useCases.${index}.description`)}</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-700">{t("freelanceTalent.examples")}</h4>
                    <ul className="space-y-1">
                      {useCase.examples.map((example, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-boticPurple mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t("freelanceTalent.clientSuccessStories")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">{t("freelanceTalent.hearFromCompanies")}</p>
            </div>

            {/* Carousel */}
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

              {/* Track */}
              <div
                className="
          flex w-max gap-6
          animate-[testimonial-scroll_35s_linear_infinite]
          hover:[animation-play-state:paused]
        "
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={`${testimonial.author}-${index}`} className="w-[320px] sm:w-[360px] bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="mb-6">
                      <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} width={48} height={48} className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyframes */}
            <style jsx global>{`
              @keyframes testimonial-scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-boticPurple/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("freelanceTalent.needSpecializedTalent")}</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">{t("freelanceTalent.ourNetworkOfTalent")}</p>
            <Button onClick={handleContactRequest} className="bg-boticPurple hover:bg-boticPurple/90 text-white px-8 py-3 text-lg">
              {t("freelanceTalent.accessOurTalentNetwork")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <EmailOptionsModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} subject={emailSubject} />
    </div>
  );
}
