export async function FetchRecipes() {
    const result = await fetch(`/recipes`, {
        method: "GET"
    });

    if (result.ok) {
        const data = await result.json();
        console.log(data);

        return data;
    }
    throw new Error("Kunde inte hämta data!");
}

export async function FetchCategories() {
    const result = await fetch(`/categories`, {
        method: "GET"
    });

    if (result.ok) {
        const data = await result.json();
        console.log(data);

        return data;
    }
    throw new Error("Kunde inte hämta data!");
}
