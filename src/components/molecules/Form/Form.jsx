import React, { useState } from "react";
import PropTypes from 'prop-types';
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Button from "../../atoms/Button/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Form.scss";

const Form = ({ onSubmit, buttonLabel }) => {
  const [formData, setFormData] = useState({
     titulo: '',
     contenido: '',
     autor: '',
     pdf: null,
     foto: null,
  });

  // Manejo de cambios para campos de texto
  const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
        ...formData,
        [name]: value,
     });
     console.log(`Cambio en ${name}:`, value);
  };

  // Manejo de cambios para archivos
  const handleFileChange = (e) => {
     const { name } = e.target;
     setFormData({
        ...formData,
        [name]: e.target.files[0],
     });
     console.log(`Archivo seleccionado en ${name}:`, e.target.files[0]);
  };
  // Configuración de los campos
  const fields = [
    {
      id: 'titulo',
      name: 'titulo',
      label: 'Título',
      type: 'text',
      value: formData.titulo,
      onChange: handleChange,
      placeholder: 'Ingrese el título del artículo',
    },
    {
      id: 'contenido',
      name: 'contenido',
      label: 'Contenido',
      type: 'textarea',
      value: formData.contenido,
      onChange: handleChange,
      placeholder: 'Ingrese el contenido del artículo',
    },
    {
      id: 'autor',
      name: 'autor',
      label: 'Autor',
      type: 'text',
      value: formData.autor,
      onChange: handleChange,
      placeholder: 'Ingrese el nombre del autor',
    },
    {
      id: 'pdf',
      name: 'pdf',
      label: 'Archivo PDF',
      type: 'file',
      onChange: handleFileChange,
    },
    {
      id: 'foto',
      name: 'foto',
      label: 'Foto',
      type: 'file',
      onChange: handleFileChange,
    },
  ];

  return (
    <form className="form" onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div className="form-group" key={index}>
          <Label htmlFor={field.id}>{field.label}</Label>
          <Input
            id={field.id} // Asegura que `id` coincide con `htmlFor`
            type={field.type}
            value={field.type !== 'file' ? field.value : undefined} // Solo pasa `value` si no es un archivo
            onChange={field.onChange}
            placeholder={field.placeholder}
            name={field.name}
          />
        </div>
      ))}
      <Button type="submit">{buttonLabel}</Button> {/* Usa type="submit" */}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default Form;
