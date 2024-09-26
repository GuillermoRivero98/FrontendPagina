import React from "react";
import "./Modal.css";

const Modal = ({ handleClose, show, children }) => {
    if(!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={handleClose}>Cerrar</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;