import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
  <img
    src="/images/bglogo.png"
    alt="BG Technology"
    className="logo-image"
  />
</a>

        {/* Desktop Navigation */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            className="nav-btn"
            onClick={closeMenu}
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </header>
  );
}

export default Header;