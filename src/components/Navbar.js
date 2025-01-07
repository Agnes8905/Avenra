import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
// import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src={logo} alt="Logo" className="logo-img" /> */}
          <span className="logo-text">Avenra</span>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/" className="navbar-link">
            Home
          </a>
          <a href="/about" className="navbar-link">
            About
          </a>
          <a href="/services" className="navbar-link">
            Services
          </a>
          <a href="/contact" className="navbar-link">
            Contact
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
