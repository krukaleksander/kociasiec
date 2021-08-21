import React, { useState, useEffect } from "react";
import { SiFastly } from "react-icons/si";
import { GiWoodenFence, GiGearHammer, GiPriceTag } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { SiMailchimp } from "react-icons/si";
import ContactForm from "./ContactForm";
export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleShowContactForm = (value) => {
    setShowContactForm(value);
  };
  useEffect(() => {
    if (showContactForm)
      document
        .getElementById("contactForm")
        .scrollIntoView({ behavior: "smooth" });
  }, [showContactForm]);
  return (
    <main>
      <div className="banner">
        <p>
          <strong>Kocia Sieć</strong> - zajmujemy się profesjonalnym
          zabezpieczaniem balkonów i okien przed nieporządanym opuszczeniem
          przez zwierzę domu.
        </p>
      </div>
      <section className="goals">
        <div className="page">
          <ul>
            <li className="fast">
              <span className="icon">
                <SiFastly />
              </span>
              <p>
                <strong>Realizacja</strong> szybka dzięki wielu ekipom
              </p>
            </li>
            <li className="best">
              <span className="icon">
                <GiWoodenFence />
              </span>
              <p>
                <strong>Materiały</strong> tylko najlepsze
              </p>
            </li>
            <li className="pro">
              <span className="icon">
                <GiGearHammer />
              </span>
              <p>
                <strong>Profesjonalizm</strong> i długoletnie doświadczenie
              </p>
            </li>
            <li className="price">
              <span className="icon">
                <GiPriceTag />
              </span>
              <p>
                <strong>Dobre ceny</strong> nieraz o połowę mniejsze od
                konkurencji
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="call">
        <div className="page">
          <h1>ZAPYTAJ O TERMIN JUŻ TERAZ</h1>
        </div>
        <div className="button-container">
          <div className="button">
            <span>
              <FiPhoneCall />
            </span>
            <a href="tel:+48737877821">737 877 821</a>
          </div>
        </div>
        <div className="email">
          <p>Możesz również napisać maila: </p>
          <a href="mailto:kontakt@kociasiec.pl">kontakt@kociasiec.pl</a>
          <div>
            <p>lub zostawić</p>
            <button
              className="email__trigger"
              onClick={() => handleShowContactForm(true)}
            >
              Wiadomość{" "}
              <span>
                <SiMailchimp />
              </span>
            </button>
          </div>
        </div>
      </section>
      {showContactForm && (
        <ContactForm handleShowContactForm={handleShowContactForm} />
      )}
    </main>
  );
}
