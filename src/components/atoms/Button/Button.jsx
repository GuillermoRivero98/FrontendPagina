import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Button.scss';

const Button = ({ children, onClick, loading = false, variant = "primary", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} ${loading ? "disabled" : ""}`}
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
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  disabled: PropTypes.bool,
};

export default Button;
