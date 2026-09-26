'use client';

import React, { useState } from 'react';

interface ProjectItem {
  id: number;
  category: string | string[];
  badge?: string;
  img: string;
  title: string;
  detailsTitle: string;
  description: string;
  created: string;
  technologies: string;
  role: string;
  viewLink: string;
  viewLabel: string;
  githubLink?: string;
}

export const Work: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack'>('all');
  const [activePopupItem, setActivePopupItem] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 1,
      category: 'ai',
      img: '/projects/hiremind.png',
      title: 'HireMind',
      detailsTitle: 'HireMind — AI-Powered Recruiting & Talent Matching',
      description: 'Built a full-stack AI talent matching platform leveraging LLMs and semantic embeddings to match 100+ candidates with jobs based on deep contextual understanding, achieving 85%+ matching accuracy with candidate ranking, skill-gap analysis, and personalized job recommendations.',
      created: 'May 2026 — Present',
      technologies: 'React.js, Node.js, AI/ML, LLMs, Semantic Embeddings, PostgreSQL',
      role: 'Full-Stack & AI Developer',
      viewLink: 'https://ai-powered-recruiting-talent-matchi.vercel.app/',
      viewLabel: 'HireMind Live Demo',
      githubLink: 'https://github.com/MdSaifAli063/HireMind',
    },
    {
      id: 2,
      category: 'ai',
      img: '/projects/aethermind.png',
      title: 'AetherMind',
      detailsTitle: 'AetherMind — Adaptive AI Conflict Resolution Agent',
      description: 'Engineered a 9-feature AI reasoning system (Conflict Resolver, Emotion Detection, Response Rewriter, Mediation Mode, What-If Simulation, Script Generator, Ethical Filter, Feedback Loop, Conflict History) using PyTorch & OpenEnv, reducing average conflict resolution time by 60%.',
      created: 'Apr 2026 — May 2026',
      technologies: 'PyTorch, OpenEnv, AI/ML, Python',
      role: 'AI Systems Engineer',
      viewLink: 'https://huggingface.co/spaces/mdsaifali063/AetherMind',
      viewLabel: 'AetherMind Hugging Face Space',
      githubLink: 'https://github.com/MdSaifAli063/AetherMind',
    },
    {
      id: 3,
      category: 'ai',
      img: '/projects/elected.png',
      title: 'ElectED',
      detailsTitle: 'ElectED — Election Process Education Assistant',
      description: 'Developed a full-stack AI education platform serving users with context-aware election process guidance using LLMs and semantic embeddings, achieving 90%+ query relevance score in internal testing.',
      created: 'May 2026 — Present',
      technologies: 'React.js, Node.js, AI/ML, LLMs, Machine Learning',
      role: 'Full-Stack & AI Developer',
      viewLink: 'https://election-process-education-assistan-three.vercel.app/',
      viewLabel: 'ElectED Live Demo (Vercel)',
      githubLink: 'https://github.com/MdSaifAli063/ElectED',
    },
    {
      id: 4,
      category: 'fullstack',
      img: '/projects/safeguard.png',
      title: 'SafeGuard AI',
      detailsTitle: 'SafeGuard AI — Personal Safety Automation App',
      description: 'Designed a real-time emergency automation app delivering SOS alerts in under 3 seconds without manual phone interaction; deployed on Vercel with 99.9% uptime, reducing response initiation time by 70%.',
      created: 'Dec 2025 — Jan 2026',
      technologies: 'React.js, TypeScript, REST APIs, Vercel',
      role: 'Full-Stack Developer',
      viewLink: 'https://safe-guard-ai-five.vercel.app/',
      viewLabel: 'SafeGuard AI Live Demo (Vercel)',
      githubLink: 'https://github.com/MdSaifAli063/SafeGuard-AI',
    },
    {
      id: 5,
      category: 'fullstack',
      img: '/projects/medicine-reminder.png',
      title: 'Medicine Reminder',
      detailsTitle: 'Medicine Reminder Application',
      description: 'Developed a health assistant app improving medication adherence for users; built automated scheduling and reminders with a Python backend and responsive frontend.',
      created: 'Oct 2024 — Dec 2024',
      technologies: 'HTML5, CSS3, JavaScript, Python, Flask',
      role: 'Full-Stack Developer',
      viewLink: 'https://medicine-reminder-yp3m.onrender.com/',
      viewLabel: 'Live App Demo',
    },
    {
      id: 6,
      category: 'fullstack',
      img: '/projects/eventronix.png',
      title: 'Eventronix',
      detailsTitle: 'Eventronix — AI-Powered Event Management & Collaboration Platform',
      description: 'Built an all-in-one event and hackathon ecosystem featuring automated AI roadmap generation, smart participant-team matching, and real-time community engagement with a robust Flask & MongoDB backend.',
      created: 'Jan 2025 — Feb 2025',
      technologies: 'Flask, Python, MongoDB, HTML5, CSS3, JavaScript',
      role: 'Full-Stack Developer',
      viewLink: 'https://event-platform-xp0r.onrender.com/',
      viewLabel: 'Eventronix Live Demo (Render)',
    },
    {
      id: 7,
      category: ['ai', 'fullstack'],
      badge: 'ISRO / Earth AI',
      img: '/projects/thermagrid.png',
      title: 'ThermaGrid',
      detailsTitle: 'ThermaGrid – AI-Powered Urban Heat Island Detection & Cooling Optimization',
      description: 'Built a high-precision geospatial earth observation surveillance platform for the ISRO Space Hackathon. Integrates Landsat-9 TIRS Band 10, Sentinel-2 MSI, and ISRO Bhuvan satellite feeds with PINN-based energy budget modeling, XAI-driven impervious surface heat attribution, and physics-informed cooling optimization.',
      created: 'ISRO Space Hackathon',
      technologies: 'React.js, TypeScript, Artificial Intelligence (AI), Machine Learning, TanStack Query, Data Visualization',
      role: 'Lead AI & Geospatial Developer',
      viewLink: 'https://thermagrid-isro.vercel.app/',
      viewLabel: 'ThermaGrid · Urban Heat Island AI',
    },
    {
      id: 8,
      category: ['ai', 'fullstack'],
      badge: 'Police Intelligence & AI',
      img: '/projects/crimeiq.png',
      title: 'CrimeIQ Karnataka',
      detailsTitle: 'CrimeIQ Karnataka — AI-Driven Crime Analytics & Visualization Platform',
      description: 'Architected an enterprise intelligence platform for Karnataka State Police (SCRB Intelligence Division). Transforms fragmented crime records into actionable intelligence by fusing geospatial GIS heatmaps, predictive AI crime models, interactive suspect network graphs (React Force Graph), and district-level precinct analytics.',
      created: 'SCRB Intelligence Platform',
      technologies: 'React 19, TypeScript, TanStack Start, TanStack Router, Tailwind CSS, Leaflet, React Leaflet, Recharts, React Force Graph, Framer Motion, Zoho Catalyst',
      role: 'Full-Stack & AI Systems Architect',
      viewLink: 'https://kspcrime-50043086176.development.catalystappsail.in/',
      viewLabel: 'CrimeIQ Karnataka — SCRB Intelligence Platform',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(filter)
            : project.category === filter
        );

  return (
    <section className="work section" id="work">
      <h2 className="section-title" data-heading="Portfolio">
        Featured Projects
      </h2>

      <div className="work-filters">
        <span
          className={`work-item ${filter === 'all' ? 'active-work' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({projects.length})
        </span>
        <span
          className={`work-item ${filter === 'ai' ? 'active-work' : ''}`}
          onClick={() => setFilter('ai')}
        >
          AI &amp; ML Agents
        </span>
        <span
          className={`work-item ${filter === 'fullstack' ? 'active-work' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Full-Stack Apps
        </span>
      </div>

      <div className="work-container container grid">
        {filteredProjects.map((project) => (
          <div className="work-card mix" key={project.id}>
            <div
              className="work-img-wrapper"
              onClick={() => setActivePopupItem(project)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.img} alt={project.detailsTitle} className="work-img" />
              <div className="work-category-badge">
                {project.badge ||
                  (project.category === 'ai' ||
                  (Array.isArray(project.category) && project.category[0] === 'ai')
                    ? 'AI / ML'
                    : 'Full-Stack')}
              </div>
            </div>
            <h3
              className="work-title"
              onClick={() => setActivePopupItem(project)}
              style={{ cursor: 'pointer' }}
            >
              {project.title}
            </h3>
            <p className="work-subtitle-tech">{project.technologies}</p>
            <span
              className="work-button"
              onClick={() => setActivePopupItem(project)}
            >
              Project Details <i className="uil uil-arrow-right work-button-icon"></i>
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
                  Project — <span>{activePopupItem.title}</span>
                </div>
                <div className="portfolio-popup-body">
                  <h3 className="details-title">{activePopupItem.detailsTitle}</h3>
                  <p className="details-description">
                    {activePopupItem.description}
                  </p>

                  <ul className="details-info">
                    <li>
                      Timeline — <span>{activePopupItem.created}</span>
                    </li>
                    <li>
                      Tech Stack — <span>{activePopupItem.technologies}</span>
                    </li>
                    <li>
                      Role — <span>{activePopupItem.role}</span>
                    </li>
                    <li>
                      {activePopupItem.githubLink ? 'Live Demo' : 'Link'} —{' '}
                      <span>
                        <a
                          href={activePopupItem.viewLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textTransform: 'none' }}
                        >
                          {activePopupItem.viewLabel} <i className="uil uil-external-link-alt"></i>
                        </a>
                      </span>
                    </li>
                    {activePopupItem.githubLink && (
                      <li>
                        Source Code —{' '}
                        <span>
                          <a
                            href={activePopupItem.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textTransform: 'none' }}
                          >
                            GitHub Repository <i className="uil uil-github-alt"></i>
                          </a>
                        </span>
                      </li>
                    )}
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
