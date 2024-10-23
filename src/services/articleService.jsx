import axios from 'axios';

const API_URL = 'http://localhost:3001/api/articles'; // URL base para la API de artículos

// Función para manejar las respuestas exitosas
const handleResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.data; // Devuelve los datos si el estado de la respuesta es exitoso
    } else {
        throw new Error(`Error en la solicitud: ${response.status}`); // Lanza un error si el estado no es exitoso
    }
};

// Obtener todos los artículos
const getArticles = async () => {
    try {
        const response = await axios.get(API_URL); // Realiza la solicitud GET
        return handleResponse(response); // Maneja la respuesta con la función `handleResponse`
    } catch (error) {
        console.error("Error al obtener los artículos:", error.message); // Muestra el error en la consola
        throw error; // Lanza el error para manejarlo en el frontend
    }
};

// Crear un nuevo artículo
const createArticle = async (articleData) => {
    try {
        const formData = new FormData(); // Crea un objeto FormData para enviar datos de formulario
        formData.append('title', articleData.title);
        formData.append('author', articleData.author);
        formData.append('fecha_publicacion', articleData.fecha_publicacion); // Agrega la fecha de publicación
        formData.append('pdf', articleData.pdf); // Agrega el archivo PDF

        const response = await axios.post(API_URL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }, // Asegura que los datos se envíen correctamente
        });
        return handleResponse(response); // Maneja la respuesta
    } catch (error) {
        console.error("Error al crear el artículo:", error.message); // Muestra el error en la consola
        throw error; // Lanza el error para manejarlo en el frontend
    }
};

// Obtener un artículo por ID
const getArticleById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`); // Realiza la solicitud GET con el ID del artículo
        return handleResponse(response); // Maneja la respuesta
    } catch (error) {
        console.error(`Error al obtener el artículo con ID ${id}:`, error.message); // Muestra el error en la consola
        throw error; // Lanza el error para manejarlo en el frontend
    }
};

// Exportar el servicio de artículos
const articleService = {
    getArticles,       // Función para obtener todos los artículos
    createArticle,     // Función para crear un artículo
    getArticleById,    // Función para obtener un artículo por su ID
};

export default articleService;
