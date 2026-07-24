import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="container nav-container">

        <a href="#" className="logo">
          NorthPeak<span>Studio</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>

          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <a
            href="#contact"
            className="nav-btn"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>

        </nav>

        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </header>
  );
}

export default Navbar;