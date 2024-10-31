import React, { useState, useEffect } from "react";
import Title from "../../atoms/Title/Title";
import "./ArticleSection.scss";
import Modal from "../Modal/Modal";

const ArticleSection = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingPDF, setLoadingPDF] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
    setLoadingPDF(true);
    setPdfError(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedArticle(null);
    // Reset loading state when modal is closed
    setLoadingPDF(false);
    setPdfError(false);
  };

  // Effect to reset loading states when modal opens
  useEffect(() => {
    if (showModal) {
      setLoadingPDF(true);
      setPdfError(false);
    }
  }, [showModal]);

  return (
    <div className="article-section">
      <Title text="Artículos Destacados" />
      <div className="articles-grid">
        {articles.map((article) => (
          <div
            key={article._id}
            className="article-box"
            onClick={() => handleArticleClick(article)}
          >
            <h4>{article.title}</h4>
            <p>{article.author}</p>
            <p>{article.content ? article.content.substring(0, 100) + '...' : 'Sin resumen'}</p>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <Modal 
          show={showModal} 
          handleClose={handleCloseModal} 
          title={selectedArticle.title} // Pass the article title as the modal title
        >
          <h2>{selectedArticle.title}</h2>
          <p>Escrito por: {selectedArticle.author}</p>

          {loadingPDF && <div className="loading-indicator">Cargando PDF...</div>}
          
          {!loadingPDF && pdfError && (
            <div className="error-message">
              Error al cargar el PDF. Verifique la URL.
            </div>
          )}
          
          <iframe
            src={`http://localhost:3001${selectedArticle.filePath}`}
            width="100%"
            height="400px"
            title={selectedArticle.title}
            frameBorder="0"
            onLoad={() => {
              setLoadingPDF(false);
              setPdfError(false); // Reset error state on successful load
            }}
            onError={() => {
              setLoadingPDF(false);
              setPdfError(true);
            }}
          />
          <button className="btn btn-primary mt-2" onClick={handleCloseModal}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
};

export default ArticleSection;
