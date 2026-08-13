import React, { useState } from 'react';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: (
        <>
          Web <br /> Designer
        </>
      ),
      modalTitle: 'Web Designer',
      icon: 'uil uil-web-grid',
      description:
        'I offer services with more than 1 years of experience with quality work to clients and companies',
      list: [
        'User Interface Development',
        'Web Page Development',
        'Interactive UX/UI Creations',
        'Company Brand Positioning',
        'Design and Mockup of products for companies',
      ],
    },
    {
      id: 2,
      title: (
        <>
          App <br /> Designer
        </>
      ),
      modalTitle: 'App Designer',
      icon: 'uil uil-arrow',
      description:
        'I offer services with more than 6 months of experience with quality work to clients and companies',
      list: [
        'Usability Testing',
        'User Research',
        'Interaction Design',
        'Responsive Design',
        'Branding & Style Guides',
        'Accessibility',
        'Testing',
      ],
    },
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">
        What I Offer
      </h2>

      <div className="services-container container grid">
        {servicesData.map((service) => (
          <div className="services-content" key={service.id}>
            <div>
              <i className={`${service.icon} services-icon`}></i>
              <h3 className="services-title">{service.title}</h3>
            </div>

            <span
              className="services-button"
              onClick={() => setActiveModal(service.id)}
            >
              View More <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div
              className={`services-modal ${
                activeModal === service.id ? 'active-modal' : ''
              }`}
              onClick={() => setActiveModal(null)}
            >
              <div
                className="services-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <i
                  className="uil uil-times services-modal-close"
                  onClick={() => setActiveModal(null)}
                ></i>

                <h3 className="services-modal-title">{service.modalTitle}</h3>
                <p className="services-modal-description">{service.description}</p>

                <ul className="services-modal-services grid">
                  {service.list.map((item, idx) => (
                    <li className="services-modal-service" key={idx}>
                      <i className="uil uil-check-circle services-modal-icon"></i>
                      <p className="services-modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
