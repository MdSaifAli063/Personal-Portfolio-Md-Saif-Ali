import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Work from './components/Work';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      <Sidebar />
      <main className="main">
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
    </div>
  );
}

export default App;
