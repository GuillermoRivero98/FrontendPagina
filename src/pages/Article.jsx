import React from "react";
import { useParams } from "react-router-dom";
import DocViewer from "react-doc-viewer";
import Title from "../components/Title";
import doc from "../assets/ApuntesCasoNix.docx";
import MainTemplate from "../templates/MainTemplate";

const Article = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <p>Artículo no encontrado o cargando ...</p>;
    }

    console.log(doc);

    return (
        <MainTemplate>
            <div>
                <Title>text={article.title} level={2}</Title>
                <p>{article.author}</p>
                <DocViewer documents={[{ uri: doc }]} />
            </div>
        </MainTemplate>
    );

};

export default Article;