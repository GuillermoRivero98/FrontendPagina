import React from "react";
import Title from "../atoms/Title";
import "../../styles/molecules/ArticleSection.css";

const ArticleSection = ({ articles, onArticleClick }) => {
  return (
    <div className="article-section">
      <Title text="Artículos Destacados" />
      <div className="articles-grid">
        {articles.map((article) => (
          <div key={article.id} className="article-box" onClick={() => onArticleClick(article)}>
            <h4>{article.title}</h4>
            <p>{article.author}</p>
            <p>{article.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSection;
