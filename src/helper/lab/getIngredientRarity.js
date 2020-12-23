import getIngredientKey from '../satchel/getIngredientKey';
import getMutagens from '../../helper/getData/getMutagens';
import getIngredients from '../../helper/getData/getIngredients';

export default function getIngredientRarity(ingredient, chosenSetting) {
    const key = getIngredientKey(ingredient);
    if (ingredient.includes('Mutagens') || ingredient.includes('Mutagen')) {
        return getMutagens(chosenSetting)[key].rarity;
    }
    return getIngredients(chosenSetting)[key].rarity;
}