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
import { Users, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Users,
    titleKey: "coreServices.permanentStaff.title",
    descKey: "coreServices.permanentStaff.description",
    link: "/permanent-talent",
    external: false,
  },
  {
    icon: Zap,
    titleKey: "coreServices.freelanceTalent.title",
    descKey: "coreServices.freelanceTalent.description",
    link: "https://botic.lovable.app/",
    external: true,
  },
  {
    icon: TrendingUp,
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("coreServices.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>{t(service.titleKey)}</CardTitle>
                  </div>
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
