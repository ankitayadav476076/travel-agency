import React, { useState } from 'react';
import './quoteModal.css';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromLocation: '',
    toLocation: '',
    cargoDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const maharashtraLocations = [
    'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 
    'Kolhapur', 'Amravati', 'Akola', 'Latur', 'Dhule', 'Ahmednagar',
    'Chandrapur', 'Jalgaon', 'Nanded', 'Sangli', 'Shirdi', 'Ratnagiri',
    'Satara', 'Parbhani', 'Yavatmal', 'Beed', 'Osmanabad', 'Wardha'
  ];

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
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        fromLocation: '',
        toLocation: '',
        cargoDetails: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="quote-page">
      <div className="quote-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Request a Quote</h1>
          <p>Get competitive pricing for your logistics needs across Maharashtra</p>
        </div>
      </div>

      <div className="quote-container">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Quote Request Submitted!</h2>
            <p>Thank you for choosing Krishna Roadlines. Our team will contact you within 24 hours with the best rates for your shipment.</p>
          </div>
        ) : (
          <div className="quote-form-wrapper">
            <div className="form-intro">
              <h2>Fill in Your Transport Details</h2>
              <p>Provide us with your shipping information and we'll get back to you with competitive rates</p>
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
                <button type="submit" className="btn-submit">
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotePage;