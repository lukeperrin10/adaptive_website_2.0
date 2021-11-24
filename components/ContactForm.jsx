import React from "react";

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="contact-us" value="contact" />
      <p className="contact__contact-form">
        <input
          className="contact__form-input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="contact__form-input"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="contact__form-input"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <input className="contact__form-text-area" type="textarea" name="message" placeholder="Message" />
      </p>
    </form>
  );
};

export default ContactForm;
