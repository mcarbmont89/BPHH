"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Briefcase, Users, GitMerge } from "lucide-react";
import Link from "next/link";

export default function CoreServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t("coreServices.permanentStaff.title"),
      description: t("coreServices.permanentStaff.description"),
      link: "/permanent-talent",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t("coreServices.freelanceTalent.title"),
      description: t("coreServices.freelanceTalent.description"),
      /*       link: "/freelance-talent",
       */
    },
    {
      icon: <GitMerge className="h-8 w-8 text-primary" />,
      title: t("coreServices.maServices.title"),
      description: t("coreServices.maServices.description"),
      link: "/ma-services",
    },
  ];

  return (
    <section id="core-services" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("coreServices.title")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                <div className="p-2 bg-primary/10 rounded-full">{service.icon}</div>
                <div className="flex-1">
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                {service.link ? (
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full bg-transparent">
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
