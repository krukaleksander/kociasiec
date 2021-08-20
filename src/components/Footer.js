import React from "react";
import { BiShieldAlt2 } from "react-icons/bi";
export default function Footer() {
  return (
    <footer>
      <div className="page">
        <div>
          <div className="shield">
            <BiShieldAlt2 />
          </div>
          <h2>kocia sieć</h2>
          <h3>bezpieczeństwo to podstawa</h3>
        </div>
        <div className="social">
          <p>
            <a
              target="_blank"
              href="https://www.facebook.com/search/top?q=bezpieczny%20kot%20-%20siatki%20dla%20kot%C3%B3w"
            >
              @BezpiecznyKot
            </a>
            <span>na Facebook</span>
            <small>Copyright © 2021</small>
          </p>
        </div>
      </div>
    </footer>
  );
}
