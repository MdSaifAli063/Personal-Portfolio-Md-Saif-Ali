import React, { useState } from 'react';

const SparkIcon = () => (
  <svg
    className="bullet-icon-spark"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main 4-pointed star outline */}
    <path d="M12 3C12 7.5 7.5 12 3 12C7.5 12 12 16.5 12 21C12 16.5 16.5 12 21 12C16.5 12 12 7.5 12 3Z" />
    {/* Plus sign at top-right */}
    <path d="M19 3v4M17 5h4" strokeWidth="1.5" />
    {/* Small circle dot at bottom-left */}
    <circle cx="5.5" cy="18.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const Qualifications = () => {
  const [filter, setFilter] = useState('all');

  const timelineData = [
    {
      id: 1,
      type: 'work',
      date: 'MAR 2026 — MAY 2026',
      title: 'Software Engineer Intern',
      company: 'Syscrust Technology Consultancy Services • Remote / Bangalore',
      bullets: [
        'Built and deployed 3+ full-stack web applications using React.js, Node.js, and PostgreSQL, reducing manual processing time by 40%.',
        'Enhanced 2 enterprise software modules, improving application scalability and cutting response time by 30% through optimized API design.',
        'Collaborated with a 5-member cross-functional team in agile sprints, delivering 100% of assigned features on schedule.'
      ]
    },
    {
      id: 2,
      type: 'work',
      date: 'JUL 2025 — SEP 2025',
      title: 'Software Developer Intern',
      company: 'XNodes Technologies Pvt. Ltd. • Hybrid / Bengaluru',
      bullets: [
        'Developed 8+ RESTful API endpoints using Python, Flask, and Django for Student School Scheduling System serving 500+ student records.',
        'Reduced data retrieval time by 25% by redesigning database queries and implementing efficient indexing.',
        'Achieved 95% on-time delivery rate across sprint cycles applying clean architecture principles.'
      ]
    },
    {
      id: 3,
      type: 'education',
      date: '2023 — 2027 (GRADUATION: JULY 2027)',
      title: 'Bachelor of Engineering — Computer Science',
      company: 'Ghousia College of Engineering | Visvesvaraya Technological University',
      bullets: [
        'CGPA: 8.11 / 10.0',
        'Focus on Full-Stack Systems, Data Structures & Algorithms, AI Workflows, Database Management & Software Design Patterns.'
      ]
    },
    {
      id: 4,
      type: 'education',
      date: '2022 — 2023',
      title: 'Higher Secondary Certificate (XII)',
      company: 'B.N. College, Bhagalpur, Bihar',
      bullets: [
        'Score: 72.4%',
        'Science Stream with Mathematics & Computer Science.'
      ]
    }
  ];

  const filteredData =
    filter === 'all'
      ? timelineData
      : timelineData.filter((item) => item.type === filter);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section-title" data-heading="Journey">
        Experience &amp; Education
      </h2>

      {/* Filter Tabs */}
      <div className="qualification-tabs">
        <button
          className={`tab-btn ${filter === 'all' ? 'active-tab' : ''}`}
          onClick={() => setFilter('all')}
        >
          <i className="uil uil-apps"></i> All Timeline
        </button>
        <button
          className={`tab-btn ${filter === 'work' ? 'active-tab' : ''}`}
          onClick={() => setFilter('work')}
        >
          <i className="uil uil-briefcase-alt"></i> Experience
        </button>
        <button
          className={`tab-btn ${filter === 'education' ? 'active-tab' : ''}`}
          onClick={() => setFilter('education')}
        >
          <i className="uil uil-graduation-cap"></i> Education
        </button>
      </div>

      {/* Center Vertical Timeline Container */}
      <div className="center-timeline-wrapper container">
        {/* Center Vertical Line */}
        <div className="center-timeline-line"></div>

        <div className="center-timeline-items">
          {filteredData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`center-timeline-row ${
                  isLeft ? 'row-left' : 'row-right'
                }`}
              >
                {/* Center Circle Ring Dot */}
                <div className="timeline-center-dot">
                  <div className="dot-inner"></div>
                </div>

                {/* Timeline Card */}
                <div className="center-timeline-card">
                  <span className="card-date">{item.date}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <span className="card-company">{item.company}</span>

                  <div className="card-bullets">
                    {item.bullets.map((bullet, bIndex) => (
                      <div key={bIndex} className="bullet-item">
                        <SparkIcon />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
