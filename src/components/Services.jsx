import React, { useState } from 'react';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: (
        <>
          Full-Stack Web <br /> Development
        </>
      ),
      modalTitle: 'Full-Stack Web Development',
      icon: 'uil uil-layer-group',
      description:
        'Building scalable, high-performance web applications from intuitive frontends to robust server-side architectures.',
      list: [
        'React.js & Next.js Modern Single Page & SSR Applications',
        'TypeScript & ES6+ Scalable Codebases',
        'Tailwind CSS Responsive & Glassmorphic UI Engineering',
        'State Management & Performance Optimization',
        'End-to-End Web App Deployment & Cloud Hosting (Vercel, GCP)',
      ],
    },
    {
      id: 2,
      title: (
        <>
          Mobile App <br /> Development
        </>
      ),
      modalTitle: 'Mobile & Cross-Platform App Development',
      icon: 'uil uil-mobile-android',
      description:
        'Building responsive, performant mobile and cross-platform applications with seamless native experiences, offline caching, and real-time cloud backends.',
      list: [
        'React Native & Cross-Platform Mobile Applications',
        'Android App Development & Modern Responsive Mobile UIs',
        'Offline-First Architecture & Local State Caching',
        'Cloud Database & Push Notifications (Firebase, Supabase)',
        'RESTful API Integration, End-to-End Testing & Deployment',
      ],
    },
    {
      id: 3,
      title: (
        <>
          RESTful API &amp; <br /> Backend Engineering
        </>
      ),
      modalTitle: 'RESTful API & Backend Engineering',
      icon: 'uil uil-server-network',
      description:
        'Designing secure, high-throughput REST APIs and database architectures using Node.js, Python, Flask, Django, and PostgreSQL.',
      list: [
        'Node.js, Express.js & Python (Flask / Django / FastAPI) APIs',
        'PostgreSQL & MongoDB Database Indexing & Query Optimization',
        'Authentication, Authorization & Middleware Development',
        'Microservices & Third-Party Service Integrations',
        'Automated Testing & Postman API Documentation',
      ],
    },
    {
      id: 4,
      title: (
        <>
          AI &amp; LLM Solutions <br /> &amp; AI Agents
        </>
      ),
      modalTitle: 'AI & LLM Solutions & AI Agents',
      icon: 'uil uil-robot',
      description:
        'Engineering intelligent AI workflows, LLM integrations, PyTorch reasoning agents, and semantic search pipelines.',
      list: [
        'LLM API Integration (Google Gemini API, OpenAI)',
        'Semantic Embeddings & Contextual RAG Search Systems',
        'PyTorch & OpenEnv Multi-Step AI Reasoning Workflows',
        'Emotion Detection & Response Rewriter AI Agents',
        'AI Talent Matching & Context-Aware Education Platforms',
      ],
    },
  ];

  const activeService = servicesData.find((s) => s.id === activeModal);

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">
        What I Offer
      </h2>

      <div className="services-container container grid">
        {servicesData.map((service) => (
          <div className="services-content" key={service.id}>
            <div>
              <div className="services-icon-box">
                <i className={`${service.icon} services-icon`}></i>
              </div>
              <h3 className="services-title">{service.title}</h3>
            </div>

            <span
              className="services-button"
              onClick={() => setActiveModal(service.id)}
            >
              View More <i className="uil uil-arrow-right services-button-icon"></i>
            </span>
          </div>
        ))}
      </div>

      {/* Global Service Details Modal (rendered at section root to avoid transform clipping) */}
      {activeService && (
        <div
          className="services-modal active-modal"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="services-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="services-modal-close"
              onClick={() => setActiveModal(null)}
            >
              <i className="uil uil-times"></i>
            </div>

            <div className="services-modal-header">
              <div className="services-icon-box modal-icon-box">
                <i className={`${activeService.icon} services-icon`}></i>
              </div>
              <h3 className="services-modal-title">{activeService.modalTitle}</h3>
            </div>

            <p className="services-modal-description">{activeService.description}</p>

            <ul className="services-modal-services">
              {activeService.list.map((item, idx) => (
                <li className="services-modal-service" key={idx}>
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
