import React, { useState } from "react";
import apiClient from "../api/apiClient";
import MainTemplate from "../templates/MainTemplate";
import Form from "../components/Form";
import { type } from "@testing-library/user-event/dist/type";

const SubmitArticle = ({ fetchData }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await createArticle({ title, author, content });
            fetchData();
            setTitle('');
            setAuthor('');
            setContent('');
            alert('Artículo enviado exitosamente');
        } catch (error) {
            console.error('Error al crear el artículo', error);
        } finally {
            setSubmitting(false);
        };

        const fields = [
            { name: "title", label: "Título", type: "text", value: title, onChange: setTitle(e.target.value) },
            { name: "author", label: "Autor", type: "text", value: author, onChange: setAuthor(e.target.value) },
            { name: "content", label: "Contenido", type: "textarea", value: content, onChange: setContent(e.target.value) }
        ]

        return (
            <MainTemplate>
                <Form fields={fields} onSubmit={handleSubmit} submitting={submitting} />
            </MainTemplate>
        );
    };
};


export default SubmitArticle;