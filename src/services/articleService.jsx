import axios from "axios";

const API_URL = "http://localhost:3001/api/articles";

const createArticle = async (articleData) => {
  try {
    const response = await axios.post(API_URL, articleData, {
      headers: {
        "Content-Type": "multipart/form-data", // Configuración importante
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el artículo:", error);
    throw error;
  }
};

const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los artículos:", error);
    throw error;
  }
};

// Exporta todas las funciones, incluyendo getArticles y createArticle si también lo tienes
export default {
  getArticles,
  createArticle, // si tienes esta función en el mismo archivo
};
