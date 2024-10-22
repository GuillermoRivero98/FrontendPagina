import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../atoms/Title/Title";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import useFetchArticleById from "../../../hook/useFetchArticleById";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Article = () => {
  const { id } = useParams();
  const { article, loading, error } = useFetchArticleById(id);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (loading) {
    return (
      <MainTemplate>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </MainTemplate>
    );
  }

  if (error) {
    return (
      <MainTemplate>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </MainTemplate>
    );
  }

  if (!article) {
    return (
      <MainTemplate>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Advertencia:</strong>
          <span className="block sm:inline"> El artículo no fue encontrado.</span>
        </div>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8">
        <Title text={article.title} level={2} />
        <p className="text-gray-600 mb-4">Autor: {article.author}</p>
        <div className="article-content">
          <Document
            file={`http://localhost:3001${article.content}`}  // Asegúrate que esto sea correcto
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => {
              console.error('Error loading PDF:', error);
              alert('Error al cargar el PDF, verifique la URL.');
            }}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setPageNumber(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <p>
              Página {pageNumber} de {numPages}
            </p>
            <button
              onClick={() => setPageNumber(pageNumber + 1)}
              disabled={pageNumber >= numPages}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Article;
