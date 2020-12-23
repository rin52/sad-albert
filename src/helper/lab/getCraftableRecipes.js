import compareIngredientRequiredToAmount from './compareIngredientRequiredToAmount';
import compareSpecificIngredientRequiredToAmount from './compareSpecificIngredientRequiredToAmount';

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
    dogTallow,
    bottleOfSpirits,
    arachas,
    fiend,
    graveHag,
    griffin,
    katakan,
    nekker,
    noonwraith,
    troll,
    werewolf,
    wyvern,
) {
    const craftableRecipes = [];

    allRecipes.forEach(recipeList => {
        const craftableList = [];

        const recipeKeys = Object.keys(recipeList.recipes);
        recipeKeys.forEach(key => {
            const recipe = recipeList.recipes[key];
            let craftable = true;

            for (let i = 0; i < recipe.ingredients.length && craftable; i += 1) {
                craftable = compareIngredientRequiredToAmount(recipe.ingredients[i],
                    vitriol, rebis, aether, quebrith, hydragenum, sol, vermilion, caelum, fulgur,
                    redMutagen, greenMutagen, blueMutagen);
            }
            if (craftable && recipe.specificIngredients) {
                for (let i = 0; i < recipe.specificIngredients.length && craftable; i += 1) {
                    craftable = compareSpecificIngredientRequiredToAmount(recipe.specificIngredients[i],
                        dogTallow, bottleOfSpirits, arachas, fiend, graveHag, griffin, katakan, nekker,
                        noonwraith, troll, werewolf, wyvern);
                }
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