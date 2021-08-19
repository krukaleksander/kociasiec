import React from "react";
import { SiFastly } from "react-icons/si";
import { GiWoodenFence, GiGearHammer, GiPriceTag } from "react-icons/gi";
export default function Home() {
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
    </main>
  );
}
