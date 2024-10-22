import React, { useState } from "react";
import Modal from "../../molecules/Modal/Modal";
import Form from "../../molecules/Form/Form";
import articleService from "../../../services/articleService";
import 'bootstrap/dist/css/bootstrap.min.css';

const SubmitArticle = ({ fetchData, handleClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('pdf', pdfFile); // Cambia aquí para agregar el archivo PDF

    try {
      await articleService.createArticle(formData); // Cambia aquí
      fetchData();
      setTitle('');
      setAuthor('');
      setPdfFile(null);
      alert('Artículo enviado exitosamente');
      handleClose(); // Cierra el modal después de enviar
    } catch (error) {
      console.error('Error al crear el artículo', error);
      alert('Error al enviar el artículo.');
    }
  };

  const fields = [
    { name: "title", label: "Título", type: "text", value: title, onChange: (e) => setTitle(e.target.value) },
    { name: "author", label: "Autor", type: "text", value: author, onChange: (e) => setAuthor(e.target.value) },
    { name: "pdf", label: "Archivo PDF", type: "file", onChange: (e) => setPdfFile(e.target.files[0]) }
  ];

  return (
    <Modal show={true} handleClose={handleClose}>
      <h2 className="text-center mb-3">Enviar Artículo</h2>
      <Form fields={fields} onSubmit={handleSubmit} buttonLabel="Enviar Artículo" />
    </Modal>
  );
};

export default SubmitArticle;
