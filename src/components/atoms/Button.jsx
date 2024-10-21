import React from "react";
import PropTypes from 'prop-types';
import "../../styles/atoms/Button.css";

const Button = ({ children, onClick, loading = false, style = {}, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`custom-button ${loading ? "loading" : ""}`}
      disabled={loading || disabled}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Button;
