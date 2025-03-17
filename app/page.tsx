"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Solution from "./components/Solution"
import About from "./components/About"
import Footer from "./components/Footer"
import Process from "./components/Process"
import Stats from "./components/Stats"
import Chatbot from "./components/Chatbot"
import Industries from "./components/Industries"
import AIAgentsDashboard from "./components/AIAgentsDashboard"
import HeadhuntingSection from "./components/HeadhuntingSection"
import PartnershipsSection from "./components/PartnershipsSection"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <AIAgentsDashboard />
        <Stats />
        <section id="services">
          <Services />
          <HeadhuntingSection />
          <PartnershipsSection />
        </section>
        <section id="industries">
          <Industries />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="solution">
          <Solution />
        </section>
        <section id="about">
          <About />
        </section>
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

