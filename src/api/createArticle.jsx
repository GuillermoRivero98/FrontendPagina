const API_URL = process.env.REACT_APP_API_URL;

export async function createArticle(article) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(article),
        });

        if (!response.ok) {
            throw new Error("Error al obtener los artículos");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en crear Artículo",error);
        throw error;
    }
}
