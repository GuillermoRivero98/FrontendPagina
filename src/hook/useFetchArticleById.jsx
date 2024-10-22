import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchArticleById = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 

    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/articles/${id}`);
        if (isMounted) { 
          setArticle(response.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchArticle();

    return () => {
      isMounted = false; 
    };
  }, [id]);

  return { article, loading, error };
};

export default useFetchArticleById;
