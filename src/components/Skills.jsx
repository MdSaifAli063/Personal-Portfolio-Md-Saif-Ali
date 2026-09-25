import React, { useState } from 'react';

const Skills = () => {
  const [openTab, setOpenTab] = useState('frontend');

  const toggleTab = (id) => {
    setOpenTab((prev) => (prev === id ? null : id));
  };

  const toolsList = [
    // Frontend
    { name: 'HTML5', src: '/tools/html5.svg' },
    { name: 'CSS3', src: '/tools/css3.svg' },
    { name: 'JavaScript (ES6+)', src: '/tools/javascript.svg' },
    { name: 'TypeScript', src: '/tools/typescript.svg' },
    { name: 'React.js', src: '/tools/react.svg' },
    { name: 'Next.js', src: '/tools/nextjs.svg' },
    { name: 'Tailwind CSS', src: '/tools/tailwind.svg' },

    // Backend
    { name: 'Node.js', src: '/tools/nodejs.svg' },
    { name: 'Express.js', src: '/tools/express.svg' },
    { name: 'Python', src: '/tools/python.svg' },
    { name: 'Flask', src: '/tools/flask.svg' },
    { name: 'Django', src: '/tools/django.svg' },
    { name: 'FastAPI', src: '/tools/fastapi.svg' },
    { name: 'REST API', src: '/tools/rest-api.svg' },

    // AI, ML & LLMs
    { name: 'LLM Integration', src: '/tools/llm.svg' },
    { name: 'Google Gemini API', src: '/tools/gemini.svg' },
    { name: 'PyTorch', src: '/tools/pytorch.svg' },
    { name: 'OpenEnv', src: '/tools/openenv.svg' },
    { name: 'Semantic Embeddings', src: '/tools/embeddings.svg' },
    { name: 'AI Agents', src: '/tools/ai-agents.svg' },

    // Databases & Storage
    { name: 'MongoDB', src: '/tools/mongodb.svg' },
    { name: 'PostgreSQL', src: '/tools/postgresql.svg' },
    { name: 'SQL', src: '/tools/sql.svg' },
    { name: 'Supabase', src: '/tools/supabase.svg' },
    { name: 'Firebase', src: '/tools/firebase.svg' },

    // Cloud, DevOps & Tools
    { name: 'IBM Cloud', src: '/tools/ibm-cloud.svg' },
    { name: 'Google Cloud', src: '/tools/google-cloud.svg' },
    { name: 'Vercel', src: '/tools/vercel.svg' },
    { name: 'Git', src: '/tools/git.svg' },
    { name: 'GitHub', src: '/tools/github.svg' },
    { name: 'Postman', src: '/tools/postman.svg' }
  ];

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      subtitle: 'React, Next.js, TS & Tailwind',
      icon: 'uil-brackets-curly',
      skills: [
        { name: 'React.js', percentage: '90%' },
        { name: 'Next.js', percentage: '85%' },
        { name: 'TypeScript', percentage: '82%' },
        { name: 'JavaScript (ES6+)', percentage: '92%' },
        { name: 'Tailwind CSS / HTML5 / CSS3', percentage: '95%' },
        { name: 'Responsive Web Design', percentage: '95%' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      subtitle: 'Node.js, Express, Python & Django',
      icon: 'uil-server-network',
      skills: [
        { name: 'Node.js & Express.js', percentage: '88%' },
        { name: 'Python (Flask / Django)', percentage: '90%' },
        { name: 'FastAPI & REST APIs', percentage: '85%' },
        { name: 'System Architecture & Indexing', percentage: '84%' }
      ]
    },
    {
      id: 'aiml',
      title: 'AI / ML & Agents',
      subtitle: 'LLMs, PyTorch & Gemini API',
      icon: 'uil-robot',
      skills: [
        { name: 'LLM Integration & Prompt Engineering', percentage: '88%' },
        { name: 'Google Gemini API', percentage: '90%' },
        { name: 'Semantic Embeddings & RAG', percentage: '85%' },
        { name: 'PyTorch & OpenEnv', percentage: '80%' },
        { name: 'AI Reasoning Agents', percentage: '86%' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      subtitle: 'PostgreSQL, MongoDB & Supabase',
      icon: 'uil-database',
      skills: [
        { name: 'PostgreSQL / SQL', percentage: '86%' },
        { name: 'MongoDB', percentage: '84%' },
        { name: 'Supabase & Firebase', percentage: '82%' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps Tools',
      subtitle: 'GCP, IBM Cloud, Git & Vercel',
      icon: 'uil-cloud-computing',
      skills: [
        { name: 'Vercel & Cloud Deployment', percentage: '92%' },
        { name: 'IBM Cloud & Google Cloud', percentage: '80%' },
        { name: 'Git, GitHub & Version Control', percentage: '95%' },
        { name: 'Postman & API Testing', percentage: '90%' }
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="Stack">
        Technical Skills
      </h2>

      {/* Compact Interactive Tool Icons Ribbon */}
      <div className="tools">
        {toolsList.map((tool) => (
          <div key={tool.name} className="tool-badge-item" title={tool.name}>
            <img src={tool.src} alt={tool.name} width="24" height="24" />
            <span className="tool-name">{tool.name}</span>
          </div>
        ))}
      </div>

      {/* Accordion Dropdown List */}
      <div className="skills-accordion-container">
        {skillCategories.map((cat) => {
          const isOpen = openTab === cat.id;
          return (
            <div
              key={cat.id}
              className={`skills-accordion-card ${isOpen ? 'accordion-open' : ''}`}
            >
              {/* Accordion Header */}
              <div
                className="skills-accordion-header"
                onClick={() => toggleTab(cat.id)}
              >
                <div className="skills-icon-wrapper">
                  <i className={`uil ${cat.icon} skills-icon`}></i>
                </div>
                <div className="skills-info">
                  <h3 className="skills-title">{cat.title}</h3>
                  <span className="skills-subtitle">{cat.subtitle}</span>
                </div>
                <i className={`uil uil-angle-down skills-arrow ${isOpen ? 'arrow-open' : ''}`}></i>
              </div>

              {/* Accordion Collapsible Content Body */}
              <div className={`skills-accordion-body ${isOpen ? 'show-body' : ''}`}>
                <div className="skills-list grid">
                  {cat.skills.map((skill) => (
                    <div className="skills-data" key={skill.name}>
                      <div className="skills-titles">
                        <h4 className="skills-name">{skill.name}</h4>
                        <span className="skills-number">{skill.percentage}</span>
                      </div>
                      <div className="skills-bar">
                        <span
                          className="skills-percentage"
                          style={{ width: isOpen ? skill.percentage : '0%' }}
                        ></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
