import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ArticleSection from "../../molecules/ArticleSection/ArticleSection";
import Modal from "../../molecules/Modal/Modal"; // Asegúrate de que tu Modal sea el correcto
import AuthorModal from "../../molecules/AuthorModal/AuthorModal";
import useArticles from '../../../hook/useArticles';
import SubmitArticle from '../../molecules/SubmitArticle/SubmitArticle'; // Importa el componente SubmitArticle
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.scss';
import Title from '../../atoms/Title/Title';

const Home = () => {
  const { articles, loading, error } = useArticles(); 
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [authorModalVisible, setAuthorModalVisible] = useState(false);
  const [submitModalVisible, setSubmitModalVisible] = useState(false); // Estado para el modal de Submit

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedArticle(null);
    setAuthorModalVisible(false); 
  };

  const handleOpenSubmitModal = () => {
    setSubmitModalVisible(true); // Abre el modal para enviar artículo
  };

  const handleCloseSubmitModal = () => {
    setSubmitModalVisible(false); // Cierra el modal para enviar artículo
  };

  if (loading) {
    return (
      <MainTemplate>
        <div className="text-center mt-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando artículos...</span>
          </div>
        </div>
      </MainTemplate>
    );
  }

  if (error) {
    return (
      <MainTemplate>
        <div className="alert alert-danger text-center mt-5" role="alert">
          Error al cargar los artículos: {error}
        </div>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <div className="container mt-4">
        <Title text="CAMINO A PASITOS" level={1} className="text-center mb-4" />
        <button className="btn btn-primary mb-3" onClick={handleOpenSubmitModal}>
          Enviar Artículo
        </button>
        <ArticleSection articles={articles} onArticleClick={handleArticleClick} />
      </div>

      <Modal show={modalVisible} handleClose={handleCloseModal}>
        {selectedArticle && (
          <div className="article-modal">
            <h2>{selectedArticle.title}</h2>
            <img 
              src={selectedArticle.authorImage} 
              alt={selectedArticle.author} 
              className="img-fluid mb-3"
            />
            <p>{selectedArticle.content}</p>
          </div>
        )}
      </Modal>

      {selectedArticle && (
        <AuthorModal show={authorModalVisible} handleClose={() => setAuthorModalVisible(false)}>
          <div className="author-modal">
            <h3>{selectedArticle.author}</h3>
            <img 
              src={selectedArticle.authorImage} 
              alt={selectedArticle.author} 
              className="img-fluid mb-3"
            />
            <p>{selectedArticle.authorBio}</p>
          </div>
        </AuthorModal>
      )}

      {submitModalVisible && (
        <SubmitArticle fetchData={handleCloseSubmitModal} handleClose={handleCloseSubmitModal} />
      )}
    </MainTemplate>
  );
};

export default Home;
