import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title" data-heading="My Intro">
        About me
      </h2>

      <div className="about-container container grid">
        <img
          src="https://ik.imagekit.io/77nsbwefl/saifpic1.jpg?updatedAt=1759382897896"
          alt="Md Saif Ali"
          className="about-img"
        />

        <div className="about-data">
          <h3 className="about-heading">Hi, I'm Md Saif Ali, based in India</h3>
          <p className="about-description">
            A passionate full-stack developer from Bangalore, India building
            seamless web experiences from backend to frontend. Highly motivated
            and detail-oriented Computer Science Engineering student with
            experience in Software development. Proficient in programming
            languages such as Python, JavaScript, C and Web Development. Strong
            understanding of data structures, algorithms, and software design
            patterns. Eager to leverage my skills and knowledge to contribute to
            innovative projects and collaborate with like-minded professionals.
          </p>

          <div className="about-info">
            <div className="about-box">
              <i className="uil uil-award about-icon"></i>
              <h3 className="about-title">Experience</h3>
              <span className="about-subtitle">1 Year</span>
            </div>

            <div className="about-box">
              <i className="uil uil-suitcase-alt about-icon"></i>
              <h3 className="about-title">Completed</h3>
              <span className="about-subtitle">10 + Projects</span>
            </div>

            <div className="about-box">
              <i className="uil uil-headphones-alt about-icon"></i>
              <h3 className="about-title">Support</h3>
              <span className="about-subtitle">Online 24/7</span>
            </div>
          </div>

          <a href="#contact" className="button">
            <i className="uil uil-navigator button-icon"></i>Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
