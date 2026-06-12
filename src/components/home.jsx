import React, { useEffect, useState } from "react";
import "./home.css";
import About from "./about";
import Contact from "./contact"
import video from "../assets/video.mp4";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="home-wrapper">
        {/* Video Background */}
        <div className="video-background">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="background-video"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dynamic Overlay */}
          <div className="video-overlay"></div>
          
          {/* Animated Geometric Elements */}
          <div className="geometric-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
          <div className="hero-content">
            {/* Premium Badge */}
            <div className="hero-badge">
              <div className="badge-glow"></div>
              <svg className="badge-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <span>Premium Logistics Excellence</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Delivering Excellence
              <br />
              <span className="hero-title-gradient">Across Every Mile</span>
            </h1>

            {/* Value Proposition */}
            <p className="hero-description">
              Revolutionizing global logistics with AI-powered route optimization, 
              real-time tracking, and guaranteed on-time delivery. Your trusted 
              partner in seamless transportation solutions.
            </p>

            {/* CTA Section */}
            <div className="cta-buttons">
              <button className="btn-primary">
                <span className="btn-text" href="./contact.jsx"></span>
                <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-secondary">
                <svg className="btn-icon-left" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                <span className="btn-text">ON TIME SERVICE</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="trust-badges">
              <div className="trust-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>ISO 9001:2015</span>
              </div>
              <div className="trust-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>99.9% Success Rate</span>
              </div>
              <div className="trust-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Daily Shipments</div>
                </div>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-number">99.2%</div>
                  <div className="stat-label">On-Time Delivery</div>
                </div>
              </div>

              <div className="stat-divider"></div>

              <div className="stat-item">
                <div className="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Global Locations</div>
                </div>
              </div>
            </div>

            {/* Premium Trust Stamps/Logos Section */}
            <div className="trust-stamps-section">
              <div className="stamps-label">Trusted & Certified By</div>
              <div className="trust-stamps">
                {/* ISO Certification Stamp */}
                <div className="trust-stamp">
                  <div className="stamp-seal">
                    <svg className="stamp-icon" viewBox="0 0 100 100" width="80" height="80">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
                      <path d="M50 20 L58 38 L78 40 L62 54 L66 74 L50 64 L34 74 L38 54 L22 40 L42 38 Z" fill="currentColor"/>
                      <text x="50" y="90" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">ISO 9001</text>
                    </svg>
                  </div>
                  <div className="stamp-text">ISO Certified</div>
                </div>

                {/* Government Approved Stamp */}
                <div className="trust-stamp">
                  <div className="stamp-seal govt-seal">
                    <svg className="stamp-icon" viewBox="0 0 100 100" width="80" height="80">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M50 15 L55 35 L75 35 L60 47 L65 67 L50 55 L35 67 L40 47 L25 35 L45 35 Z" fill="currentColor"/>
                      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <text x="50" y="90" textAnchor="middle" fontSize="9" fill="currentColor" fontWeight="bold">APPROVED</text>
                    </svg>
                  </div>
                  <div className="stamp-text">Govt. Approved</div>
                </div>

                {/* Green Logistics Stamp */}
                <div className="trust-stamp">
                  <div className="stamp-seal eco-seal">
                    <svg className="stamp-icon" viewBox="0 0 100 100" width="80" height="80">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                      <path d="M50 25 Q35 35 35 50 Q35 65 50 75 Q65 65 65 50 Q65 35 50 25 M45 40 L48 50 L40 48 Z" fill="currentColor"/>
                      <text x="50" y="92" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">ECO-FRIENDLY</text>
                    </svg>
                  </div>
                  <div className="stamp-text">Green Certified</div>
                </div>

                {/* Security Verified Stamp */}
                <div className="trust-stamp">
                  <div className="stamp-seal security-seal">
                    <svg className="stamp-icon" viewBox="0 0 100 100" width="80" height="80">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M50 20 C38 20 30 28 30 40 L30 50 L25 50 L25 80 L75 80 L75 50 L70 50 L70 40 C70 28 62 20 50 20 M40 40 C40 33 44 28 50 28 C56 28 60 33 60 40 L60 50 L40 50 Z" fill="currentColor"/>
                      <text x="50" y="93" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">SECURED</text>
                    </svg>
                  </div>
                  <div className="stamp-text">Security Verified</div>
                </div>

                {/* Excellence Award Stamp */}
                <div className="trust-stamp">
                  <div className="stamp-seal award-seal">
                    <svg className="stamp-icon" viewBox="0 0 100 100" width="80" height="80">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M40 55 L35 75 L50 65 L65 75 L60 55" fill="currentColor"/>
                      <text x="50" y="44" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">★</text>
                      <text x="50" y="93" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="bold">EXCELLENCE</text>
                    </svg>
                  </div>
                  <div className="stamp-text">Award Winner</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <About />
      <Contact/>
    </>
  );
};

export default Home;