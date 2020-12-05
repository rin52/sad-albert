import {
    CLEAR_SATCHEL,
    OVERWRITE_SATCHEL,
    REMOVE_INGREDIENT_FROM_SATCHEL,
    UPDATE_SATCHEL_INGREDIENTS,
} from "../actions/SatchelActions";

const localStorageKey = "SAD_ALBERT_SATCHEL";

const satchel = JSON.parse(localStorage.getItem(localStorageKey));
const initialState = satchel === null ? {ingredients: {}, witcherBrews: {}, alchemy: {}} : satchel;

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
            localStorage.setItem(localStorageKey, JSON.stringify({ingredients: {}}));
            return {ingredients: {}};
        case OVERWRITE_SATCHEL:
            localStorage.setItem(localStorageKey, JSON.stringify({ ...action.payload }));
            return { ...action.payload };
        case REMOVE_INGREDIENT_FROM_SATCHEL:
            const newState = { ...state }
            delete newState.ingredients[action.payload];
            localStorage.setItem(localStorageKey,  JSON.stringify({ ...newState }));
            return { ...newState };
        case UPDATE_SATCHEL_INGREDIENTS:
            localStorage.setItem(localStorageKey,  JSON.stringify({ ...state, ingredients: { ...state.ingredients, ...action.payload } }));
            return { ...state, ingredients: { ...state.ingredients, ...action.payload } };
        default:
            return { ...state };
    }
}