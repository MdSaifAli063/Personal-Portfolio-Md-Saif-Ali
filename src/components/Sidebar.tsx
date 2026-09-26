'use client';

import React, { useState, useEffect } from 'react';

interface NavLink {
  id: string;
  label: string;
}

interface ToastState {
  visible: boolean;
  message: string;
}

export const Sidebar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>('home');
  const [toast, setToast] = useState<ToastState>({ visible: false, message: '' });

  const navLinks: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'Achievements', label: 'Achievements' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2500);
  };

  const shareProfile = () => {
    const shareData = {
      title: 'Check out my profile!',
      text: 'Here’s my profile you might like:',
      url: 'https://personal-portfolio-md-saif-ali.vercel.app/',
    };

    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => showToast('Profile shared successfully'))
        .catch((error) => {
          console.error('Error sharing:', error);
          showToast('Sharing failed');
        });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareData.url)
        .then(() => showToast('Link copied to clipboard!'))
        .catch(() => showToast('Copy failed. Please copy manually.'));
    } else {
      alert('Sharing not supported. Copy this link:\n' + shareData.url);
    }
  };

  return (
    <>
      <aside className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
        <nav className="nav">
          <div className="nav-logo">
            <a href="#home" className="nav-logo-link" aria-label="Md Saif Ali — Home">
              <img
                src="/saifalogo.png"
                alt="Saif Ali Logo"
                className="nav-logo-img"
                width={44}
                height={44}
              />
            </a>
          </div>

          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`nav-link ${activeNav === link.id ? 'active-link' : ''}`}
                      onClick={() => {
                        setActiveNav(link.id);
                        setShowSidebar(false);
                      }}
                      title={link.label}
                    >
                      <span className="nav-name">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="btn-share" onClick={shareProfile} title="Share Profile">
            <span className="social-share">
              <i className="uil uil-share-alt"></i>
            </span>
          </div>

          <div className="nav-close" onClick={() => setShowSidebar(false)}>
            <i className="uil uil-times"></i>
          </div>
        </nav>
      </aside>

      <div className="nav-toggle" onClick={() => setShowSidebar(!showSidebar)}>
        <i className="uil uil-bars"></i>
      </div>

      <div className={`share-toast ${toast.visible ? 'visible' : ''}`}>
        {toast.message}
      </div>
    </>
  );
};

export default Sidebar;
