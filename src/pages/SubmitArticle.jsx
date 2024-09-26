import React, { useState } from "react";
import { createArticle } from '../api/createArticle';

const SubmitArticle = ({ fetchData }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [submitting, setSubmitting] = useState(false);

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
        }finally{
            setSubmitting(false);
        };

        return (
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Escribir un Artículo</h1>
                    <p className="subtitle has-text-centered">Comparte tus ideas sobre la educación en la primera infancia</p>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Título</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Escribe el título del artículo"
                                    required
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Autor</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    placeholder="Escribe el nombre del autor"
                                    required
                                />
                            </div>

                            <div className="field">
                                <label className="label">Contenido</label>
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        placeholder="Escribe el contenido del artículo"
                                        required
                                    />
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-primary">Enviar</button>
                                    </div>
                                    <div className="control">
                                        <button type="reset" className="button is-light" onClick={() => {
                                            setTitle('');
                                            setAuthor('');
                                            setContent('');
                                        }}>Limpiar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
};

export default SubmitArticle;