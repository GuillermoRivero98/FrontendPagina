import React from "react";
import "./Title.css";

const Title = ({ text, level = 1 }) => {
    const Tag = `h${level}`;
    return <Tag className="title">{text}</Tag>;
};


export default Title;