async function getRecipe() {
    let result = await fetch("/recipes")

    if (result.ok) {
       const data = await result.text();
       return data;

    }
}