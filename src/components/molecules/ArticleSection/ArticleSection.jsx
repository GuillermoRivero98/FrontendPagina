import React, { useState } from "react";
import Title from "../../atoms/Title/Title";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./ArticleSection.scss";
import Modal from "../Modal/Modal";

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
      <Title text="Artículos Destacados" />
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-box" onClick={() => handleArticleClick(article)}>
            <h4>{article.title}</h4>
            <p>{article.author}</p>
            <p>{article.summary}</p> 
          </div>
        ))}
      </div>

      {selectedArticle && (
        <Modal show={showModal} handleClose={handleCloseModal}>
          <h2>{selectedArticle.title}</h2>
          <p>Escrito por: {selectedArticle.author}</p>
          <iframe
            src={`http://localhost:3001${selectedArticle.pdfPath}`}
            width="100%"
            height="400px"
            title={selectedArticle.title}
            frameBorder="0"
          />
          <button className="btn btn-primary mt-2" onClick={handleCloseModal}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
};

export default ArticleSection;
