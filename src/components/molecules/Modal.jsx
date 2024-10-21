import React, { useEffect } from "react";
import "../../styles/molecules/Modal.css";

const Modal = ({ handleClose, show, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>Cerrar</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
