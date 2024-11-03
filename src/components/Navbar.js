import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/about" className="nav-button">About</Link>
      <Link to="/products" className="nav-button">Products</Link>
      <Link to="/contact" className="nav-button">Contact</Link>
    </nav>
  );
};

export default Navbar;



