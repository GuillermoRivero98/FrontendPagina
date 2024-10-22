import React from "react";
import Title from "../../atoms/Title/Title";
import Form from "../../molecules/Form/Form";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./FormSection.scss";

const FormSection = ({ titleText, fields, buttonLabel, onSubmit }) => {
    return (
        <section className="form-section py-5">
            <div className="container">
                <Title text={titleText} level={2} />
                <div className="form-section__content">
                    <Form fields={fields} buttonLabel={buttonLabel} onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
};

export default FormSection;
