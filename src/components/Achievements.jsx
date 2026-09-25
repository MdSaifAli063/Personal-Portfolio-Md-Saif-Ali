import React, { useState } from 'react';

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const achievementsList = [
    {
      title: 'Meta PyTorch OpenEnv Hackathon × Scaler',
      subtitle: 'Round 1 Qualified out of 1000+ teams across India for strong technical proficiency and problem-solving',
      icon: 'uil-trophy',
      tag: 'Hackathon'
    },
    {
      title: 'Bharatiya Antariksh Hackathon 2026 | ISRO',
      subtitle: 'Recognized by ISRO & Hack2skill for innovation and space challenge problem-solving idea submission',
      icon: 'uil-rocket',
      tag: 'National Hackathon'
    },
    {
      title: 'Google Cloud Gen AI Academy APAC 2026',
      subtitle: 'Completed Cohort 2 intensive hands-on real-world AI systems engineering on Google Cloud',
      icon: 'uil-cloud-computing',
      tag: 'Google Cloud'
    },
    {
      title: 'PromptWars Virtual | Google for Developers',
      subtitle: 'Verified Generative AI solution submission during PromptWars Build with AI challenge',
      icon: 'uil-robot',
      tag: 'AI Competition'
    },
    {
      title: 'BLR AI Hack 2026 | HackBriven',
      subtitle: 'Recognized for innovation, performance, and dedicated hackathon execution in Bangalore',
      icon: 'uil-trophy',
      tag: 'Hackathon'
    },
    {
      title: 'METANOVA 2025 | HackWithIndia',
      subtitle: 'Placed among the top 1,000 teams out of 3,000 participating teams across India',
      icon: 'uil-award',
      tag: 'Hackathon'
    },
    {
      title: 'METANOVA 2025 — RRCE Chapter',
      subtitle: 'Awarded for active participation, dedication, and commendable performance in Devnovate HackWithIndia',
      icon: 'uil-medal',
      tag: 'Hackathon'
    },
    {
      title: 'IDE Bootcamp | AICTE & Ministry of Education',
      subtitle: 'Innovation, Design & Entrepreneurship Bootcamp Certificate at JNNCE Shivamogga',
      icon: 'uil-lightbulb-alt',
      tag: 'Bootcamp'
    },
    {
      title: 'Generative AI Workshop | NxtWave',
      subtitle: 'Hands-on Generative AI Model project and architecture training under industry AI leadership',
      icon: 'uil-brain',
      tag: 'AI Workshop'
    },
    {
      title: 'Research Publication (Completed)',
      subtitle: 'Performance Analysis of Linear Congruential Generator (LCG) in Python and Java',
      icon: 'uil-file-contract-dollar',
      tag: 'Research'
    },
    {
      title: 'Research Publication (Completed)',
      subtitle: 'Smart School Management System using Python, Django, and Flask — Published in International Journal of Engineering Development and Research (IJEDR)',
      icon: 'uil-file-alt',
      tag: 'Research'
    },
    {
      title: 'Google Gemini API Competition',
      subtitle: 'Certified Participant in LLM & AI Agents Building',
      icon: 'uil-brackets-curly',
      tag: 'AI Competition'
    }
  ];

  const certificationsList = [
    {
      title: 'Google Cloud Gen AI Academy APAC 2026',
      issuer: 'Google Cloud × Hack2skill',
      src: '/certificates/google-cloud-genai-academy.png',
      icon: 'uil-cloud-computing'
    },
    {
      title: 'PromptWars Virtual — Build with AI',
      issuer: 'Google for Developers × Hack2skill',
      src: '/certificates/google-promptwars.png',
      icon: 'uil-robot'
    },
    {
      title: 'Meta PyTorch OpenEnv Hackathon (Round 1 Qualified)',
      issuer: 'Meta × Scaler School of Technology',
      src: '/certificates/meta-pytorch-scaler.png',
      icon: 'uil-trophy'
    },
    {
      title: 'Bharatiya Antariksh Hackathon 2026',
      issuer: 'ISRO (Indian Space Research Organisation)',
      src: '/certificates/isro-hackathon.png',
      icon: 'uil-rocket'
    },
    {
      title: 'BLR AI Hack 2026',
      issuer: 'ARMORIQ × HackBriven',
      src: '/certificates/blr-ai-hack.png',
      icon: 'uil-trophy'
    },
    {
      title: 'Innovation, Design & Entrepreneurship (IDE) Bootcamp',
      issuer: 'Ministry of Education & AICTE',
      src: '/certificates/aicte-ide-bootcamp.jpg',
      icon: 'uil-lightbulb-alt'
    },
    {
      title: 'METANOVA 2025 (Top 1,000 Teams)',
      issuer: 'HackWithIndia',
      src: '/certificates/metanova-top-1000.jpg',
      icon: 'uil-award'
    },
    {
      title: 'METANOVA 2025 — RRCE Chapter',
      issuer: 'HackWithIndia RRCE',
      src: '/certificates/metanova-rrce.png',
      icon: 'uil-medal'
    },
    {
      title: 'Build Your Own Generative AI Model',
      issuer: 'NxtWave',
      src: '/certificates/nxtwave-genai.png',
      icon: 'uil-brain'
    },
    {
      title: 'Journey to Cloud: Envisioning Your Solution',
      issuer: 'IBM',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-11%20143551.png?updatedAt=1759605741856',
      icon: 'uil-cloud-computing'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Infosys Springboard',
      src: 'https://ik.imagekit.io/77nsbwefl/1-16cf568a-787d-43d4-9208-f42dc903c2eb.pdf.png?updatedAt=1759605743898',
      icon: 'uil-layer-group'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-11%20172612.png?updatedAt=1759605740096',
      icon: 'uil-aws'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-12%20113604.png?updatedAt=1759605741489',
      icon: 'uil-microsoft'
    },
    {
      title: 'Oracle Cloud Infrastructure Foundations',
      issuer: 'Oracle',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-17%20171618.png?updatedAt=1759605744105',
      icon: 'uil-database'
    },
    {
      title: 'Python Bootcamp',
      issuer: 'LetsUpgrade × NSDC',
      src: '/certificates/python-bootcamp.png',
      icon: 'uil-code-branch'
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'JPMorgan Chase & Co. × Forage',
      src: '/certificates/jpmorgan-swe-simulation.png',
      icon: 'uil-building'
    }
  ];

  return (
    <section className="Achievements section" id="Achievements">
      <div className="container">
        <h2 className="section-title" data-heading="Recognitions">
          Achievements &amp; Certifications
        </h2>

        {/* 1. All Certificates Grid (Top, right after section title) */}
        <div className="certificates-grid" style={{ marginTop: '2.5rem', marginBottom: '3.5rem' }}>
          {certificationsList.map((cert, index) => (
            <div className="certificate-item" key={index}>
              <div className="cert-img-wrapper" onClick={() => setSelectedImg(cert.src)}>
                <img
                  src={cert.src}
                  alt={cert.title}
                />
                <div className="cert-overlay">
                  <i className="uil uil-search-plus"></i> View Certificate
                </div>
              </div>
              <p className="cert-item-title">{cert.title}</p>
              <span className="cert-item-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>

        {/* 2. Middle Header Card: "Achievements" (In Between Both Grids) */}
        <div className="achievements-container" style={{ marginTop: '2rem' }}>
          <div className="achievements-content">
            <div className="achievements-info">
              <div className="achievements-card">
                <i className="uil uil-trophy achievements-card-icon" aria-hidden="true"></i>
                <h3 className="achievements-card-title">Achievements</h3>
                <span className="achievements-card-data">Hackathons, Research &amp; Competitions</span>

                <button
                  className="toggle-dropdown"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {dropdownOpen ? 'Hide Achievements ▲' : 'Show Achievements ▼'}
                </button>
              </div>
            </div>

            {/* 3. Achievement Cards Grid (Bottom) */}
            <div
              id="certificatesDropdown"
              className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}
            >
              <div className="achievements-highlights-grid grid" style={{ marginTop: '2rem' }}>
                {achievementsList.map((item, index) => (
                  <div className="achievement-highlight-card" key={index}>
                    <div className="achievement-icon-box">
                      <i className={`uil ${item.icon} achievement-icon`}></i>
                    </div>
                    <div className="achievement-card-body">
                      <span className="achievement-tag">{item.tag}</span>
                      <h3 className="achievement-title">{item.title}</h3>
                      <p className="achievement-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImg && (
        <div
          id="certificateModal"
          className="modal visible"
          onClick={() => setSelectedImg(null)}
        >
          <span className="close" onClick={() => setSelectedImg(null)}>
            &times;
          </span>
          <img
            id="certificateImg"
            src={selectedImg}
            alt="Certificate Preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Achievements;
