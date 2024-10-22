import React from "react";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import Logo from "../../atoms/Logo/Logo"; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Header.scss";

const Header = () => {
  return (
    <header className="header bg-primary text-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="header__logo">
            <Logo />
          </div>
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
