import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
 
    emailjs
      .sendForm(
        'service_nandhu',
        'template_0gjr9mt',
        formRef.current,
        'xCMURfjg29oZ8mMtJ'
        
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nandhujkn02@gmail.com</h5>
            <a href="mailto:nandhujkn02@gmail.com" target="_blank">Send a Email</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Mobile No</h4>
            <h5><a href="tel:+919600817157" target="_blank">9600817157 </a></h5>
           <a href="https://wa.me/+919600817157?text=hi,I'M Nandhu " target="_blank">Send a message</a>
          </article>
        </div>
        
        
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
