const API_URL = process.env.REACT_APP_API_URL;

export async function approveArticle(articleId) {
    const response = await fetch(`${API_URL}/${articleId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ approved: true }),
    });

    if (!response.ok) {
        throw new Error("Error al aprobar el artículo");
    }

    return await response.json();
}
