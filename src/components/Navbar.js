import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <span className="text-white text-2xl font-semibold">Avenra</span>
        </div>

        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex-col md:flex-row items-center md:flex gap-6 p-5 md:p-0 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link to="/" className="text-white hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-500 transition-colors">
            About
          </Link>
          <Link to="/FAQ" className="text-white hover:text-yellow-500 transition-colors">
            FAQ
          </Link>
          <Link to="/services" className="text-white hover:text-yellow-500 transition-colors">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-500 transition-colors">
            Contact
          </Link>
        </div>

        <div className="text-white md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
