export const CLEAR_SATCHEL = 'clearSatchel';
export const OVERWRITE_SATCHEL = 'overwriteSatchel';
export const REMOVE_INGREDIENT_FROM_SATCHEL = 'removeIngredientFromSatchel';
export const UPDATE_SATCHEL_INGREDIENTS = 'updateSatchelIngredients';
export const UPDATE_SATCHEL_WITCHER_BREWS = 'updateSatchelWitcherBrews';
export const REMOVE_WITCHER_BREW_FROM_SATCHEL = 'removeWitcherBrewFromSatchel';

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

export const clearSatchel = () => ({
    type: CLEAR_SATCHEL,
});

export const overwriteSatchel = newSatchel => ({
    type: OVERWRITE_SATCHEL,
    payload: newSatchel,
});