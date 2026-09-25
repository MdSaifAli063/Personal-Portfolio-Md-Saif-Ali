import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      description:
        'Working with Md Saif Ali was an absolute pleasure from start to finish. They took the time to truly understand our business needs and translated them into a stunning and highly functional website.',
      date: 'March 30, 2025',
      name: 'Ashwini T Gadad',
      detail: 'Managing Director',
      img: 'https://ik.imagekit.io/77nsbwefl/Ash.jpg?updatedAt=1754071755918',
    },
    {
      id: 2,
      description:
        'Md Saif Ali truly understood our business needs through his modern and sleek design, making our site incredibly user-friendly. With his help, we had a significant increase in engagement and sales.',
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
    <section className="testimonials section" id="testimonials">
      <h2 className="section-title" data-heading="Feedback">
        Developer Review
      </h2>

      <div className="testimonials-container container">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Navigation]}
          spaceBetween={28}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="testimonial-card">
              <div className="testimonial-quote">
                <i className="uil uil-quote-left"></i>
              </div>
              <p className="testimonial-description">"{item.description}"</p>
              <span className="testimonial-date">{item.date}</span>
              <div className="testimonial-profile">
                <img
                  src={item.img}
                  alt={item.name}
                  className="testimonial-profile-img"
                />
                <div className="testimonial-profile-data">
                  <h3 className="testimonial-profile-name">{item.name}</h3>
                  <span className="testimonial-profile-detail">{item.detail}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Direct useRef Custom Navigation Arrow Buttons */}
        <div className="testimonials-nav-arrows">
          <button
            className="swiper-button-prev-custom"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Testimonial"
          >
            <i className="uil uil-angle-left-b"></i>
          </button>
          <button
            className="swiper-button-next-custom"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Testimonial"
          >
            <i className="uil uil-angle-right-b"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
