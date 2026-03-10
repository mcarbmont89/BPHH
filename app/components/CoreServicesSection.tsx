"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Search, Brain, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    stats: { placements: 120, speed: "4x", retention: 93 },
    tags: ["Executive Search", "Tech Talent", "Sales", "C-Level", "Mid-Senior"],
    link: "/permanent-talent",
    external: false,
    titleKey: "coreServices.permanentStaff.title",
    descKey: "coreServices.permanentStaff.description",
  },
  {
    icon: Brain,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
    stats: { placements: 80, speed: "3x", retention: 88 },
    tags: ["n8n", "Make", "Zapier", "AI Agents", "CRM Automation"],
    link: "https://botic.lovable.app/",
    external: true,
    titleKey: "coreServices.freelanceTalent.title",
    descKey: "coreServices.freelanceTalent.description",
  },
  {
    icon: TrendingUp,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
    stats: { placements: 40, speed: "2x", retention: 91 },
    tags: ["M&A", "Market Research", "Due Diligence", "Expansion", "Strategy"],
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.borderColor}`}
              >
                <CardContent className={`${service.bgColor} p-6 flex flex-col items-center text-center h-full`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full mb-5 bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{t(service.descKey)}</p>

                  {/* Stats */}
                  <div className="w-full grid grid-cols-3 gap-1 border-y border-gray-200/60 py-4 mb-4">
                    <div>
                      <div className={`text-lg font-bold ${service.iconColor}`}>{service.stats.placements}+</div>
                      <div className="text-[10px] uppercase text-gray-500">Placements</div>
                    </div>
                    <div>
                      <div className={`text-lg font-bold ${service.iconColor}`}>{service.stats.speed}</div>
                      <div className="text-[10px] uppercase text-gray-500">Faster</div>
                    </div>
                    <div>
                      <div className={`text-lg font-bold ${service.iconColor}`}>{service.stats.retention}%</div>
                      <div className="text-[10px] uppercase text-gray-500">Retention</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="w-full mb-6">
                    <p className={`text-xs font-semibold uppercase mb-2 ${service.iconColor}`}>Key Technologies</p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 py-1 text-[11px] rounded-md ${service.bgColor} ${service.iconColor} border ${service.borderColor} font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    href={service.link}
                    target={service.external ? "_blank" : undefined}
                    rel={service.external ? "noopener noreferrer" : undefined}
                    className="w-full"
                  >
                    <button
                      className={`w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${service.color} shadow-lg hover:scale-[1.02] transition-transform`}
                    >
                      {t("coreServices.learnMore")}
                    </button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
