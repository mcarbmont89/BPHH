"use client"

import { Header } from "@/app/components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Footer from "./components/Footer"
import Process from "./components/Process"
import Chatbot from "./components/Chatbot"
import Industries from "./components/Industries"
import TalentMatchingHero from "./components/TalentMatchingHero"
import HeadhuntingSection from "./components/HeadhuntingSection"
import PartnershipsSection from "./components/PartnershipsSection"
import ContactForm from "./components/ContactForm"
import CoreServicesSection from "./components/CoreServicesSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <CoreServicesSection />
        <TalentMatchingHero />
        <section id="services">
          <Services />
          <HeadhuntingSection />
          <PartnershipsSection />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <Process />
        {/* <section id="about">
          <About />
        </section> */}
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
