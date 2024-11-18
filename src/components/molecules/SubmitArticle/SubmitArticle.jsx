import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección
import articleService from '../../../services/articleService';

const SubmitArticle = ({ fetchData, handleClose }) => {
  const navigate = useNavigate(); // Inicializa el hook de navegación
  const [formData, setFormData] = useState({
    titulo: '',
    contenido: '',
    autor: '',
    pdf: null,
    foto: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Debes iniciar sesión para enviar un artículo.');
      navigate('/login'); // Redirigir si no está autenticado
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('titulo', formData.titulo);
    data.append('contenido', formData.contenido);
    data.append('autor', formData.autor);
    if (formData.pdf) data.append('pdf', formData.pdf);
    if (formData.foto) data.append('foto', formData.foto);

    try {
      await articleService.createArticle(data);
      fetchData(); // Actualiza los artículos en el frontend
      handleClose(); // Cierra el modal al finalizar
      alert('Artículo enviado exitosamente');
    } catch (error) {
      console.error('Error al crear el artículo:', error);
      alert('Ocurrió un error al enviar el artículo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="titulo"
        placeholder="  Título"
        value={formData.titulo}
        onChange={handleChange}
      />
      <textarea
        name="contenido"
        placeholder="Contenido"
        value={formData.contenido}
        onChange={handleChange}
      />
      <input
        name="autor"
        placeholder="  Autor"
        value={formData.autor}
        onChange={handleChange}
      />
      <input
        type="file"
        name="pdf"
        onChange={handleFileChange}
      />
      <input
        type="file"
        name="foto"
        onChange={handleFileChange}
      />
      <button type="submit">Enviar Artículo</button>
    </form>
  );
};

export default SubmitArticle;
