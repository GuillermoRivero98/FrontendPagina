import React from "react";
import { Link } from "react-router-dom";
import logoImage from './Logo.webp';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Logo.scss";


const Logo = () => (
    <Link to="/" className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
    </Link>
);

export default Logo;
