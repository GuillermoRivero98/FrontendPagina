import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import './Modal.scss'; // Archivo de estilos

const Modal = ({ show, handleClose, title, children }) => {
  return (
    <BootstrapModal
      show={show}
      onHide={handleClose}
      dialogClassName="modal-90w" // Clase personalizada para el tamaño
      size="lg" // Tamaño grande del modal
      centered // Para centrar el modal en la pantalla
      aria-labelledby="modal-title" // Accessibility attribute
    >
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {children}
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;
