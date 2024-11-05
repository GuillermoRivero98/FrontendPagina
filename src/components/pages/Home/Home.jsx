import React, { useState } from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ArticleSection from "../../molecules/ArticleSection/ArticleSection";
import Modal from "../../molecules/Modal/Modal";
import SubmitArticle from '../../molecules/SubmitArticle/SubmitArticle'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.scss';

const Home = ({ articles, fetchData }) => {  

    const [selectedArticle, setSelectedArticle] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [submitModalVisible, setSubmitModalVisible] = useState(false);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedArticle(null);
    };

    const handleOpenSubmitModal = () => {
        setSubmitModalVisible(true);
    };

    const handleCloseSubmitModal = () => {
        setSubmitModalVisible(false);
    };

    return (
        <MainTemplate>
            {/* Botón de Enviar Artículo en la esquina */}
            <div className="button-container">
                <button
                    className="btn btn-primary"
                    onClick={handleOpenSubmitModal}
                >
                    Enviar Artículo
                </button>
            </div>

            <div className="container mt-4">
                <ArticleSection articles={articles} onArticleClick={handleArticleClick} />
            </div>

            {/* Modal para ver artículo */}
            <Modal show={modalVisible} handleClose={handleCloseModal}>
                {selectedArticle && (
                    <div className="article-modal">
                        <h2>{selectedArticle.title}</h2>
                        <p>{selectedArticle.content}</p>
                    </div>
                )}
            </Modal>

            {/* Modal para enviar artículo */}
            <Modal show={submitModalVisible} handleClose={handleCloseSubmitModal} title="Enviar Artículo">
                <SubmitArticle fetchData={fetchData} handleClose={handleCloseSubmitModal} />
            </Modal>
        </MainTemplate>
    );
};

export default Home;
