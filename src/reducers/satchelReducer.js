import {
    CLEAR_SATCHEL,
    OVERWRITE_SATCHEL,
    ADD_ACQUIRED_FORMULAE,
    REMOVE_ACQUIRED_FORMULAE,
    ADD_KNOWN_RECIPE,
    REMOVE_KNOWN_RECIPE,
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
        alchemy: { novice: {}, journeyman: {}, master: {} },
        knownRecipes: {
            witcherBrews: {
                potions: [],
                bladeOils: [],
                decoctions: [],
            },
            alchemy: {
                novice: [],
                journeyman: [],
                master: [],
            },
        },
        acquiredFormulae: {
            witcherBrews: {
                potions: [],
                bladeOils: [],
                decoctions: [],
            },
            alchemy: {
                novice: [],
                journeyman: [],
                master: [],
            },
        },
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
            const clearedState = {
                ingredients: {},
                witcherBrews: { potions: {}, bladeOils: {}, decoctions: {} },
                alchemy: { novice: {}, journeyman: {}, master: {} },
                knownRecipes: {
                    witcherBrews: { potions: [], bladeOils: [], decoctions: [] },
                    alchemy: { novice: [], journeyman: [], master: [] },
                },
                acquiredFormulae: {
                    witcherBrews: { potions: [], bladeOils: [], decoctions: [] },
                    alchemy: { novice: [], journeyman: [], master: [] },
                },
            }
            localStorage.setItem(localStorageKey, JSON.stringify(clearedState));
            return clearedState;
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
        case ADD_KNOWN_RECIPE:
            return AddRecipeToSatchel('knownRecipes', state, action);
        case REMOVE_KNOWN_RECIPE:
            return RemoveRecipeFromSatchel('knownRecipes', state, action);
        case ADD_ACQUIRED_FORMULAE:
            return AddRecipeToSatchel('acquiredFormulae', state, action);
        case REMOVE_ACQUIRED_FORMULAE:
            return RemoveRecipeFromSatchel('acquiredFormulae', state, action);
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

function AddRecipeToSatchel(key, state, action) {
    const curTypeState = state[key] && state[key][action.payload.type]
        ? state[key][action.payload.type] : getDefaultRecipeObj(action.payload.type);

    const curCategoryState = state[key]
        && state[key][action.payload.type]
        && state[key][action.payload.type][action.payload.category]
        ? state[key][action.payload.type][action.payload.category] : [];

    const newCategoryState = [...new Set([...curCategoryState, action.payload.itemKey])];

    const newState = {
        ...state,
        [key]: {
            ...state[key],
            [action.payload.type]: {
                ...curTypeState,
                [action.payload.category]: newCategoryState,
            },
        },
    };

    localStorage.setItem(localStorageKey, JSON.stringify(newState));
    return newState;
}

function RemoveRecipeFromSatchel(key, state, action) {
    const curTypeState = state[key] && state[key][action.payload.type]
        ? state[key][action.payload.type] : getDefaultRecipeObj(action.payload.type);

    const curCategoryState = state[key]
        && state[key][action.payload.type]
        && state[key][action.payload.type][action.payload.category]
        ? state[key][action.payload.type][action.payload.category] : [];

    curCategoryState.splice(action.payload.itemKey, 1);

    const newState = {
        ...state,
        [key]: {
            ...state[key],
            [action.payload.type]: {
                ...curTypeState,
                [action.payload.category]: curCategoryState,
            },
        },
    };

    localStorage.setItem(localStorageKey, JSON.stringify(newState));
    return newState;
}

function getDefaultRecipeObj(knownRecipeType) {
    if (knownRecipeType === 'witcherBrews') {
        return {
            potions: [],
            bladeOils: [],
            decoctions: [],
        };
    } else if (knownRecipeType === 'alchemy') {
        return {
            novice: [],
            journeyman: [],
            master: [],
        };
    }
    return {};
}
