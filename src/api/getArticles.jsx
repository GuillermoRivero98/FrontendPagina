const API_URL = process.env.REACT_APP_API_URL;

export async function getArticles() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener los artículos");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en getArticles",error);
        return [];
    }
}

