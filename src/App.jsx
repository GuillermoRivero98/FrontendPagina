import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import articleService from "./services/articleService";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

const Article = React.lazy(() => import("./components/pages/Article/Article"));
const NotFound = () => <h2>Página no encontrada</h2>;

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const fetchArticles = await articleService.getArticles();
      setArticles(fetchArticles);
    } catch (error) {
      setError("Error al cargar los artículos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando artículos...</span>
        </div>
        <p>Cargando artículos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-5" role="alert">
        {error}
      </div>
    );
  }

  return (
    <Router>
      <main>
        <React.Suspense fallback={<p>Cargando componente...</p>}>
          <Routes>
            <Route path="/" element={<Home articles={articles} fetchData={fetchData} />} />
            <Route path="/article/:id" element={<Article articles={articles} />} />
            <Route path="*" element={<NotFound />} />
          
          </Routes>
        </React.Suspense>
      </main>
    </Router>
  );
}

export default App;
