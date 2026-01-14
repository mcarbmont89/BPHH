"use client"

import { Header } from "@/app/components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot"
import Industries from "./components/Industries"
import TalentMatchingHero from "./components/TalentMatchingHero"
import HeadhuntingSection from "./components/HeadhuntingSection"
import PartnershipsSection from "./components/PartnershipsSection"
import ContactForm from "./components/ContactForm"
import CoreServicesSection from "./components/CoreServicesSection"
import RecruitmentTimeline from "./components/RecruitmentTimeline"
import AboutUs from "./components/AboutUs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-[64px] bg-[#1A1A2E]">
        <Hero />
        <section id="services">
          <CoreServicesSection />
          <HeadhuntingSection />        
          <Services />
        </section>
        <section id="process">
          <RecruitmentTimeline />
        </section>
          <section id="industries">
          <Industries />
        </section>
        <TalentMatchingHero />
        <PartnershipsSection />
        <AboutUs/>
        <ContactForm />
      </main>                                                                                                        
      <Footer />
      <Chatbot />
    </div>
  )
}
