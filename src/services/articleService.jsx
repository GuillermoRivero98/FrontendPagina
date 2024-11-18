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

// Nueva función para obtener artículos por clase
const getArticlesByClass = async (className) => {
  try {
      const response = await axios.get(`${API_URL}/${className}`);
      return response.data;
  } catch (error) {
      console.error(`Error al obtener los artículos de la clase ${className}:`, error);
      throw error;
  }
};


export default {
    getArticles,
    createArticle,
    getArticlesByClass, // Exportamos la nueva función
};
