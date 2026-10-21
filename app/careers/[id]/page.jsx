"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { fetchCareerById } from "@/app/api/careers";
import { isCareerClosed, getLogoUrl } from "../utils";
import RichTextComponent from "@/components/RichText";
import Loading from "./loading";
import { ApplicationModal } from "@/app/components/application-modal";
import { ThankYouModal } from "@/app/components/thank-you-modal";

const completeUrl = (url) => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};

export default function JobDetailsPage() {
  const { t, language: ctxLang } = useLanguage();
  const params = useParams();
  const jobId = params.id;
  const [career, setCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [candidateName, setCandidateName] = useState("");

  useEffect(() => {
    let alive = true;
    const lang = (typeof window !== "undefined" && window.localStorage?.getItem("lang")) || ctxLang || "es";
    fetchCareerById(jobId, lang)
      .then((data) => {
        if (alive) {
          setCareer(data);
          setIsLoading(false);
        }
      })
      .catch(() => setIsLoading(false));
    return () => {
      alive = false;
    };
  }, [jobId, ctxLang]);

  const handleSuccessfulSubmission = (name) => {
    setCandidateName(name);
    setShowThankYouModal(true);
  };

  const lang = (typeof window !== "undefined" && window.localStorage?.getItem("lang")) || ctxLang || "es";
  const locale = lang === "en" ? "en-US" : "es-ES";
  const salaryLabel = lang === "en" ? "Salary" : "Salario";
  const locationLabel = lang === "en" ? "Location" : "Ubicación";

  if (isLoading) {
    return <Loading />;
  }

  if (!career) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold mb-4">{t("careers.jobNotFound.title")}</h1>
          <p className="text-gray-600 mb-8">{t("careers.jobNotFound.description")}</p>
          <Link href="/careers">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("careers.jobNotFound.backButton")}
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full bg-[#1A1A2E] h-16 z-50"></div>
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers" className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("careers.backToCareers")}
          </Link>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex gap-6 items-center mb-4">
              {!career["Ocultar empresa"] && (
                <img
                  src={getLogoUrl(career)}
                  alt={career.company || "Company logo"}
                  className="w-16 h-16"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-primary">{career.position}</h1>
                {isCareerClosed(career) && (
                  <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold mt-2 px-3 py-1 rounded-full">
                    {t("careers.closedPositionBadge")}
                  </span>
                )}

                {career.company_url && !career["Ocultar empresa"] ? (
                  <Link href={completeUrl(career.company_url)} target="_blank" rel="noopener noreferrer">
                    <p className="text-gray-500 mt-1 hover:underline">{career.company}</p>
                  </Link>
                ) : (
                  <p className="text-gray-500 mt-1">{career["Ocultar empresa"] ? "Confidencial" : career.company}</p>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <h2 className="text-xl font-semibold mb-4">{t("careers.jobDescription")}</h2>
            <article className="prose prose-lg max-w-none">
              <RichTextComponent content={career.description} />
            </article>

            {career.requirements && career.requirements.length > 0 && (
              <div className="border-t border-gray-200 my-6">
                <h2 className="text-xl font-semibold my-4">Requisitos</h2>
                <ul className="flex flex-col gap-2 list-disc ml-6 text-gray-700">
                  {career.requirements.map(({ requirement }, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            )}

            {career.benefits && career.benefits.length > 0 && (
              <div className="border-t border-gray-200 my-6">
                <h2 className="text-xl font-semibold my-4">Beneficios</h2>
                <ul className="flex flex-col gap-2 list-disc ml-6 text-gray-700">
                  {career.benefits.map(({ benefit }, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-gray-200 my-6"></div>

            {career.location && (
              <div className="flex gap-4 items-center mb-2">
                <h2 className="font-semibold">{locationLabel}</h2>
                <p className="text-gray-700">{career.location}</p>
              </div>
            )}
            {career.salary && (
              <div className="flex gap-4 items-center mb-2">
                <h2 className="font-semibold">{salaryLabel}</h2>
                <p className="text-gray-700">
                  {career["Ocultar salario"]
                    ? "Confidencial"
                    : (() => {
                        const amount =
                          typeof career.salary === "number"
                            ? career.salary
                            : Number(
                                String(career.salary)
                                  .replace(/[^\d.-]/g, "")
                                  .replace(",", ".")
                              );

                        const localeForNumber = locale;

                        const numberOnly = new Intl.NumberFormat(localeForNumber, {
                          style: "decimal",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(amount);

                        return `${numberOnly} €`;
                      })()}
                </p>
              </div>
            )}

            <div className="border-t border-gray-200 my-6"></div>

            <div className="mt-8 text-center">
              {isCareerClosed(career) ? (
                <div className="flex justify-center">
                  <Button disabled variant="secondary">
                    {t("careers.closedPositionBadge")}
                  </Button>
                </div>
              ) : (
                <div className="flex justify-center space-x-4">
                  {career.linkedIn && career.linkedIn !== "" && (
                    <Link href={career.linkedIn} target="_blank" rel="noopener noreferrer">
                      <Button disabled={isLoading} variant="outline">
                        Ver en LinkedIn
                      </Button>
                    </Link>
                  )}
                  <Button onClick={() => setIsModalOpen(true)} disabled={isLoading}>
                    {t("careers.readyToApply")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ApplicationModal open={isModalOpen} career={career} onOpenChange={setIsModalOpen} onSuccess={handleSuccessfulSubmission} />
      <ThankYouModal open={showThankYouModal} onOpenChange={setShowThankYouModal} candidateName={candidateName} />
    </div>
  );
}
