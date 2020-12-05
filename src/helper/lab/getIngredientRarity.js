import getIngredientKey from '../satchel/getIngredientKey';
import Mutagens from '../../data/Mutagens';
import Ingredients from '../../data/Ingredients';

export default function getIngredientRarity(ingredient) {
    const key = getIngredientKey(ingredient);
    if (ingredient.includes('Mutagens')) {
        return Mutagens[key].rarity;
    }
    return Ingredients[key].rarity;
}