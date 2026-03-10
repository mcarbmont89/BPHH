"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

export default function CoreServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("coreServices.permanentStaff.title"),
      description: t("coreServices.permanentStaff.description"),
      link: "/permanent-talent",
      external: false,
    },
    {
      title: t("coreServices.freelanceTalent.title"),
      description: t("coreServices.freelanceTalent.description"),
      link: "https://botic.lovable.app/",
      external: true,
    },
    {
      title: t("coreServices.maServices.title"),
      description: t("coreServices.maServices.description"),
      link: "https://acquisition.boticpartners.com/",
      external: false,
    },
  ];

  return (
    <section id="core-services" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-blue-50 border-blue-100 hover:bg-blue-100/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                <div className="flex-1">
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>

              <div className="p-6 pt-0">
                {service.link ? (
                  <Link href={service.link} target={service.external ? "_blank" : undefined} rel={service.external ? "noopener noreferrer" : undefined}>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-boticPurple text-boticPurple font-semibold 
                      hover:bg-boticPurple hover:text-white transition-colors duration-200"
                    >
                      {t("coreServices.learnMore")}
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full bg-transparent" disabled>
                    {t("coreServices.learnMore")}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
