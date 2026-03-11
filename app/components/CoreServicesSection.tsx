"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

const services = [
  {
    link: "/permanent-talent",
    external: false,
    titleKey: "coreServices.permanentStaff.title",
    descKey: "coreServices.permanentStaff.description",
  },
  {
    link: "https://botic.lovable.app/",
    external: true,
    titleKey: "coreServices.freelanceTalent.title",
    descKey: "coreServices.freelanceTalent.description",
  },
  {
    link: "https://acquisition.boticpartners.com/",
    external: false,
    titleKey: "coreServices.maServices.title",
    descKey: "coreServices.maServices.description",
  },
];

export default function CoreServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="core-services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-boticPurple p-6 flex flex-col shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {t(service.titleKey)}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed flex-grow mb-6">
                {t(service.descKey)}
              </p>

              <Link
                href={service.link}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
              >
                <button className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/40 transition-colors">
                  {t("coreServices.learnMore")}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
