import React, { useState, useEffect } from 'react';
import './Services.css';
import road from '../assets/road.png';
import eicher from '../assets/eicher.png';
import trailer from '../assets/trailer.jpeg';
import truck from '../assets/truck.jpeg';
import load from '../assets/load.jpeg';
import crane from '../assets/crane.jpeg';
import test1 from '../assets/test1.png';
import test2 from '../assets/test2.png';
import test3 from '../assets/test3.png';
import test4 from '../assets/test4.png';
import test5 from '../assets/test5.png';

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const servicesData = [
    {
      id: 1,
      image: road,
      alt: "Truck on highway delivering goods",
      title: "Road Transport",
      description: "Safe and reliable road transport services with timely delivery across major cities and highways.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      features: ["24/7 Operations", "Real-time GPS", "Insurance Coverage"]
    },
    {
      id: 2,
      image: eicher,
      alt: "GPS-tracked fleet vehicles in parking lot",
      title: "Fleet Management",
      description: "Professionally managed fleet with trained drivers, GPS tracking, and regular vehicle maintenance.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      features: ["Certified Drivers", "Modern Vehicles", "Route Optimization"]
    },
    {
      id: 3,
      image: trailer,
      alt: "Modern warehouse interior with organized storage",
      title: "Trailers",
      description: "Secure warehouse facilities for short-term and long-term storage with organized handling.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 3h15v13H1z"/>
          <path d="M16 8h5l3 3v5h-8V8z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      features: ["Climate Control", "Security Systems", "Easy Access"]
    },
    {
      id: 4,
      image: crane,
      alt: "Heavy Crane Operations",
      title: "Heavy Crane Operations",
      description: "Reliable crane services for safe, precise, and efficient lifting of heavy loads across construction and industrial sites.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 20h20"/>
          <path d="M12 2v18"/>
          <path d="M12 2l10 5v5l-10 5"/>
          <circle cx="12" cy="20" r="2"/>
        </svg>
      ),
      features: ["Heavy Lifting", "Certified Operators", "Safety Standards"]
    },
    {
      id: 5,
      image: truck,
      alt: "Heavy Truck Transportation",
      title: "Heavy Truck Transportation",
      description: "Efficient and reliable truck services for safe transportation of goods across short and long distances with timely delivery.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
          <path d="M8 3v5"/>
        </svg>
      ),
      features: ["Long Distance", "Express Delivery", "Bulk Transport"]
    },
    {
      id: 6,
      image: load,
      alt: "Modern warehouse interior with organized storage",
      title: "Heavy Load Transportation",
      description: "Specialized transportation services for oversized and heavy loads, ensuring safety, stability, and on-time delivery across all routes.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      features: ["Oversized Cargo", "Special Permits", "Secure Handling"]
    }
  ];

  const testimonialsData = [
    {
      id: 1,
      text: "Excellent service! Our shipments always arrive on time and in perfect condition. The tracking system is very reliable and the staff is professional.",
      author: "Rajesh Kumar",
      position: "Supply Chain Manager, Tech Industries",
      image: test1,
      rating: 5
    },
    {
      id: 2,
      text: "Their warehouse facilities are top-notch. We've been using their storage services for over 2 years and never had any issues. Highly recommended!",
      author: "Karan Sharma",
      position: "Operations Head, E-Commerce Co.",
      image: test2,
      rating: 5
    },
    {
      id: 3,
      text: "The fleet management team is outstanding. GPS tracking gives us peace of mind, and their drivers are courteous and professional.",
      author: "Amit Patel",
      position: "Logistics Director, Manufacturing Ltd.",
      image: test3,
      rating: 5
    },
    {
      id: 4,
      text: "Reliable, efficient, and cost-effective. Their team goes above and beyond to ensure smooth operations. Best logistics partner we've ever worked with.",
      author: "Vikram Singh",
      position: "COO, FMCG Distribution",
      image: test4,
      rating: 4
    },
    {
      id: 5,
      text: "Professional team with excellent communication. They've helped us scale our business without worrying about logistics. Truly a reliable partner!",
      author: "Karan Joshi",
      position: "CEO, Pharmaceutical Supplies",
      image: test5,
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="services-wrapper">
      {/* Header Section */}
      <section className="services-header">
        <div className="header-badge">
          <div className="badge-pulse"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          <span>Our Services</span>
        </div>
        <h1 className="header-title">
          Comprehensive <span className="highlight">Logistics Solutions</span>
        </h1>
        <p className="header-subtitle">
          From road transport to heavy crane operations, we provide end-to-end logistics services tailored to your business needs
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services" data-animate>
        <div className="services-content">
          <div className="section-header">
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-description">
              Comprehensive logistics solutions tailored to meet your business needs
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card ${isVisible.services ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="service-image"
                  />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="service-cta">
                    <span>Learn More</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials" data-animate>
        <div className="testimonials-content">
          <div className="section-header">
            <div className="section-label">Client Feedback</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="testimonials-container">
            <button className="testimonial-nav prev" onClick={prevSlide} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            <div className="testimonials-slider">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${
                    index === activeSlide ? 'active' : ''
                  } ${index < activeSlide ? 'prev' : ''} ${
                    index > activeSlide ? 'next' : ''
                  }`}
                >
                  <div className="quote-icon">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < testimonial.rating ? 'star-filled' : 'star-empty'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="author-avatar"
                      loading="lazy"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.author}</h4>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="testimonial-nav next" onClick={nextSlide} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>

            <div className="testimonial-dots">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Logistics?</h2>
          <p className="cta-description">
            Partner with us for reliable, efficient, and professional transportation solutions
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="cta-secondary">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;