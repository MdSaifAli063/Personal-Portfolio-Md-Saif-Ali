import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const toolsList = [
    { name: 'c', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'python', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'javascript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'typescript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'java', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'html5', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'css3', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    { name: 'react', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'tailwind', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'bootstrap', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' },
    { name: 'angular', src: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { name: 'nodejs', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'express', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg' },
    { name: 'kotlin', src: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg' },
    { name: 'flutter', src: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
    { name: 'dart', src: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg' },
    { name: 'mongodb', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
    { name: 'mysql', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'aws', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'docker', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
    { name: 'django', src: 'https://cdn.worldvectorlogo.com/logos/django.svg' },
    { name: 'illustrator', src: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg' },
    { name: 'photoshop', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg' },
    { name: 'figma', src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
    { name: 'framer', src: 'https://www.vectorlogo.zone/logos/framer/framer-icon.svg' },
    { name: 'postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'git', src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" data-heading="My Abilities">
        Technical Skills & Tools
      </h2>

      <div className="tools">
        {toolsList.map((tool) => (
          <a
            key={tool.name}
            target="_blank"
            rel="noreferrer"
            href={tool.src}
            style={{ display: 'inline-block' }}
          >
            <img src={tool.src} alt={tool.name} width="42" height="42" />
          </a>
        ))}
      </div>
      <br />

      <div className="skills-container container grid">
        <div className="skills-tabs">
          <div
            className={`skills-header ${activeTab === 'frontend' ? 'skills-active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            <i className="uil uil-brackets-curly skills-icon"></i>
            <div>
              <h1 className="skills-title">Frontend Developer</h1>
              <span className="skills-subtitle">More than 1 years</span>
            </div>
            <i className="uil uil-angle-down skills-arrow"></i>
          </div>

          <div
            className={`skills-header ${activeTab === 'design' ? 'skills-active' : ''}`}
            onClick={() => setActiveTab('design')}
          >
            <i className="uil uil-swatchbook skills-icon"></i>
            <div>
              <h1 className="skills-title">UI / UX Design</h1>
              <span className="skills-subtitle">More than 1 years</span>
            </div>
            <i className="uil uil-angle-down skills-arrow"></i>
          </div>

          <div
            className={`skills-header ${activeTab === 'backend' ? 'skills-active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            <i className="uil uil-server-network skills-icon"></i>
            <div>
              <h1 className="skills-title">Backend Developer</h1>
              <span className="skills-subtitle">More than 6 months</span>
            </div>
            <i className="uil uil-angle-down skills-arrow"></i>
          </div>
        </div>

        <div className="skills-content">
          {/* Frontend Skills */}
          <div
            className={`skills-group ${activeTab === 'frontend' ? 'skills-active' : ''}`}
            data-content
            id="frontend"
          >
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">HTML</h3>
                  <span className="skills-number">90%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '90%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">CSS</h3>
                  <span className="skills-number">80%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '80%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Javascript</h3>
                  <span className="skills-number">50%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '50%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">React</h3>
                  <span className="skills-number">40%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '40%' }}></span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Skills */}
          <div
            className={`skills-group ${activeTab === 'design' ? 'skills-active' : ''}`}
            data-content
            id="design"
          >
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Figma</h3>
                  <span className="skills-number">50%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '50%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">PhotoShop</h3>
                  <span className="skills-number">60%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '60%' }}></span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div
            className={`skills-group ${activeTab === 'backend' ? 'skills-active' : ''}`}
            data-content
            id="backend"
          >
            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Nodejs</h3>
                  <span className="skills-number">60%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '60%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">Python</h3>
                  <span className="skills-number">70%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '70%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">PostgreSQL</h3>
                  <span className="skills-number">50%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '50%' }}></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-titles">
                  <h3 className="skills-name">MongoDB</h3>
                  <span className="skills-number">45%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage" style={{ width: '45%' }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
