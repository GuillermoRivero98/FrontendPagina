import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthorModal = ({ handleClose, show, children }) => {
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
    <div className="modal-overlay" onClick={handleClose} role="dialog" aria-labelledby="modal-title">
      <div className="modal-content" aria-modal="true">
        <button className="modal-close" onClick={handleClose} aria-label="Cerrar modal">Cerrar</button>
        {children}
      </div>
    </div>
  );
};

export default AuthorModal;
