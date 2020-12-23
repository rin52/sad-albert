import getIngredients from '../../helper/getData/getIngredients';
import getMutagens from '../../helper/getData/getMutagens';

export default function getSatchelDetails(ingredients, chosenSetting) {
    const allIngredients = {...getIngredients(chosenSetting), ...getMutagens(chosenSetting)};
    let details = {};

    const keys = Object.keys(ingredients);
    keys.forEach((key) => {
        details = {...details, [key]: {
            ...allIngredients[key],
            ...ingredients[key]
        }};
    });
    
    return details;
}