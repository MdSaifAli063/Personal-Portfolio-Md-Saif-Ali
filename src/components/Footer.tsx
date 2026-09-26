import React from 'react';
import SignatureAnimation from './SignatureAnimation';

interface FooterNavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const Footer: React.FC = () => {
  const navLinks: FooterNavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials: SocialLink[] = [
    { icon: 'uil-facebook-f', href: 'https://www.facebook.com/share/1GQogSxoWe/', label: 'Facebook' },
    { icon: 'uil-instagram', href: 'https://www.instagram.com/md_saif_ali_063', label: 'Instagram' },
    { icon: 'uil-twitter', href: 'https://www.x.com/@Md_Saif_Ali_063', label: 'Twitter/X' },
    { icon: 'uil-linkedin', href: 'https://www.linkedin.com/in/mdsaifali063', label: 'LinkedIn' },
    { icon: 'uil-github', href: 'https://github.com/MdSaifAli063', label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      {/* Glowing top border */}
      <div className="footer-glow-border"></div>

      <div className="footer-inner">
        {/* Top Row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <img
              src="/saifalogo.png"
              alt="Saif Ali Logo"
              className="footer-logo-img"
              width={52}
              height={52}
            />
            <div className="footer-brand-text">
              <h2 className="footer-title">Md Saif Ali</h2>
              <span className="footer-subtitle">Full-Stack &amp; AI Developer</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label={s.label}
              >
                <i className={`uil ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Row */}
        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            margin: 0,
            padding: 0,
          }}
        >
          <p
            className="footer-copy"
            style={{
              margin: 0,
              padding: 0,
              fontSize: '0.85rem',
              color: '#94a3b8',
              lineHeight: 1.5,
              textAlign: 'left',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            © {new Date().getFullYear()} Md Saif Ali. All rights reserved.
          </p>
          <p
            className="footer-made"
            style={{
              margin: 0,
              padding: 0,
              fontSize: '0.85rem',
              color: '#94a3b8',
              lineHeight: 1.5,
              textAlign: 'right',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            Made with <span className="footer-heart">❤</span> by Md Saif Ali
          </p>
        </div>
      </div>

      {/* Grand Kinetic Signature Animation */}
      <SignatureAnimation />
    </footer>
  );
};

export default Footer;
