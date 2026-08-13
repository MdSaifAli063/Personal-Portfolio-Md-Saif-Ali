import React, { useState, useEffect } from 'react';

const Home = () => {
  const texts = [
    "Full-Stack & AI Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typeSpeed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      typeSpeed = 500;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="home" id="home">
      <div className="home-container container grid">
        <div className="tools-background">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="tool-icon"
            alt="HTML5"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className="tool-icon"
            alt="CSS3"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="tool-icon"
            alt="JS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="tool-icon"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            className="tool-icon"
            alt="Node.js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            className="tool-icon"
            alt="Python"
          />
        </div>

        <div className="home-social">
          <span className="home-social-follow">Follow Me</span>
          <div className="home-social-links">
            <a
              href="https://www.facebook.com/share/1GQogSxoWe/"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/md_saif_ali_063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://www.x.com/@Md_Saif_Ali_063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mdsaifali063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-linkedin"></i>
            </a>
            <a
              href="https://github.com/MdSaifAli063"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>

        <img
          src="https://ik.imagekit.io/77nsbwefl/saifpic2.png"
          alt="Md Saif Ali"
          className="home-img"
        />

        <div className="home-data">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Md Saif Ali</span>
          </h1>
          <h3 className="home-subtitle">
            <span id="typewriter">{texts[textIndex].substring(0, charIndex)}</span>
            <span className="cursor">|</span>
          </h3>
          <p className="home-description">
            🧑‍💻 A dedicated Full-Stack & AI Developer building end-to-end web
            applications with clean UI, scalable backend systems, and intelligent
            AI-driven solutions ⚡
          </p>

          <div className="home-buttons">
            <button
              className="btn-primary"
              onClick={() => window.open('https://github.com/MdSaifAli063', '_blank')}
            >
              <i className="uil uil-github-alt"></i>
              Visit My GitHub
            </button>

            <a
              href="https://ik.imagekit.io/77nsbwefl/Md%20Saif%20Ali-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <i className="uil uil-download-alt"></i>
              Download CV
            </a>
          </div>
        </div>

        <div className="my-info">
          <div className="info-item">
            <i className="uil uil-whatsapp info-icon"></i>
            <div>
              <h3 className="info-title">Whatsapp</h3>
              <span className="info-subtitle">903-122-8966</span>
            </div>
          </div>

          <div className="info-item">
            <i className="uil uil-twitter info-icon"></i>
            <div>
              <h3 className="info-title">Twitter</h3>
              <span className="info-subtitle">@Md_Saif_Ali_063</span>
            </div>
          </div>

          <div className="info-item">
            <i className="uil uil-envelope-edit info-icon"></i>
            <div>
              <h3 className="info-title">Email</h3>
              <span className="info-subtitle">mdsaifali6303@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
