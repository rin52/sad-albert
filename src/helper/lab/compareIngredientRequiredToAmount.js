import IngredientCategory from '../IngredientCategory';

export default function compareIngredientRequiredToAmount(
    ingredient,
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
    if ((ingredient.category === IngredientCategory.VITRIOL && Number(vitriol) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.REBIS && Number(rebis) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.AETHER && Number(aether) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.QUEBRITH && Number(quebrith) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.HYDRAGENUM && Number(hydragenum) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.SOL && Number(sol) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.VERMILION && Number(vermilion) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.CAELUM && Number(caelum) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.FULGUR && Number(fulgur) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.RED_MUTAGEN && Number(redMutagen) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.GREEN_MUTAGEN && Number(greenMutagen) >= ingredient.amount)
        || (ingredient.category === IngredientCategory.BLUE_MUTAGEN && Number(blueMutagen) >= ingredient.amount)
    ) {
        return true;
    }
    return false;
}