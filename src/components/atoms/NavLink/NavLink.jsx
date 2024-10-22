import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavLink = ({ to, label, className = '' }) => (
    <Link to={to} className={`nav-link ${className}`}>
        {label}
    </Link>
);

export default NavLink;
