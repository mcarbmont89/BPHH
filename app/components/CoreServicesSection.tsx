"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Link from "next/link";

const services = [
  {
    titleKey: "coreServices.permanentStaff.title",
    descKey: "coreServices.permanentStaff.description",
    link: "/permanent-talent",
    external: false,
  },
  {
    titleKey: "coreServices.freelanceTalent.title",
    descKey: "coreServices.freelanceTalent.description",
    link: "https://botic.lovable.app/",
    external: true,
  },
  {
    titleKey: "coreServices.maServices.title",
    descKey: "coreServices.maServices.description",
    link: "https://acquisition.boticpartners.com/",
    external: false,
  },
];

export default function CoreServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="core-services" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card key={index} className="flex flex-col bg-white text-gray-900 border-gray-200">
                <CardHeader>
                  <CardTitle>{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{t(service.descKey)}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link
                    href={service.link}
                    target={service.external ? "_blank" : undefined}
                    rel={service.external ? "noopener noreferrer" : undefined}
                    passHref
                  >
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("coreServices.learnMore")}
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
