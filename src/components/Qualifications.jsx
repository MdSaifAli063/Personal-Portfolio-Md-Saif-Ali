import React from 'react';

const Qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section-title" data-heading="My Journey">
        Qualifications
      </h2>

      <div className="qualification-container container grid">
        <div className="education">
          <h3 className="qualification-title">
            <i className="uil uil-graduation-cap"></i>Education
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">
                Ghousia College of Engineering | VisvesvarayaTechnological University
              </h3>
              <p className="timeline-text">
                Bachelor of Computer Science <br />
                CGPA: 8.33 / 10.0
              </p>
              <span className="timeline-date">
                <i className="uil uil-calendar-alt"></i>2023 - 2027,<br />
              </span>
              <span>(AnticipatedGraduation Date:July 2027)</span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">B.N. College, Bhagalpur</h3>
              <p className="timeline-text">
                High School/Secondary Certificate Programs 12th:76.8%
              </p>
              <span className="timeline-date">
                <i className="uil uil-calendar-alt"></i>2022 - 2023
              </span>
            </div>
          </div>
        </div>

        <div className="experience">
          <h3 className="qualification-title">
            <i className="uil uil-trophy"></i>ACHIEVEMENTS
          </h3>

          <div className="timeline">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Certificate of Publication</h3>
              <p className="timeline-text">
                Manuscript Title: Performance Analysis of Linear CongruentialRandom
                Generator Algorithms Using Python and Java Languages.
              </p>
              <span className="timeline-date">
                <i className="uil uil-calendar-alt"></i>2024 - Present
              </span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Academic or Project Leader</h3>
              <p className="timeline-text">
                Team Leader for TECHFILES Project, led a team of four to design and
                implement innovative solutions.
              </p>
              <span className="timeline-date">
                <i className="uil uil-calendar-alt"></i>2024 - Present
              </span>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-title">Hackathons</h3>
              <p className="timeline-text">
                Participate of the Ghousia-College Hackathon for a Real-world
                project.
              </p>
              <span className="timeline-date">
                <i className="uil uil-calendar-alt"></i>2024
              </span>
              <p className="timeline-text">
                Certificate of Participation — HackWithIndia.
              </p>
              <span className="timeline-date">
                <i className="uil uil-calendar-alt"></i>2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
