"use client"

// import ClientCarousel from "./components/ClientCarousel"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Solution from "./components/Solution"
import About from "./components/About"
import Footer from "./components/Footer"
import Process from "./components/Process"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Chatbot from "./components/Chatbot"
import Industries from "./components/Industries"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Industries />
        {/*<ClientCarousel />*/}
        {/*<VideoSection />*/}
        <Process />
        <Testimonials />
        <Solution />
        <About />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

