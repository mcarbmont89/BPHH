"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";
import { Users, Zap, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    link: "/permanent-talent",
    external: false,
    titleKey: "coreServices.permanentStaff.title",
    descKey: "coreServices.permanentStaff.description",
    icon: Users,
    number: "01",
  },
  {
    link: "https://botic.lovable.app/",
    external: true,
    titleKey: "coreServices.freelanceTalent.title",
    descKey: "coreServices.freelanceTalent.description",
    icon: Zap,
    number: "02",
  },
  {
    link: "https://acquisition.boticpartners.com/",
    external: false,
    titleKey: "coreServices.maServices.title",
    descKey: "coreServices.maServices.description",
    icon: TrendingUp,
    number: "03",
  },
];

export default function CoreServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="core-services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#3730A3] p-7 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden relative"
              >
                {/* decorative circle */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

                {/* top row: icon + number */}
                <div className="flex items-center justify-between mb-5 relative">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-black text-white/10 select-none">{service.number}</span>
                </div>

                {/* divider */}
                <div className="w-10 h-0.5 bg-white/30 mb-4 rounded-full" />

                <h3 className="text-xl font-bold text-white mb-3 leading-snug relative">
                  {t(service.titleKey)}
                </h3>

                <p className="text-white/75 text-base leading-relaxed flex-grow mb-7 relative">
                  {t(service.descKey)}
                </p>

                <Link
                  href={service.link}
                  target={service.external ? "_blank" : undefined}
                  rel={service.external ? "noopener noreferrer" : undefined}
                  className="relative"
                >
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/25 transition-all duration-200 group-hover:border-white/40">
                    {t("coreServices.learnMore")}
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
