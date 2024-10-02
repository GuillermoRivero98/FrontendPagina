import React from "react";
import "./Modal.css";

const Modal = ({
    hadleClose,
    show,
    children,
    size = "medium",
    color = "white",
    closeOnOutsideClick = true,
    showCloseButton = true

}) => {
    if (!show) return null;

    const handleClose = (e) => {
        if (closeOnOutsideClick && e.target === e.currentTarget) {
            hadleClose();
        }
    };

    const modalSizeClass = "modal-${size}";
    const modalColorClass = "modal-${color}";

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className={"modal-content ${modalSizeClass} ${modalColorClass}"}>
                {showCloseButton && (
                    <button className="modal-close" onClick={handleClose}>Cerrar</button>
                )}
                {children}
            </div>
        </div>
    );
};

export default Modal;