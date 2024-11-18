// ClaseB.jsx
import React, { useEffect, useState } from 'react';
import articleService from '../../../services/articleService';
import ArticleSection from "../../molecules/ArticleSection/ArticleSection";

const ClaseB = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await articleService.getArticlesByClass('la-quermesina');
            setArticles(data);
        };
        fetchArticles();
    }, []);

    return (
        <div className="container mt-4">
            <h1>La Quermesina</h1>
            <ArticleSection articles={articles} />
        </div>
    );
};

export default ClaseB;