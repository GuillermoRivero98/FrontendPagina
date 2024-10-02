import React, { useState, useEffect } from 'react';
import { approveArticle } from "../api/approveArticle";
import Button from '../components/Button';

const Home = ({ articles, fetchData }) => {
  const [approving, setApproving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, [fetchData]);

  const handleApprove = async (articleId) => {
    try {
      setApproving(true);
      await approveArticle(articleId);
      fetchData();
      alert("Artículo aprobado correctamente");
    } catch (error) {
      console.error("Error al aprobar el artículo", error);
    } finally {
      setApproving(false);
    }
  };
  if (loading) {
    return (
      <section className="section">
        <div className="container has-text-centered">
          <progress className="progress is-small is-primary" max="100" />
          <h2 className="title is-4">Cargando artículos...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="articles-section">
      <div className="container">
        <h1 className="centered">Bienvenido a Mis Primeros Pasos</h1>
        <p className="centered">
          Noticias y artículos sobre educación en la primera infancia.
        </p>

        <div className="articles-grid" >
          {articles.map((article) => (
            <div key={article.id} className="article-box">
              <h4>{article.title}</h4>
              <p>{article.author}</p>
              <div>
                <p>{article.content.substring(0, 100)}...</p>
              </div>
              <Button onClick={() => handleApprove(article.id)} loading={approving}>
                Aprobar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
