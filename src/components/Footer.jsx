import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-container container grid">
          <div>
            <h1 className="footer-title">Md Saif Ali</h1>
            <span className="footer-subtitle">Full-Stack Developer</span>
          </div>

          <ul className="footer-links">
            <li>
              <a href="#services" className="footer-links">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="footer-links">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-links">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="uil uil-instagram"></i>
            </a>

            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <i className="uil uil-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-linkedin"></i>
            </a>

            <a
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer"
              className="home-social-link"
            >
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>

        <p className="footer-copy">&#165; Made in India</p>
      </div>
    </footer>
  );
};

export default Footer;
