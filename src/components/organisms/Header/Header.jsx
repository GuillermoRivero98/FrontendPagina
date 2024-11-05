import React from "react";
import Logo from "../../atoms/Logo/Logo"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Header.scss";

const Header = () => {
  return (
    <header className="header bg-primary text-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <div className="header__logo">
          <Logo />
        </div>

        {/* Título */}
        <h1 className="header__title">CAMINO A PASITOS</h1>
      </div>
    </header>
  );
};

export default Header;
