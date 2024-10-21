import { createContext, useContext, useState, useEffect } from "react";
import apiClient from "../services/articleService";

const ArticlesContext = createContext();

export const useArticles = () => {
    return useContext(ArticlesContext);
};

export const ArticlesProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articlesData = await apiClient.getArticles();
                setArticles(articlesData);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar los artículos", error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <ArticlesContext.Provider value={{ articles, loading }}>
            {children}
        </ArticlesContext.Provider>
    );
};


export default ArticlesContext;