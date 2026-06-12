import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import './quoteModal.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromLocation: '',
    toLocation: '',
    cargoDetails: ''
  });

  const maharashtraLocations = [
    'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 
    'Kolhapur', 'Amravati', 'Akola', 'Latur', 'Dhule', 'Ahmednagar',
    'Chandrapur', 'Jalgaon', 'Nanded', 'Sangli', 'Shirdi', 'Ratnagiri',
    'Satara', 'Parbhani', 'Yavatmal', 'Beed', 'Osmanabad', 'Wardha'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showQuoteForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showQuoteForm]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    alert('Quote request submitted successfully! We will contact you soon.');
    setShowQuoteForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      fromLocation: '',
      toLocation: '',
      cargoDetails: ''
    });
  };

  const openQuoteForm = () => {
    setShowQuoteForm(true);
    closeMenu();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-icon">⚡</span>
            <div className="logo-text">
              <img src={logo} alt="" />
            </div>
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className={isOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item nav-cta">
              <button 
                className="quote-button"
                onClick={openQuoteForm}
              >
                Get Quote
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="modal-overlay" onClick={() => setShowQuoteForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowQuoteForm(false)}
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="modal-header">
              <h2>Request a Quote</h2>
              <p>Fill in your transport details and we'll get back to you with the best rates</p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <label htmlFor="name">
                  <span className="label-icon">👤</span>
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <span className="label-icon">📱</span>
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    pattern="[0-9+\s-()]+"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-icon">✉️</span>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fromLocation">
                    <span className="label-icon">📍</span>
                    From Location <span className="required">*</span>
                  </label>
                  <select
                    id="fromLocation"
                    name="fromLocation"
                    value={formData.fromLocation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select pickup location</option>
                    {maharashtraLocations.map(location => (
                      <option key={`from-${location}`} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="toLocation">
                    <span className="label-icon">🎯</span>
                    To Location <span className="required">*</span>
                  </label>
                  <select
                    id="toLocation"
                    name="toLocation"
                    value={formData.toLocation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select delivery location</option>
                    {maharashtraLocations.map(location => (
                      <option key={`to-${location}`} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cargoDetails">
                  <span className="label-icon">📦</span>
                  Cargo Details & Special Requirements
                </label>
                <textarea
                  id="cargoDetails"
                  name="cargoDetails"
                  value={formData.cargoDetails}
                  onChange={handleInputChange}
                  placeholder="Please provide details about:&#10;• Type of cargo&#10;• Approximate weight & dimensions&#10;• Preferred delivery date&#10;• Any special handling requirements"
                  rows="5"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowQuoteForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;