import React from "react";
import NavMenu from "../molecules/NavMenu";
import Logo from "../atoms/Logo";
import "../../styles/organisms/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <Logo />
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;