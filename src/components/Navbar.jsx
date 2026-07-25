import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a
          href="#"
          className="logo"
          aria-label="NorthPeak Digital Home"
        >
          NorthPeak<span>Digital</span>
        </a>

        <nav
          className={menuOpen ? "nav-links active" : "nav-links"}
          aria-label="Primary Navigation"
        >
          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Testimonials
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="nav-btn"
            onClick={closeMenu}
            aria-label="Get Started"
          >
            Get Started
          </a>
        </nav>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;