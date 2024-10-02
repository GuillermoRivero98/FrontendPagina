import React from "react";
import "./Input.css";

const Input = ({ type = "text", placeholder, value, onChange }) => {
    return (
        <input
            className="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
        />
    );
}

export default Input;