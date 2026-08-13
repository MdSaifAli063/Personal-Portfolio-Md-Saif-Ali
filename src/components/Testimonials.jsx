import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles if needed, or rely on CDN in index.html
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      description:
        'Working with Md Saif Ali was an absolute pleasure from start to finish. They took the time to truly understand our business needs and translated them into a stunning and highly functional website',
      date: 'March 30, 2025',
      name: 'Ashwini T Gadad',
      detail: 'Managing Director',
      img: 'https://ik.imagekit.io/77nsbwefl/Ash.jpg?updatedAt=1754071755918',
    },
    {
      id: 2,
      description:
        'Md Saif Ali truly understood our business needs through his modern and sleek design, making a site incredibly user-friendly. With his help, we had a significant increase in engagement and customer sales',
      date: 'January 18, 2025',
      name: 'Faraz Akram',
      detail: 'Software Engineer',
      img: 'https://ik.imagekit.io/77nsbwefl/Faraz.jpg?updatedAt=1754071738122',
    },
    {
      id: 3,
      description:
        'Excellent work! Md Saif Ali was professional, communicative, and delivered a high-quality website that exceeded our expectations. Highly recommend working with him for any web development needs.',
      date: 'July 22, 2025',
      name: 'Dawal Malik',
      detail: 'Backend Developer',
      img: 'https://ik.imagekit.io/77nsbwefl/IMG_20251005_013628.jpg?updatedAt=1759608495835',
    },
  ];

  return (
    <section className="testimonials section">
      <h2 className="section-title" data-heading="My clients say">
        Testimonials
      </h2>

      <div className="testimonials-container container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="testimonial-card">
              <div className="testimonial-quote">
                <i className="bx bxs-quote-alt-left"></i>
              </div>
              <p className="testimonial-description">{item.description}</p>
              <h3 className="testimonial-date">{item.date}</h3>
              <div className="testimonial-profile">
                <img
                  src={item.img}
                  alt={item.name}
                  className="testimonial-profile-img"
                />
                <div className="testimonial-profile-data">
                  <span className="testimonial-profile-name">{item.name}</span>
                  <span className="testimonail-profile-detail">{item.detail}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
