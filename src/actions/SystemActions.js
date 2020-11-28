export const SWITCH_APP = 'switchApp';
export const SWITCH_SELECTED_INGREDIENTS_TAB = 'switchSelectedIngredientsTab';
export const SWITCH_SELECTED_RECIPES_TAB = 'switchSelectedRecipesTab';
export const SWITCH_SELECTED_ALCHEMY_FORMULAE_TAB = 'switchSelectedAlchemyFormulaeTab';
export const SWITCH_SELECTED_LAB_TAB = 'switchSelectedLabTab';
export const SWITCH_SELECTED_INGREDIENTS_GENERATOR_TAB = 'switchSelectedIngredientsGeneratorTab';
export const SWITCH_SELECTED_SATCHEL_TAB = 'switchSelectedSatchelTab';

export const switchApp = newApp => ({
    type: SWITCH_APP,
    payload: newApp,
});

export const switchSelectedIngredientsTab = newTab => ({
    type: SWITCH_SELECTED_INGREDIENTS_TAB,
    payload: newTab,
});

export const switchSelectedRecipesTab = newTab => ({
    type: SWITCH_SELECTED_RECIPES_TAB,
    payload: newTab,
});

export const switchSelectedAlchemyFormulaeTab = newTab => ({
    type: SWITCH_SELECTED_ALCHEMY_FORMULAE_TAB,
    payload: newTab,
});

export const switchSelectedLabTab = newTab => ({
    type: SWITCH_SELECTED_LAB_TAB,
    payload: newTab,
});

export const switchSelectedIngredientsGeneratorTab = newTab => ({
    type: SWITCH_SELECTED_INGREDIENTS_GENERATOR_TAB,
    payload: newTab,
});

export const switchSelectedSatchelTab = newTab => ({
    type: SWITCH_SELECTED_SATCHEL_TAB,
    payload: newTab,
});
