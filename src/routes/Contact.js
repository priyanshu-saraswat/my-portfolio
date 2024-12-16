import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaUser, FaEnvelope, FaComment, FaMailBulk } from 'react-icons/fa';
import PhoneIcon from '../assets/icons/phone.svg'
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic for form submission to Google Forms or any other desired service here
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="left-content">
          <h1>Get in Touch</h1>
          <div className="blue-underline"></div>
          <h2>DON'T BE SHY</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaMailBulk />
              <p>Mail me</p>
              <p>priyanshu.saraswat13@gmail.com</p>
            </div>
            <div className="contact-item">
            <img src={PhoneIcon} alt="Phone" className="phone-icon" />
              <p>Call me</p>
              <p>(+91)70000-37187</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-field">
              <label htmlFor="name">
                <FaUser /> Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">
                <FaEnvelope /> Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field message-field">
              <label htmlFor="message">
                <FaComment /> Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-field">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
