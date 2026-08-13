import React, { useState } from 'react';

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const certificates = [
    {
      title: 'Full Stack Development',
      src: 'https://ik.imagekit.io/77nsbwefl/1-16cf568a-787d-43d4-9208-f42dc903c2eb.pdf.png?updatedAt=1759605743898',
    },
    {
      title: 'JavaScript Mastery',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-25%20003356.png?updatedAt=1759605742637',
    },
    {
      title: 'Generative AI',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-17%20171618.png?updatedAt=1759605744105',
    },
    {
      title: 'HTML & CSS Bootcamp',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-10%20223022.png?updatedAt=1759605743015',
    },
    {
      title: 'AWS',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-11%20172612.png?updatedAt=1759605740096',
    },
    {
      title: 'Google Cloud',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-11%20143551.png?updatedAt=1759605741856',
    },
    {
      title: 'Microsoft',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-12%20113604.png?updatedAt=1759605741489',
    },
    {
      title: 'React Bootcamp',
      src: 'https://ik.imagekit.io/77nsbwefl/Screenshot%202025-09-10%20225440.png?updatedAt=1759605742804',
    },
    {
      title: 'ChatGpt For Everyone',
      src: 'https://ik.imagekit.io/77nsbwefl/GuviCertification%20-%20f797a8v549F1J1jB62.png?updatedAt=1759605744027',
    },
  ];

  return (
    <section className="Achievements section" id="Achievements">
      <div className="container">
        <h2 className="section-title" data-heading="My Achievements">
          Achievements
        </h2>

        <div className="achievements-container">
          <div className="achievements-content">
            <div className="achievements-info">
              <div className="achievements-card">
                <i className="uil uil-award achievements-card-icon" aria-hidden="true"></i>
                <h3 className="achievements-card-title">Certificates</h3>
                <span className="achievements-card-data">10+</span>

                <button
                  className="toggle-dropdown"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {dropdownOpen ? 'Hide Certificates ▲' : 'Show Certificates ▼'}
                </button>
              </div>
            </div>

            <div
              id="certificatesDropdown"
              className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}
            >
              <div className="certificates-grid">
                {certificates.map((cert, index) => (
                  <div className="certificate-item" key={index}>
                    <img
                      src={cert.src}
                      alt={cert.title}
                      onClick={() => setSelectedImg(cert.src)}
                    />
                    <p>{cert.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImg && (
        <div
          id="certificateModal"
          className="modal visible"
          onClick={() => setSelectedImg(null)}
        >
          <span className="close" onClick={() => setSelectedImg(null)}>
            &times;
          </span>
          <img
            id="certificateImg"
            src={selectedImg}
            alt="Certificate Preview"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Achievements;
