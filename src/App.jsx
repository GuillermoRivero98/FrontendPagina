import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import New from "./pages/News";
import Article from "./pages/Article";
import SubmitArticle from "./pages/SubmitArticle";
import { getArticles } from "./api/getArticles"
import 'bulma/css/bulma.min.css';
import './App.css';


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchData = async () => {
  try{
    const fetchArticles= await getArticles();
    
    setArticles(fetchArticles);
  }catch(error){
    setError("Error al cargar los artículos");
  }finally{
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
        <Routes>
          <Route path="/" element={<Home articles={articles} fetchData={fetchData}/>} />
          <Route path="/new" element={<New articles={articles} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />
          <Route path="/submit" element={<SubmitArticle />} />
        </Routes>
      </main>
      <footer class="custom-footer">
        <p>&copy; 2024 Revista Primera Infancia. Todos los derechos reservados.</p>
      </footer>
    </Router>
  );
}


export default App;

