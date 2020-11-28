import Ingredients from '../../data/Ingredients';
import Mutagens from '../../data/Mutagens';

export default function getAllIngredients() {
    const ingredients = {...Ingredients, ...Mutagens};
    const keys = Object.keys(ingredients);
    const allIngredients = [];

    keys.forEach((key) => {
        allIngredients.push(ingredients[key].item);
    });
    allIngredients.sort();
    return allIngredients;
}