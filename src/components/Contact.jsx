import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocusedFields({ ...focusedFields, [field]: true });
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocusedFields({ ...focusedFields, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Please wait...');

    const payload = {
      access_key: 'fbda278a-be9d-41c0-ac9c-69fcfb63e76b',
      name: formData.name,
      email: formData.email,
      'Phone No': formData.phone,
      message: formData.message,
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          setStatusMessage('Form submitted successfully');
        } else {
          setStatusMessage(json.message || 'Error submitting form');
        }
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage('Something went wrong!');
      })
      .then(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFocusedFields({ name: false, email: false, phone: false, message: false });
        setTimeout(() => {
          setStatusMessage('');
        }, 4000);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title" data-heading="Get in Touch">
        Contact me
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <i className="uil uil-envelope-edit contact-card-icon"></i>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">mdsaifali@gmail.com</span>
              <span
                className="contact-button"
                onClick={() => (window.location.href = 'mailto:mdsaifali6303@gmail.com')}
              >
                Write me <i className="uil uil-arrow-right contact-button-icon"></i>
              </span>
            </div>

            <div className="contact-card">
              <i className="uil uil-whatsapp contact-card-icon"></i>
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">903-122-8966</span>
              <span
                className="contact-button"
                onClick={() => window.open('https://wa.me/919031228966', '_blank')}
              >
                Write me <i className="uil uil-arrow-right contact-button-icon"></i>
              </span>
            </div>

            <div className="contact-card">
              <i className="uil uil-telegram contact-card-icon"></i>
              <h3 className="contact-card-title">Telegram</h3>
              <span className="contact-card-data">Md Saif Ali</span>
              <span
                className="contact-button"
                onClick={() => window.open('https://t.me/Md_Saif_Ali_063', '_blank')}
              >
                Write me <i className="uil uil-arrow-right contact-button-icon"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div
              className={`input-container ${
                focusedFields.name || formData.name ? 'focus' : ''
              }`}
            >
              <input
                type="text"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={(e) => handleBlur('name', e.target.value)}
                required
              />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>

            <div
              className={`input-container ${
                focusedFields.email || formData.email ? 'focus' : ''
              }`}
            >
              <input
                type="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e.target.value)}
                required
              />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>

            <div
              className={`input-container ${
                focusedFields.phone || formData.phone ? 'focus' : ''
              }`}
            >
              <input
                type="text"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={(e) => handleBlur('phone', e.target.value)}
                required
              />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>

            <div
              className={`input-container textarea ${
                focusedFields.message || formData.message ? 'focus' : ''
              }`}
            >
              <textarea
                name="message"
                className="input"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={(e) => handleBlur('message', e.target.value)}
                required
              ></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>

            <button type="submit" className="button">
              <i className="uil uil-navigator button-icon"></i>Send Message
            </button>

            {statusMessage && (
              <p
                style={{
                  marginTop: '1rem',
                  color: 'var(--skin-color)',
                  fontWeight: '500',
                }}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
