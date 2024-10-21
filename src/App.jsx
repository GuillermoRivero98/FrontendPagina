import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";  
import Footer from "./components/organisms/Footer";  
import Home from "./components/pages/Home"; 
import articleService from "./services/articleService"; 
import "./styles/App.css";


const SubmitArticle = React.lazy(() => import('./components/pages/SubmitArticle'));  
const Article = React.lazy(() => import("./components/pages/Article")); 

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
    return <p>Cargando artículos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Router>
      <Header />  
      <main>
        <React.Suspense fallback={<p>Cargando componente...</p>}>
          <Routes>
            <Route path="/" element={<Home articles={articles} fetchData={fetchData} />} />
            <Route path="/submit" element={<SubmitArticle fetchData={fetchData} />} />
            <Route path="/article/:id" element={<Article articles={articles} />} />
          </Routes>
        </React.Suspense>
      </main>
      <Footer />  
    </Router>
  );
}

export default App;
