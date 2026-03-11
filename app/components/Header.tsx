"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (path !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "/", label: t("nav.home"), isLink: true },
    {
      href: "/#core-services",
      label: t("nav.services"),
      onClick: (e: React.MouseEvent) => handleScrollTo(e, "core-services"),
    },
    {
      href: "/#process",
      label: t("nav.process"),
      onClick: (e: React.MouseEvent) => handleScrollTo(e, "process"),
    },
    {
      href: "/#industries",
      label: t("nav.industries"),
      onClick: (e: React.MouseEvent) => handleScrollTo(e, "industries"),
    },
    {
      href: "/#about-us",
      label: t("nav.about"),
      onClick: (e: React.MouseEvent) => handleScrollTo(e, "about-us"),
    },
    { href: "/careers", label: t("nav.careers"), isLink: true },
    { href: "/blog", label: t("nav.blog"), isLink: true },
  ];

  const handleContact = () => {
    window.open("https://outlook.office.com/bookwithme/user/5dc7b4ad41ef41dfa5e4f1053f4710b8@boticpartners.com/meetingtype/n6FtRriP-0afMrnBYzgN9w2?anonymous&ep=mlink", "_blank");
  };

  const renderNavItem = (item: any, isMobile = false) => {
    const baseClasses = "text-lg font-semibold tracking-wide transition-colors duration-200";

    const desktopColor =
      path === "/"
        ? isScrolled
          ? "text-gray-900 hover:text-boticPurple"
          : "text-white hover:text-gray-200"
        : "text-gray-900 hover:text-boticPurple";

    const mobileColor = "text-gray-900 hover:text-boticPurple";

    const className = isMobile ? `${baseClasses} ${mobileColor}` : `${baseClasses} ${desktopColor}`;

    if (item.isLink) {
      return (
        <Link href={item.href} className={className} onClick={() => setIsMenuOpen(false)}>
          {item.label}
        </Link>
      );
    }

    return (
      <a href={item.href} className={className} onClick={item.onClick as any}>
        {item.label}
      </a>
    );
  };

  return (
    <header className={`py-4 px-6 fixed w-full z-50 transition-all duration-300 ${isScrolled || path !== "/" ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/botic%20long-Uu1ik81vsOqA55IYRxP8xIzHs4xpzU.png" alt="Botic Partners" width={200} height={50} className="h-8 w-auto drop-shadow" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <React.Fragment key={item.href}>{renderNavItem(item)}</React.Fragment>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button className={`relative hidden md:inline-flex items-center justify-center flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white`} onClick={() => setLanguage(language === "en" ? "es" : "en")}>
            <span className="absolute inset-0 flex items-center justify-center w-full text-xs font-semibold">{language === "en" ? "ES" : "EN"}</span>
          </button>
          <Button
            // variant={`${isScrolled && path !== "/" ? "default" : "secondary"}`}
            variant="default"
            size="sm"
            className="hidden md:inline-flex text-white"
            onClick={handleContact}
          >
            {t("nav.contact")}
          </Button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className={`h-6 w-6 ${isScrolled || path !== "/" ? "text-gray-700" : "text-white"}`} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <React.Fragment key={item.href}>{renderNavItem(item, true)}</React.Fragment>
            ))}
          </nav>
          <div className="mt-4 flex justify-between items-center">
            <button className={`relative flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-white`} onClick={() => setLanguage(language === "en" ? "es" : "en")}>
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center w-full px-2 text-xs">{language === "en" ? "ES" : "EN"}</span>
            </button>
            <Button variant="default" size="sm" onClick={handleContact}>
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
