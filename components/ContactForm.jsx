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
          placeholder="Name"
        />

        <input
          className="contact__form-input"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
        />

        <input
          className="contact__form-input"
          type="tel"
          name="phone"
          autoComplete="off"
          placeholder="Phone"
        />

        <input
          className="contact__form-text-area"
          type="textarea"
          name="message"
          autoComplete="off"
          placeholder="Message"
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
