import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src="logo.svg" alt="Logo" className="logo" />
        </Link>
        <div
          className={`burger-menu ${isActive ? "is-active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <Link to="/" className="navbar-item">Inicio</Link>
          <Link to="/news" className="navbar-item">Noticias</Link>
          <Link to="/submit-article" className="navbar-item">Escribir Artículo</Link>
      </div>
          
    </nav>
  );
};

export default Header;