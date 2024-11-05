import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Title from "../../atoms/Title/Title";
import "./ArticleSection.scss";

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
    <div className="article-card" key={article.id} onClick={() => handleArticleClick(article)}>
      <h2>{article.titulo || "Título no disponible"}</h2>
      <p>{article.contenido || "Descripción no disponible"}</p>
      <p><strong>Autor:</strong> {article.autor || "Autor desconocido"}</p>
    </div>
  ))}
</div>


      {selectedArticle && (
        <Modal show={showModal} handleClose={handleCloseModal}>
          <h2>{selectedArticle.titulo}</h2>
          <p>Escrito por: {selectedArticle.autor}</p>
          <img 
            src={`http://localhost:3001/api/articles/${selectedArticle.id}/foto`} 
            alt="Imagen del artículo" 
            width="200" 
            style={{ marginBottom: "20px" }} 
          />
          <iframe
            src={`http://localhost:3001/api/articles/${selectedArticle.id}/pdf`}
            width="100%"
            height="400px"
            title={selectedArticle.titulo}
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
