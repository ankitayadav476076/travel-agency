import React, { useState, useEffect, useRef } from 'react';
import './about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [counts, setCounts] = useState({
    experience: 0,
    fleet: 0,
    projects: 0,
    cities: 0
  });
  const hasAnimated = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));

            if (entry.target.id === 'stats' && !hasAnimated.current.stats) {
              hasAnimated.current.stats = true;
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2500;
    const targets = { experience: 15, fleet: 150, projects: 500, cities: 75 };
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.pow(currentStep / steps, 0.8);

      setCounts({
        experience: Math.floor(targets.experience * progress),
        fleet: Math.floor(targets.fleet * progress),
        projects: Math.floor(targets.projects * progress),
        cities: Math.floor(targets.cities * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);
  };

  const stats = [
    { 
      value: counts.experience, 
      suffix: "+",
      label: "Years of Excellence", 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    },
    { 
      value: counts.fleet, 
      suffix: "+",
      label: "Fleet Vehicles", 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    },
    { 
      value: counts.projects, 
      suffix: "+",
      label: "Completed Projects", 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    },
    { 
      value: counts.cities, 
      suffix: "+",
      label: "Service Locations", 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    }
  ];

  const whyChooseUs = [
    { icon: "✓", text: "On-time delivery" },
    { icon: "✓", text: "Trained drivers & staff" },
    { icon: "✓", text: "Safe and secure handling" },
    { icon: "✓", text: "End-to-end planning & tracking" }
  ];

  const fleetData = [
    { 
      name: "Semi Trailers", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg> 
    },
    { 
      name: "Low Bed Trailers", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 8h15v8H1z"/>
        <path d="M16 11h5l3 3v2h-8v-5z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg> 
    },
    { 
      name: "Multi-Axle Trailers", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="15" height="12"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5" cy="18.5" r="2"/>
        <circle cx="10" cy="18.5" r="2"/>
        <circle cx="19" cy="18.5" r="2"/>
      </svg> 
    },
    { 
      name: "32 ft ODC Trailers", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="5" width="18" height="11"/>
        <path d="M19 10h3l2 2v4h-5v-6z"/>
        <circle cx="6" cy="18.5" r="2.5"/>
        <circle cx="20" cy="18.5" r="2.5"/>
      </svg> 
    },
    { 
      name: "Tempo", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="12" height="10"/>
        <path d="M15 9h4l2 2v4h-6v-6z"/>
        <circle cx="7" cy="18" r="2"/>
        <circle cx="17" cy="18" r="2"/>
      </svg> 
    },
    { 
      name: "Hydra (Crane Vehicle)", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 20h20"/>
        <path d="M12 2v18"/>
        <path d="M12 2l8 4v4l-8 4"/>
        <circle cx="12" cy="20" r="2"/>
      </svg> 
    },
    { 
      name: "Crane", 
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 22h20"/>
        <path d="M6 22V8l8-6 8 6v14"/>
        <path d="M14 2v6"/>
        <circle cx="14" cy="22" r="2"/>
      </svg> 
    }
  ];

  const howWeWork = [
    { title: "Smart Planning", desc: "Strategic route planning and optimization" },
    { title: "Route Surveys", desc: "Comprehensive pre-transport route analysis" },
    { title: "Permits & Documentation", desc: "All necessary permits and clearances" },
    { title: "Escort Vehicles", desc: "Professional escort for oversized loads" },
    { title: "GPS Tracking", desc: "Real-time location monitoring" },
    { title: "Professional Execution", desc: "Expert handling and delivery" }
  ];

  const trustedCompanies = [
    { name: "Reliance", logo: "https://th.bing.com/th/id/R.7a8240abaf45600a6d45d7d00d40ac70?rik=tuNwmS%2bw75PtPg&riu=http%3a%2f%2fwww.companieshistory.com%2fwp-content%2fuploads%2f2013%2f07%2fReliance-Industries.png&ehk=Gf%2ftPiUi1jjV9Y4McyEk513pJhfgy2GC4CeZnZ59Ofg%3d&risl=&pid=ImgRaw&r=0", id: 1 },
    { name: "Tata", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/320px-Tata_logo.svg.png", id: 2 },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png", id: 3 },
    { name: "Mahindra", logo: "https://listcarbrands.com/wp-content/uploads/2017/11/logo-Mahindra.jpg", id: 5 },
    { name: "Adani", logo: "https://static.startuptalky.com/2022/06/Adani-Enterprises-Limited-StartupTalky.jpg", id: 6 },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/320px-Infosys_logo.svg.png", id: 7 }
  ];

  return (
    <div className="about-container">
      {/* Hero Header */}
      <div className="about-header" id="header" data-animate>
        <div className="header-badge">
          <div className="badge-pulse"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          <span>About Krishna Roadlines</span>
        </div>
        <h1 className="header-title">
          Professional Transport & 
          <span className="highlight"> Logistics Solutions</span>
        </h1>
        <p className="header-subtitle">
          Reliable cargo movement across India, including heavy and over-dimensional loads with precision and care
        </p>
      </div>

      {/* Trusted Companies Marquee */}
      <section className="trusted-companies-section" id="trusted" data-animate>
        <div className="trusted-header">
          <h3>Trusted by Industry Leaders</h3>
          <p>Powering logistics for India's most prestigious brands</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {trustedCompanies.map((company) => (
              <div key={`${company.id}-1`} className="company-logo">
                <div className="logo-wrapper">
                  <img src={company.logo} alt={`${company.name} logo`} loading="lazy" />
                </div>
              </div>
            ))}
            {trustedCompanies.map((company) => (
              <div key={`${company.id}-2`} className="company-logo">
                <div className="logo-wrapper">
                  <img src={company.logo} alt={`${company.name} logo`} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-content">
        {/* What We Do & Who We Are Section */}
        <section className="about-story" id="story" data-animate>
          <div className="story-text">
            <div className="section-label">What We Do</div>
            <h2>Delivering Trust, Safety & On-Time Performance</h2>
            <p>
              Krishna Roadlines is a professional transport and logistics company providing reliable cargo movement across India, including heavy and over-dimensional loads. We don't just move goods—we deliver trust, safety, and on-time performance.
            </p>
            <p>
              With over 15+ years of experience, we've successfully handled industrial and large-scale transportation projects with precision and care. We are more than a name on a truck. We are the strength behind your supply chain and the responsibility behind your success.
            </p>
          </div>
          <div className="story-image">
            <div className="image-overlay">
              <div className="overlay-content">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section" id="why-choose" data-animate>
          <div className="section-header-center">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className={`why-item ${isVisible['why-choose'] ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="why-icon">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid */}
        <section className="about-stats" id="stats" data-animate>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card ${isVisible.stats ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">{stat.icon}</div>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">
                    {stat.value}{stat.suffix}
                  </h3>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="fleet-section" id="fleet" data-animate>
          <div className="section-header-center">
            <div className="section-label">Our Fleet</div>
            <h2 className="section-title">Comprehensive Vehicle Range</h2>
            <p className="section-subtitle">
              State-of-the-art fleet equipped to handle all your transportation needs
            </p>
          </div>
          <div className="fleet-grid">
            {fleetData.map((fleet, index) => (
              <div key={index} className={`fleet-card ${isVisible.fleet ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="fleet-icon">{fleet.icon}</div>
                <h3>{fleet.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="how-we-work-section" id="work" data-animate>
          <div className="section-header-center">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              Smart planning and professional execution for smooth and secure transportation
            </p>
          </div>
          <div className="work-grid">
            {howWeWork.map((work, index) => (
              <div key={index} className={`work-card ${isVisible.work ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="work-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Highlight Case Study */}
        <section className="case-study-section" id="case-study" data-animate>
          <div className="case-study-content">
            <div className="section-label">Project Highlight</div>
            <h2 className="section-title">Success Story: Pune to Ajmer Refinery</h2>
            <p className="case-study-intro">
              Krishna Roadlines successfully transported a massive over-dimensional heat exchanger unit from Pune to Ajmer Refinery using a hydraulic low-bed trailer.
            </p>
            
            <div className="case-study-details">
              <div className="detail-card">
                <div className="detail-icon">📦</div>
                <div>
                  <h4>Cargo</h4>
                  <p>Heat Exchanger Unit<br/>(Approx. 50 Tons)</p>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">📏</div>
                <div>
                  <h4>Dimensions</h4>
                  <p>60 ft × 23 ft × 17 ft</p>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">⏱</div>
                <div>
                  <h4>Delivery</h4>
                  <p>Safe and before deadline</p>
                </div>
              </div>
            </div>

            <div className="case-study-achievements">
              <h3>Our team managed:</h3>
              <ul>
                <li>Route planning and optimization</li>
                <li>All necessary permissions and permits</li>
                <li>Professional escort vehicles</li>
                <li>Real-time GPS tracking</li>
                <li>Expert handling and delivery</li>
              </ul>
            </div>

            <div className="client-appreciation">
              <h3>Client Appreciated:</h3>
              <div className="appreciation-grid">
                <div className="appreciation-item">✓ Professional handling</div>
                <div className="appreciation-item">✓ Perfect planning</div>
                <div className="appreciation-item">✓ Clear communication</div>
                <div className="appreciation-item">✓ On-time safe delivery</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta" id="cta" data-animate>
          <div className="cta-content">
            <h2>Ready to Transform Your Logistics?</h2>
            <p>Join 500+ businesses that trust Krishna Roadlines for their transportation needs</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>Connect</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span ><a href="9356048835">Contact Us</a></span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;