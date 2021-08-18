import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuFn = () => {
    if (isOpen) setIsOpen(false);
    if (!isOpen) setIsOpen(true);
  };
  return (
    <div className="navigation">
      <div className="navigation__trigger">
        {isOpen ? (
          <FaTimes onClick={() => openMenuFn()} />
        ) : (
          <FaBars onClick={() => openMenuFn()} />
        )}
      </div>
      <nav className={`navigation__nav ${isOpen && "navigation__nav--open"}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => openMenuFn()}>
              Strona główna
            </Link>
          </li>
          <li>
            <Link to="/onas" onClick={() => openMenuFn()}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="/galeria" onClick={() => openMenuFn()}>
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/kontakt" onClick={() => openMenuFn()}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
