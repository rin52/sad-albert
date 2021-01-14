import Constants from '../Constants';

export default function filterRecipes(filter, recipes, knownRecipes, acquiredFormulae) {
    if (filter.indexOf(Constants.ALL_FORMULAE) !== -1) {
        return recipes;
    }

    let allowedRecipes = [];
    if (filter.indexOf(Constants.MEMORIZED_FORMULAE) > -1 && knownRecipes) {
        allowedRecipes = [...allowedRecipes, ...knownRecipes];
    }
    if (filter.indexOf(Constants.ACQUIRED_FORMULAE) > -1 && acquiredFormulae) {
        allowedRecipes = [...allowedRecipes, ...acquiredFormulae];
    }
    allowedRecipes.sort();

    const filteredRecipes = {};

    allowedRecipes.forEach((allowedRecipe) => {
        if (recipes[allowedRecipe]) {
            filteredRecipes[allowedRecipe] = recipes[allowedRecipe];
        }
    })

    return filteredRecipes;
}