import React, { useState } from 'react';
import MainTemplate from '../templates/MainTemplate'; 
import ArticleSection from '../molecules/ArticleSection';
import Modal from '../molecules/Modal'; 
import AuthorModal from '../molecules/AuthorModal'; 
import useArticles from '../../hook/useArticles';
import '../../styles/pages/Home.css';

const Home = () => {
  const { articles, loading, error } = useArticles(); 
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [authorModalVisible, setAuthorModalVisible] = useState(false);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedArticle(null);
  };

  const handleAuthorClick = () => {
    setAuthorModalVisible(true);
  };

  const handleCloseAuthorModal = () => {
    setAuthorModalVisible(false);
  };

  if (loading) {
    return (
      <MainTemplate>
        <p>Cargando artículos...</p>
      </MainTemplate>
    );
  }

  if (error) {
    return (
      <MainTemplate>
        <p>Error al cargar los artículos: {error}</p>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <ArticleSection articles={articles} onArticleClick={handleArticleClick} />

      <Modal show={modalVisible} handleClose={handleCloseModal}>
        {selectedArticle && (
          <div>
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
            <button onClick={handleAuthorClick}>Leer sobre el autor</button>
          </div>
        )}
      </Modal>

      <AuthorModal show={authorModalVisible} handleClose={handleCloseAuthorModal}>
        {selectedArticle && (
          <div>
            <h3>{selectedArticle.author}</h3>
            <img src={selectedArticle.authorImage} alt={selectedArticle.author} />
            <p>{selectedArticle.authorBio}</p>
          </div>
        )}
      </AuthorModal>
    </MainTemplate>
  );
};

export default Home;
