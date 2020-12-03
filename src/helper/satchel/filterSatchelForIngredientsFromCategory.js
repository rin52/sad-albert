import getSatchelDetails from "./getSatchelDetails";

export default function filterSatchelForIngredientsFromCategory(ingredients, category) {
    const satchelIngredients = getSatchelDetails(ingredients);
    const keys = Object.keys(satchelIngredients);
    const filteredIngredients = [];
    keys.forEach(key => {
        if (satchelIngredients[key].category === category) {
            filteredIngredients.push(satchelIngredients[key].item);
        }
    });
    return filteredIngredients;
}