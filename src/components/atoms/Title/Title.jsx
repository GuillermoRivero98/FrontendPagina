import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Title.scss";

const Title = ({ text, level = 1 }) => {
    const Tag = `h${level}`;
    return <Tag className="title">{text}</Tag>;
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};


export default Title; 