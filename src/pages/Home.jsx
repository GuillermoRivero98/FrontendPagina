import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import ArticleSection from '../components/ArticleSection';
import MainTemplate from '../templates/MainTemplate';


const Home = ({ articles, fetchData }) => {
  const [approving, setApproving] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const articlesData = await apiClient.getArticles();
      setArticles(articlesData);
      setLoading(false);
    };
    fetchData();
  }, []);

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

  if (loading) {
    return <MainTemplate><p>Cargando...</p></MainTemplate>;
  }

  return (
    <MainTemplate>
      <ArticleSection articles={articles} />
    </MainTemplate>
  );
};

export default Home;
