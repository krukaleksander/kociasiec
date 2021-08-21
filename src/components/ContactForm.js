import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { GiPhone } from "react-icons/gi";
export default function ContactForm({ handleShowContactForm }) {
  return (
    <form id="contactForm">
      <div className="close">
        <AiOutlineClose onClick={() => handleShowContactForm(false)} />
      </div>
      <h1>
        <FiMail />
      </h1>
      <div className="input-wrapper">
        <label htmlFor="contact-name">
          <BsPersonFill />
        </label>
        <input
          type="text"
          placeholder="Twoje imię"
          className="contact-name"
          name="contact-name"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="contact-phone">
          <GiPhone />
        </label>
        <input
          type="text"
          placeholder="Telefon"
          className="contact-phone"
          name="contact-phone"
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="contact-message" className="message-label">
          <FiMail />
        </label>
        <textarea
          type="text"
          placeholder="Wiadomość"
          className="contact-messsage"
          name="contact-message"
        />
      </div>
      <button>Wyślij</button>
    </form>
  );
}
