import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Input.scss';

const Input = ({ type = "text", placeholder, value, onChange, name, disabled = false, isInvalid = false }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={type !== 'file' ? value : undefined} // No establece `value` si el tipo es "file"
      onChange={onChange}
      name={name}
      disabled={disabled}
      className={`form-control ${isInvalid ? 'is-invalid' : ''}`} 
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string, // Cambiado a opcional
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool, 
};

export default Input;
