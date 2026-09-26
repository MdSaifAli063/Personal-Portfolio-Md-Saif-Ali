'use client';

import React, { useState, useEffect } from 'react';

export const Home: React.FC = () => {
  const texts: string[] = [
    "Full-Stack & AI Developer",
    "Software Engineer Intern",
    "React & Python Architect",
    "LLMs & AI Agents Builder"
  ];
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typeSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2200;
      const timeout = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      typeSpeed = 400;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section className="home" id="home">
      <div className="home-container container">
        {/* Top Social Header Bar aligned with Sidebar Logo */}
        <div className="home-social">
          <span className="home-social-follow">Follow Me</span>
          <span className="home-social-dash">—</span>
          <div className="home-social-links">
            <a
              href="https://www.facebook.com/share/1GQogSxoWe/"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              title="Facebook"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/md_saif_ali_063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              title="Instagram"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://www.x.com/@Md_Saif_Ali_063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              title="Twitter (X)"
            >
              <i className="uil uil-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mdsaifali063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              title="LinkedIn"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/MdSaifAli063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
              title="GitHub"
            >
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>

        {/* 2-Column Responsive Hero Grid */}
        <div className="home-hero-grid">
          {/* Left Column: Status Badge, Title, Bio, Buttons, Contact Cards */}
          <div className="home-data">
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for Opportunities &amp; Freelance
            </div>

            <h1 className="home-title">
              Hi, I'm <span className="highlight">Md Saif Ali</span>
            </h1>

            <h3 className="home-subtitle">
              <span id="typewriter">{texts[textIndex].substring(0, charIndex)}</span>
              <span className="cursor-blink">|</span>
            </h3>

            <p className="home-description">
              Results-driven <strong>Full-Stack &amp; AI Developer</strong> with 5+ months of software engineering internship experience building scalable web applications and AI-powered platforms. Skilled in React.js, Next.js, Node.js, Python, Flask, Django, PostgreSQL, and LLM Integrations.
            </p>

            <div className="home-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  const workSec = document.getElementById('work');
                  if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
                  else window.open('https://github.com/MdSaifAli063', '_blank');
                }}
              >
                <i className="uil uil-folder-open"></i>
                VIEW PROJECTS
              </button>

              <a
                href="/Md Saif Ali-Resume.pdf"
                download="Md Saif Ali-Resume.pdf"
                className="btn-secondary"
              >
                <i className="uil uil-download-alt"></i>
                DOWNLOAD RESUME
              </a>
            </div>

            {/* Clean Contact Info Cards matching backup.css */}
            <div className="my-info">
              <a
                href="https://wa.me/919031228966"
                target="_blank"
                rel="noreferrer"
                className="info-item"
              >
                <i className="uil uil-whatsapp info-icon"></i>
                <div>
                  <h4 className="info-title">Whatsapp</h4>
                  <span className="info-subtitle">+91 9031228966</span>
                </div>
              </a>

              <a
                href="https://www.x.com/@Md_Saif_Ali_063"
                target="_blank"
                rel="noreferrer"
                className="info-item"
              >
                <i className="uil uil-twitter info-icon"></i>
                <div>
                  <h4 className="info-title">Twitter</h4>
                  <span className="info-subtitle">@Md_Saif_Ali_063</span>
                </div>
              </a>

              <a
                href="mailto:mdsaifali6303@gmail.com"
                className="info-item"
              >
                <i className="uil uil-envelope-edit info-icon"></i>
                <div>
                  <h4 className="info-title">Email</h4>
                  <span className="info-subtitle">mdsaifali6303@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="home-visual">
            <div className="home-img-card">
              <div className="portrait-frame">
                <img src="/portfolioimg.png" alt="Md Saif Ali" className="home-img" />
              </div>
              <div className="card-glow-aura"></div>

              {/* Floating Badges */}
              <div className="floating-badge badge-1">
                <div className="badge-icon">
                  <i className="uil uil-robot"></i>
                </div>
                <div>
                  <span className="badge-title">Full-Stack &amp; AI</span>
                  <span className="badge-sub">React • Python • Node</span>
                </div>
              </div>

              <div className="floating-badge badge-2">
                <div className="badge-icon">
                  <i className="uil uil-award"></i>
                </div>
                <div>
                  <span className="badge-title">5+ Projects</span>
                  <span className="badge-sub">AI &amp; Web Apps</span>
                </div>
              </div>

              <div className="floating-badge badge-3">
                <div className="badge-icon">
                  <i className="uil uil-map-marker"></i>
                </div>
                <div>
                  <span className="badge-title">Bangalore</span>
                  <span className="badge-sub">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
