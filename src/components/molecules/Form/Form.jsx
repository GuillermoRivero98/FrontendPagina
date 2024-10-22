import React from "react";
import PropTypes from 'prop-types';
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Button from "../../atoms/Button/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Form.scss";

const Form = ({ fields, onSubmit, buttonLabel }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div className="form-group" key={index}>
          <Label htmlFor={field.id}>{field.label}</Label>
          <Input
            type={field.type}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            name={field.name}
          />
        </div>
      ))}
      <Button>{buttonLabel}</Button>
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default Form;
