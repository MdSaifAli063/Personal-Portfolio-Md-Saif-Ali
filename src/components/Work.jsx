import React, { useState } from 'react';

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [activePopupItem, setActivePopupItem] = useState(null);

  const projects = [
    {
      id: 1,
      category: 'web',
      img: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-08-31%20235946.png?updatedAt=1756666098071',
      title: 'Web Design',
      detailsTitle: 'Medicine Reminder',
      description: 'The services we provide for design and healthcare reminders',
      created: '22 Apr 2025',
      technologies: 'html css js Nodejs',
      role: 'Frontend & Backend',
      viewLink: 'https://medicine-reminder-yp3m.onrender.com/',
      viewLabel: 'Live now',
    },
    {
      id: 2,
      category: 'app',
      img: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202026-04-01%20165942.png',
      title: 'App Design',
      detailsTitle: 'Mobile App Landing Design & Services',
      description: 'SafeGuard AI — Personal Safety Automation App',
      created: 'DEC 2025',
      technologies: 'React + TypeScript',
      role: 'Full Stack Developer',
      viewLink: 'https://github.com/MdSaifAli063/SafeGuard-AI',
      viewLabel: 'See here',
    },
    {
      id: 3,
      category: 'web',
      img: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-30%20005650.png',
      title: 'Web Design',
      detailsTitle: 'Eventronix — AI-Powered Event Management & Collaboration Platform',
      description: 'Website For Events',
      created: '10 Apr 2025',
      technologies: 'Flask • Python • MongoDB • HTML • CSS • JavaScript',
      role: 'Frontend',
      viewLink: 'https://event-platform-xp0r.onrender.com/',
      viewLabel: 'Live now',
    },
    {
      id: 4,
      category: 'web',
      img: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-01%20000412.png?updatedAt=1756667227570',
      title: 'Web Design',
      detailsTitle: 'Design for Technology & Services',
      description: 'Traveling Website',
      created: '28 Mar 2025',
      technologies: 'html css js',
      role: 'Frontend',
      viewLink: 'https://github.com/MdSaifAli063/AK-Tours-Travel-Modern-Responsive-Website',
      viewLabel: 'See here',
    },
    {
      id: 5,
      category: 'web',
      img: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-12-08%20095737.png',
      title: 'Web Design',
      detailsTitle: 'Website for School',
      description: 'Smart School Management System',
      created: 'JUL 2025 - SEP 2025',
      technologies: 'Python+Flask',
      role: 'Full Stack Developer',
      viewLink: 'https://github.com/MdSaifAli063/Smart-School-Management-System',
      viewLabel: 'See here',
    },
    {
      id: 6,
      category: 'app',
      img: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-01%20000219.png?updatedAt=1756666429096',
      title: 'App Design',
      detailsTitle: 'Mobile App Landing Design & App Maintain',
      description: 'Real Time Video Call App',
      created: '15 Aug 2025',
      technologies: 'html css js Nodejs Python',
      role: 'Frontend',
      viewLink: '#',
      viewLabel: 'coming soon',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="My Portfolio">
        Recent Works
      </h2>

      <div className="work-filters">
        <span
          className={`work-item ${filter === 'all' ? 'active-work' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </span>
        <span
          className={`work-item ${filter === 'web' ? 'active-work' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web
        </span>
        <span
          className={`work-item ${filter === 'app' ? 'active-work' : ''}`}
          onClick={() => setFilter('app')}
        >
          App
        </span>
      </div>

      <div className="work-container container grid">
        {filteredProjects.map((project) => (
          <div className="work-card mix" key={project.id}>
            <img src={project.img} alt={project.detailsTitle} className="work-img" />
            <h3 className="work-title">{project.title}</h3>
            <span
              className="work-button"
              onClick={() => setActivePopupItem(project)}
            >
              Demo <i className="uil uil-arrow-right work-button-icon"></i>
            </span>
          </div>
        ))}
      </div>

      {activePopupItem && (
        <div
          className="portfolio-popup open"
          onClick={() => setActivePopupItem(null)}
        >
          <div
            className="portfolio-popup-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="portfolio-popup-content grid">
              <span
                className="portfolio-popup-close"
                onClick={() => setActivePopupItem(null)}
              >
                <i className="uil uil-times"></i>
              </span>
              <div className="pp-thumbnail">
                <img
                  src={activePopupItem.img}
                  alt={activePopupItem.detailsTitle}
                  className="portfolio-popup-img"
                />
              </div>

              <div className="portfolio-popup-info">
                <div className="portfolio-popup-subtitle">
                  Featured - <span>{activePopupItem.title}</span>
                </div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{activePopupItem.detailsTitle}</h3>
                  <p className="details-description">
                    {activePopupItem.description}
                  </p>

                  <ul className="details-info">
                    <li>
                      Created - <span>{activePopupItem.created}</span>
                    </li>
                    <li>
                      Technologies - <span>{activePopupItem.technologies}</span>
                    </li>
                    <li>
                      Role - <span>{activePopupItem.role}</span>
                    </li>
                    <li>
                      View -{' '}
                      <span>
                        <a
                          href={activePopupItem.viewLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {activePopupItem.viewLabel}
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
