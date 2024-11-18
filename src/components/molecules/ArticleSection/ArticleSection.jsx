import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import Title from "../../atoms/Title/Title";
import PdfViewerModal from "../PdfViewerModal"; // Importamos el nuevo visor
import "./ArticleSection.scss";

const ArticleSection = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
  };

  return (
    <div className="article-section">
      {/* Título de la sección */}
      <Title text="Artículos Destacados" />
      <div className="articles-grid">
        {articles.map((article) => (
          <div
            className="article-card"
            key={article.id}
            onClick={() => handleArticleClick(article)}
          >
            <h2>{article.titulo || "Título no disponible"}</h2>
            <p>{article.contenido || "Descripción no disponible"}</p>
            <p>
              <strong>Autor:</strong> {article.autor || "Autor desconocido"}
            </p>
          </div>
        ))}
      </div>

      {/* Modal para visualizar el artículo */}
      {selectedArticle && (
        <Modal show={showModal} handleClose={handleCloseModal}>
          <h2>{selectedArticle.titulo}</h2>
        <div className="author-info">
          <img 
              src={`http://localhost:3001/api/articles/${selectedArticle.id}/foto`} 
              alt="Imagen del autor" 
              className="author-image" 
          />
          <p className="author-text">Escrito por: {selectedArticle.autor}</p>
      </div>



          {/* Visor del PDF */}
          <PdfViewerModal
            pdfUrl={`http://localhost:3001/api/articles/${selectedArticle.id}/pdf`}
            show={true}
            handleClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ArticleSection;
