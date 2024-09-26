import React, { useState, useEffect } from 'react';
import { approveArticle } from "../api/approveArticle";

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
    <section className='section'>
      <div className="container">
        <h1 className="title has-text-centered">Bienvenido a Mis Primeros Pasos</h1>
        <p className="subtitle has-text-centered">
          Este es el sitio principal con noticias y artículos sobre la educación en la primera infancia.
        </p>

        <div className="articles-section" >
          <h3 className="title is-4">Artículos Destacados</h3>

          <div className="columns is-multiline">
            {articles.map((article) => (
              <div key={article.id} className="column is-one-third">
                <div className="box">
                  <h4 className="title is-5">{article.title}</h4>
                  <p className="subtitle is-6">{article.author}</p>
                  <div className='content'>
                    <p>{article.content.substring(0, 100)}</p>
                  </div>
                    <button
                      className={`button is-primary is-fullwidth ${approving ? "is-loading" : ""}`}
                      onClick={() => handleApprove(article.id)}
                    >
                      Aprobar
                    </button>
                  </div>
                </div>

            ))}
              </div>
        </div>
        </div>
    </section>
  );
};

export default Home;
