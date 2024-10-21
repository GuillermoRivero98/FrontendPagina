import React from "react";
import { useParams } from "react-router-dom";
import Title from "../atoms/Title";
import MainTemplate from "../templates/MainTemplate";
import useFetchArticleById from "../../hook/useFetchArticleById";

const Article = () => {
  const { id } = useParams();
  const { article, loading, error } = useFetchArticleById(id);

  if (loading) {
    return (
      <MainTemplate>
        <p>Cargando...</p>
        {/* Aquí podrías agregar un spinner o componente de carga */}
      </MainTemplate>
    );
  }

  if (error) {
    return (
      <MainTemplate>
        <p>Error: {error}</p>
      </MainTemplate>
    );
  }

  if (!article) {
    return (
      <MainTemplate>
        <p>El artículo no fue encontrado.</p>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <div>
        <Title text={article.title} level={2} />
        <p>{article.author}</p>
        <p>{article.content}</p>
        {/* Otras lógicas como la visualización de archivos binarios en .docx */}
      </div>
    </MainTemplate>
  );
};

export default Article;
