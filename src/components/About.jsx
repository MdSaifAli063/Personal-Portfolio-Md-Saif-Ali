import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title" data-heading="About">
        The Profile
      </h2>

      <div className="about-container container grid">
        {/* Left Column - Clean Portrait */}
        <div className="about-visual">
          <div className="about-img-card">
            <div className="about-portrait-frame">
              <img
                src="/linkdin.png"
                alt="Md Saif Ali"
                className="about-img"
              />
            </div>
            <div className="about-glow-aura"></div>
          </div>
        </div>

        {/* Right Data Column */}
        <div className="about-data">
          <h3 className="about-heading">
            Hi, I'm Md Saif Ali, based in India
          </h3>

          <p className="about-description">
            A passionate full-stack &amp; AI developer from Bangalore, India building seamless web experiences from backend to frontend. Currently pursuing <strong>Bachelor of Engineering in Computer Science</strong> at Ghousia College of Engineering (VTU) with an <strong>8.11 / 10.0 CGPA</strong>. Skilled in <strong>React, Next.js, Node.js, Python, Flask, Django, PostgreSQL, and LLM Integrations</strong>. Eager to contribute to innovative projects and collaborate with like-minded professionals.
          </p>

          {/* Stat Cards */}
          <div className="about-info">
            <div className="about-box">
              <div className="about-icon-wrapper">
                <i className="uil uil-award about-icon"></i>
              </div>
              <h3 className="about-title">Experience</h3>
              <span className="about-subtitle">5+ Months Internship</span>
            </div>

            <div className="about-box">
              <div className="about-icon-wrapper">
                <i className="uil uil-briefcase-alt about-icon"></i>
              </div>
              <h3 className="about-title">Completed</h3>
              <span className="about-subtitle">10+ Projects</span>
            </div>

            <div className="about-box">
              <div className="about-icon-wrapper">
                <i className="uil uil-graduation-cap about-icon"></i>
              </div>
              <h3 className="about-title">Academics</h3>
              <span className="about-subtitle">8.11 / 10 CGPA</span>
            </div>
          </div>

          {/* Action Button - Prominent Contact Button in Front */}
          <div className="about-buttons">
            <a href="#contact" className="btn-primary">
              <i className="uil uil-navigator"></i> Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
