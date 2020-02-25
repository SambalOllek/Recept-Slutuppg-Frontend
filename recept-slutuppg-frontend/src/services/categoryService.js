async function getCategory() {
    let result = await fetch("/categories")

    if (result.ok) {
       const data = await result.text();
       return data;

    }
}