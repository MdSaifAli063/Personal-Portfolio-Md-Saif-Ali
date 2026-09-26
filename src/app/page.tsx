import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import About from '../components/About';
import Qualifications from '../components/Qualifications';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Work from '../components/Work';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <>
      {/* 🌌 Animated Galaxy Background (Orbs + Floating Tool Icons across all sections) */}
      <AnimatedBackground />

      {/* Main Sidebar Dock */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="main w-full md:w-[calc(100%-78px)] min-h-screen pb-20 md:pb-0 overflow-x-hidden relative z-10">
        <Home />
        <About />
        <Qualifications />
        <Skills />
        <Achievements />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
