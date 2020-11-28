import Ingredients from '../../data/Ingredients';
import Mutagens from '../../data/Mutagens';

export default function getSatchelDetails(ingredients) {
    const allIngredients = {...Ingredients, ...Mutagens};
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