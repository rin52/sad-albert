export default function compareSpecificIngredientRequiredToAmount(specificIngredient,
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
    if ((specificIngredient.key === 'DOG_TALLOW' && Number(dogTallow) >= specificIngredient.amount)
        || (specificIngredient.key === 'BOTTLE_OF_SPIRITS' && Number(bottleOfSpirits) >= specificIngredient.amount)
        || (specificIngredient.key === 'ARACHAS' && Number(arachas) >= specificIngredient.amount)
        || (specificIngredient.key === 'FIEND' && Number(fiend) >= specificIngredient.amount)
        || (specificIngredient.key === 'GRAVE_HAG' && Number(graveHag) >= specificIngredient.amount)
        || (specificIngredient.key === 'GRIFFIN' && Number(griffin) >= specificIngredient.amount)
        || (specificIngredient.key === 'KATAKAN' && Number(katakan) >= specificIngredient.amount)
        || (specificIngredient.key === 'NEKKER' && Number(nekker) >= specificIngredient.amount)
        || (specificIngredient.key === 'NOONWRAITH' && Number(noonwraith) >= specificIngredient.amount)
        || (specificIngredient.key === 'TROLL' && Number(troll) >= specificIngredient.amount)
        || (specificIngredient.key === 'WEREWOLF' && Number(werewolf) >= specificIngredient.amount)
        || (specificIngredient.key === 'WYVERN' && Number(wyvern) >= specificIngredient.amount)
    ) {
        return true;
    }
    return false;
}