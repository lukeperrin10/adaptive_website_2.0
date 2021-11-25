import React from "react";

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="contact-us" value="contact" />
      <div className="contact__contact-form-group">
        <input
          className="contact__form-input"
          type="text"
          name="name"
          autoComplete="off"
        />
        <label className="contact__floating-label">Name</label>
      </div>
      <div className="contact__contact-form-group">
        <input
          className="contact__form-input"
          type="text"
          name="email"
          autoComplete="off"
        />
        <label className="contact__floating-label">Email</label>
      </div>
      <div className="contact__contact-form-group">
        <input
          className="contact__form-input"
          type="text"
          name="phone"
          autoComplete="off"
        />
        <label className="contact__floating-label">Phone</label>
      </div>
      <div className="contact__contact-form-group">
        <input
          className="contact__form-text-area"
          type="textarea"
          name="message"
          autoComplete="off"
        />
        <label className="contact__floating-label">Message</label>
      </div>
    </form>
  );
};

export default ContactForm;
