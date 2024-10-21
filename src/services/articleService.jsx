import axios from 'axios';

const API_URL = 'http://localhost:3001/api/articles';

const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(`Error en la solicitud: ${response.status}`);
  }
};

// Obtener todos los artículos
const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return handleResponse(response);
  } catch (error) {
    console.error("Error al obtener los artículos:", error.message);
    throw error;
  }
};

// Crear un nuevo artículo
const createArticle = async (article) => {
  try {
    const response = await axios.post(API_URL, article, {
      headers: { 'Content-Type': 'application/json' },
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error al crear el artículo:", error.message);
    throw error;
  }
};

// Obtener un artículo por ID
const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error al obtener el artículo con ID ${id}:`, error.message);
    throw error;
  }
};

// Asignar el objeto a una variable antes de exportar
const articleService = {
  getArticles,
  createArticle,
  getArticleById,
};

export default articleService; // Exportar la variable
