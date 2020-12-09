import {
    CLEAR_SATCHEL,
    OVERWRITE_SATCHEL,
    REMOVE_INGREDIENT_FROM_SATCHEL,
    REMOVE_WITCHER_BREW_FROM_SATCHEL,
    REMOVE_ALCHEMY_FROM_SATCHEL,
    UPDATE_SATCHEL_INGREDIENTS,
    UPDATE_SATCHEL_WITCHER_BREWS,
    UPDATE_SATCHEL_ALCHEMY,
} from "../actions/SatchelActions";

const localStorageKey = "SAD_ALBERT_SATCHEL";

const satchel = JSON.parse(localStorage.getItem(localStorageKey));
const initialState = satchel === null
    ? {
        ingredients: {},
        witcherBrews: { potions: {}, bladeOils: {}, decoctions: {} },
        alchemy: { novice: {}, journeyman: {}, master: {} }
    }
    : satchel;

//object example = {
// ingredients: {
//     BEAR_FAT: {
//         ...Ingredients.BEAR_FAT,
//         amount: 5,
//     }
// }
// }

export default function SatchelReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_SATCHEL:
            localStorage.setItem(localStorageKey, JSON.stringify({ ingredients: {} }));
            return { ingredients: {} };
        case OVERWRITE_SATCHEL:
            localStorage.setItem(localStorageKey, JSON.stringify({ ...action.payload }));
            return { ...action.payload };
        case REMOVE_INGREDIENT_FROM_SATCHEL:
            return removeIngredientFromSatchel(state, action);
        case UPDATE_SATCHEL_INGREDIENTS:
            return updateSatchelIngredients(state, action);
        case UPDATE_SATCHEL_WITCHER_BREWS:
            return updateSatchelWitcherBrews(state, action);
        case REMOVE_WITCHER_BREW_FROM_SATCHEL:
            return removeWitcherBrewFromSatchel(state, action);
        case UPDATE_SATCHEL_ALCHEMY:
            return updateSatchelAlchemy(state, action);
        case REMOVE_ALCHEMY_FROM_SATCHEL:
            return removeAlchemyFromSatchel(state, action);
        default:
            return { ...state };
    }
}

function removeIngredientFromSatchel(state, action) {
    const newState = { ...state }
    delete newState.ingredients[action.payload];
    localStorage.setItem(localStorageKey, JSON.stringify({ ...newState }));
    return { ...newState };
}

function updateSatchelIngredients(state, action) {
    const newState = { ...state, ingredients: { ...state.ingredients, ...action.payload } }
    localStorage.setItem(localStorageKey, JSON.stringify(newState));
    return newState;
}

function updateSatchelWitcherBrews(state, action) {
    const category = action.payload.category;
    const curCategoryState = state.witcherBrews && state.witcherBrews[category]
        ? state.witcherBrews[category] : {};

    const newState = {
        ...state, witcherBrews: {
            ...state.witcherBrews,
            [category]: {
                ...curCategoryState, ...action.payload.items
            }
        },
    };
    localStorage.setItem(localStorageKey, JSON.stringify(newState));
    return newState;
}

function removeWitcherBrewFromSatchel(state, action) {
    const newState = { ...state }
    delete newState.witcherBrews[action.payload.category][action.payload.itemKey];
    localStorage.setItem(localStorageKey, JSON.stringify({ ...newState }));
    return { ...newState };
}

function updateSatchelAlchemy(state, action) {
    const category = action.payload.category;
    const curCategoryState = state.alchemy && state.alchemy[category]
        ? state.alchemy[category] : {};

    const newState = {
        ...state, alchemy: {
            ...state.alchemy,
            [category]: {
                ...curCategoryState, ...action.payload.items
            }
        },
    };
    localStorage.setItem(localStorageKey, JSON.stringify(newState));
    return newState;
}

function removeAlchemyFromSatchel(state, action) {
    const newState = { ...state }
    delete newState.alchemy[action.payload.category][action.payload.itemKey];
    localStorage.setItem(localStorageKey, JSON.stringify({ ...newState }));
    return { ...newState };
}
