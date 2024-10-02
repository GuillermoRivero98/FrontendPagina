import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = ({ to, label }) => (
    <Link to={to} className="nav-link">
        {label}
    </Link>
);

export default NavLink;