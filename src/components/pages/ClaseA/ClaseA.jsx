// ClaseA.jsx
import React, { useEffect, useState } from 'react';
import articleService from '../../../services/articleService';
import ArticleSection from "../../molecules/ArticleSection/ArticleSection";

const ClaseA = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await articleService.getArticlesByClass('camino-a-pasitos');
            setArticles(data);
        };
        fetchArticles();
    }, []);

    return (
        <div className="container mt-4">
            <h1>Camino a Pasitos</h1>
            <ArticleSection articles={articles} />
        </div>
    );
};

export default ClaseA;