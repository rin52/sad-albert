import compareIngredientRequiredToAmount from './compareIngredientRequiredToAmount';

export default function getCraftableRecipes(
    allRecipes,
    vitriol,
    rebis,
    aether,
    quebrith,
    hydragenum,
    sol,
    vermilion,
    caelum,
    fulgur,
    redMutagen,
    greenMutagen,
    blueMutagen,
) {
    const craftableRecipes = [];

    allRecipes.forEach(recipeList => {
        const craftableList = [];
        recipeList.recipes.forEach(recipe => {
            let craftable = true;

            for (let i = 0; i < recipe.ingredients.length && craftable; i += 1) {
                craftable = compareIngredientRequiredToAmount(recipe.ingredients[i],
                    vitriol, rebis, aether, quebrith, hydragenum, sol, vermilion, caelum, fulgur,
                    redMutagen, greenMutagen, blueMutagen);
            }
            if (craftable) {
                craftableList.push(recipe);
            }
        });
        craftableRecipes.push({
            name: recipeList.name,
            recipes: craftableList,
        });
    });

    return craftableRecipes;
}