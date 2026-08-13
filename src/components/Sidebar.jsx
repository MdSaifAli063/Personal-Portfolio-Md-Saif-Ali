import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [toast, setToast] = useState({ visible: false, message: '' });

  const navLinks = [
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
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message) => {
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
      <div
        className="nav-toggle"
        id="nav-toggle"
        onClick={() => setShowSidebar(true)}
      >
        <i className="uil uil-bars"></i>
      </div>

      <aside
        className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}
        id="sidebar"
      >
        <nav className="nav">
          <div className="nav-logo">
            <a href="#" className="nav-logo-text">
              S
            </a>
          </div>

          <div className="nav-menu">
            <div className="menu">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`nav-link ${
                        activeNav === link.id ? 'active-link' : ''
                      }`}
                      onClick={() => {
                        setActiveNav(link.id);
                        setShowSidebar(false);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="nav-close"
            id="nav-close"
            onClick={() => setShowSidebar(false)}
          >
            <i className="uil uil-times"></i>
          </div>
          <div className="btn-share" onClick={shareProfile}>
            <i className="uil uil-share-alt social-share"></i>
          </div>
        </nav>
      </aside>

      {toast.visible && (
        <div className={`share-toast ${toast.visible ? 'visible' : ''}`}>
          {toast.message}
        </div>
      )}
    </>
  );
};

export default Sidebar;
