import React from "react";
import { useParams } from "react-router-dom";
import DocViewer from "react-doc-viewer";

import doc from "../assets/ApuntesCasoNix.docx";

const Article = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if(!article){
        return <p>Artículo no encontrado o cargando ...</p>;
    }

    console.log(doc);

    return (
        <div>
            {article ? (
                <div>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <DocViewer documents={doc} />
                </div>
            ) : (
                <p>Artículo no encontrado</p>
            )}
        </div>
    );

};

export default Article;