import { useState, useEffect } from 'react';
import articleService from '../services/articleService';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await articleService.getArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError('Error al cargar los artículos');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useArticles;
