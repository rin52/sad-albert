import getIngredients from '../../helper/getData/getIngredients';
import getMutagens from '../../helper/getData/getMutagens';

export default function getAllIngredients(chosenSetting) {
    const ingredients = {...getIngredients(chosenSetting), ...getMutagens(chosenSetting)};
    const keys = Object.keys(ingredients);
    const allIngredients = [];

    keys.forEach((key) => {
        allIngredients.push(ingredients[key].item);
    });
    allIngredients.sort();
    return allIngredients;
}