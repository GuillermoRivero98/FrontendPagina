import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchArticleById = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Agregar flag para evitar la actualización en un componente desmontado

    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/articles/${id}`);
        if (isMounted) { // Verifica si el componente sigue montado
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
      isMounted = false; // Marca como desmontado cuando el componente se desmonte
    };
  }, [id]);

  return { article, loading, error };
};

export default useFetchArticleById;
