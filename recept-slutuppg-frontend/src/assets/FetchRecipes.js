export async function FetchRecipes() {
    const res = await fetch(`/slutprojekt-backend/entities/Recept`, {
        method: "GET"
    });

    if (result.ok) {
        const data = await result.json();
        console.log(data);

        return data;
    }
    throw new Error("Kunde inte hämta data!");
}
