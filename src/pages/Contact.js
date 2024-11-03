import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name"><b>Name</b></label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message"><b>Message</b></label>
        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit"><b>Send Message</b></button>
      </form>
    </div>
  );
};

export default Contact;



