import React from "react";
import PropTypes from 'prop-types';
import "../../styles/atoms/Input.css";

const Input = ({ type = "text", placeholder, value, onChange, name, disabled = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className="input-field"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;
