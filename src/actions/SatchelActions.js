export const CLEAR_SATCHEL = 'clearSatchel';
export const OVERWRITE_SATCHEL = 'overwriteSatchel';
export const REMOVE_INGREDIENT_FROM_SATCHEL = 'removeIngredientFromSatchel';
export const UPDATE_SATCHEL_INGREDIENTS = 'updateSatchelIngredients';
export const UPDATE_SATCHEL_WITCHER_BREWS = 'updateSatchelWitcherBrews';
export const REMOVE_WITCHER_BREW_FROM_SATCHEL = 'removeWitcherBrewFromSatchel';
export const UPDATE_SATCHEL_ALCHEMY = 'updateSatchelAlchemy';
export const REMOVE_ALCHEMY_FROM_SATCHEL = 'removeAlchemyFromSatchel';
export const ADD_KNOWN_RECIPE = 'addKnownRecipe';
export const REMOVE_KNOWN_RECIPE = 'removeKnownRecipe';

export const updateSatchelIngredients = newItems => ({
    type: UPDATE_SATCHEL_INGREDIENTS,
    payload: newItems
});

export const removeIngredientFromSatchel = key => ({
    type: REMOVE_INGREDIENT_FROM_SATCHEL,
    payload: key,
});

export const updateSatchelWitcherBrews = (category, newItems) => ({
    type: UPDATE_SATCHEL_WITCHER_BREWS,
    payload: {
        category,
        items: newItems,
    },
});

export const removeWitcherBrewFromSatchel = (category, itemKey) => ({
    type: REMOVE_WITCHER_BREW_FROM_SATCHEL,
    payload: {
        category,
        itemKey,
    },
});

export const updateSatchelAlchemy = (category, newItems) => ({
    type: UPDATE_SATCHEL_ALCHEMY,
    payload: {
        category,
        items: newItems,
    },
});

export const removeAlchemyFromSatchel = (category, itemKey) => ({
    type: REMOVE_ALCHEMY_FROM_SATCHEL,
    payload: {
        category,
        itemKey,
    },
});

export const clearSatchel = () => ({
    type: CLEAR_SATCHEL,
});

export const overwriteSatchel = newSatchel => ({
    type: OVERWRITE_SATCHEL,
    payload: newSatchel,
});

export const addKnownRecipe = (type, category, itemKey) => ({
    type: ADD_KNOWN_RECIPE,
    payload: {
        type,
        category,
        itemKey,
    },
});

export const removeKnownRecipe = (type, category, itemKey) => ({
    type: REMOVE_KNOWN_RECIPE,
    payload: {
        type,
        category,
        itemKey,
    },
});
