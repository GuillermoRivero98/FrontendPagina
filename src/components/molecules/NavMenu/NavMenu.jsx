import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom"; // Cambia el nombre a RouterNavLink para evitar confusión con el componente personalizado
import 'bootstrap/dist/css/bootstrap.min.css';  
import './NavMenu.scss'; 

const NavMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${isActive ? 'is-active' : ''}`}>
      <div className="container-fluid">
        <RouterNavLink to="/" className="navbar-brand">
          Mi Sitio
        </RouterNavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsActive(!isActive)}
          aria-controls="navbarNav"
          aria-expanded={isActive ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Align right */}
            <li className="nav-item">
              <RouterNavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Inicio
              </RouterNavLink>
            </li>
            <li className="nav-item">
              <RouterNavLink 
                to="/news" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Noticias
              </RouterNavLink>
            </li>
            <li className="nav-item">
              <RouterNavLink 
                to="/submit-article" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Escribir Artículo
              </RouterNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
