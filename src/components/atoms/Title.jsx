import React from "react";
import PropTypes from "prop-types";
import "../../styles/atoms/Title.css";

const Title = ({ text, level = 1 }) => {
    const Tag = `h${level}`;
    return <Tag className="title">{text}</Tag>;
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};


export default Title;