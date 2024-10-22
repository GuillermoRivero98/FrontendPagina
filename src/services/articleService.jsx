import axios from 'axios';

const API_URL = 'http://localhost:3001/api/articles';

// Manejo de respuestas exitosas
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
const createArticle = async (articleData) => {
    try {
        const formData = new FormData();
        formData.append('title', articleData.title);
        formData.append('author', articleData.author);
        formData.append('fecha_publicacion', articleData.fecha_publicacion); // Asegúrate de incluir la fecha
        formData.append('pdf', articleData.pdf); // Aquí se envía el archivo PDF

        const response = await axios.post(API_URL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
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

// Exportar el servicio de artículos
const articleService = {
    getArticles,
    createArticle,
    getArticleById,
};

export default articleService;
