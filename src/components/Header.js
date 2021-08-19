import React from "react";
import logo from "../img/kociasiec.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">
          <img src={logo} alt="kociasiec.pl" />
        </Link>
      </h1>
      {/* <h1 className="header__title">Bezpieczeństwo to podstawa</h1> */}
    </header>
  );
}
