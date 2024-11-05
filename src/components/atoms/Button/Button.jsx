import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Button.scss';

const Button = ({ children, onClick, loading = false, variant = "primary", disabled = false, type = "button" }) => {
  return (
    <button
      type={type} // Añade el tipo de botón
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
  onClick: PropTypes.func, // Ahora es opcional
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]) // Especifica los tipos permitidos
};

export default Button;
