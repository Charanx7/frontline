import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="nav">
        <i className="uil uil-bars navOpenBtn"></i>
        <a href="/" className="logo">Frontline</a>    
        <ul className="nav-links">
          <i className="uil uil-times navCloseBtn"></i>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="#">Contact Us</Link></li>
        </ul>
        <div className="nav-buttons">
          <Link to="/login" className="btn btn-pri">Login</Link>
          <Link to="/signup" className="btn btn-sec">Signup</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;

