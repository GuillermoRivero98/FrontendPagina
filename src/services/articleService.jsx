import axios from 'axios';

const API_URL = 'http://localhost:3001/api/articles'; 

// Función para manejar la respuesta del servidor
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
        const articles = handleResponse(response);
        return articles.map(article => ({
            ...article,
            pdfUrl: article.filePath // Asegúrate de que tienes esta propiedad
        }));
    } catch (error) {
        // Manejo de errores detallado
        if (error.response) {
            console.error("Error del servidor al obtener los artículos:", error.response.data);
        } else if (error.request) {
            console.error("Error de red al obtener los artículos:", error.message);
        } else {
            console.error("Error inesperado:", error.message);
        }
        throw error; 
    }
};

// Crear un nuevo artículo
const createArticle = async (articleData) => {
    try {
        // Validar que se incluyan todos los datos necesarios
        if (!articleData.title || !articleData.author || !articleData.pdf) {
            throw new Error('Faltan datos necesarios para crear el artículo.');
        }

        const formData = new FormData(); 
        formData.append('title', articleData.title);
        formData.append('author', articleData.author);
        formData.append('content', articleData.content);
        formData.append('pdf', articleData.pdf); // Archivos PDF enviados en la solicitud

        const response = await axios.post(API_URL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }, 
        });
        return handleResponse(response); 
    } catch (error) {
        // Manejo de errores detallado
        if (error.response) {
            console.error("Error del servidor al crear el artículo:", error.response.data);
        } else if (error.request) {
            console.error("Error de red al crear el artículo:", error.message);
        } else {
            console.error("Error inesperado al crear el artículo:", error.message);
        }
        throw error; 
    }
};

// Obtener un artículo por ID
const getArticleById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`); 
        return handleResponse(response); 
    } catch (error) {
        // Manejo de errores detallado
        if (error.response) {
            console.error(`Error del servidor al obtener el artículo con ID ${id}:`, error.response.data);
        } else if (error.request) {
            console.error(`Error de red al obtener el artículo con ID ${id}:`, error.message);
        } else {
            console.error(`Error inesperado al obtener el artículo con ID ${id}:`, error.message);
        }
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
