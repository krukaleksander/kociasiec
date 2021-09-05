import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { GiPhone } from "react-icons/gi";
export default function ContactForm({ handleShowContactForm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");
  const [sending, setSending] = useState(false);

  const cleanFn = () => {
    setName("");
    setPhone("");
    setMessage("");
    setError("");
  };

  const validateFn = () => {
    if (name.length < 1) {
      return setError("Jak masz na imię?");
    } else if (phone.length < 9) {
      return setError("Nr tel jest za krótki");
    } else if (message.length < 1) {
      return setError("Podaj treść wiadomości");
    } else return true;
  };
  const handleSetMessage = () => {
    if (validateFn()) {
      setSending(true);
      let data = new URLSearchParams();

      data.append("clientName", name);
      data.append("clientPhone", phone);
      data.append("clientMessage", message);
      fetch(`https://energy2000.herokuapp.com/kociasiec-msg`, {
        method: "post",
        body: data,
      })
        .then((response) => response.text())
        .then((text) => {
          setError("");
          setInfo(text);
          setSending(false);
        })
        .then(() => cleanFn())
        .catch((err) => console.log(err));
    }
  };
  return (
    <div id="contactForm">
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setError("")}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => setError("")}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setError("")}
        />
      </div>
      {error && <p className="error">{error}</p>}
      {info && <p className="info">{info}</p>}
      {!sending ? (
        <button onClick={handleSetMessage}>Wyślij</button>
      ) : (
        <div className="sending">
          <p className="sending__info">Wysyłanie wiadomości...</p>
          <div className="sending__ring"></div>
        </div>
      )}
    </div>
  );
}
