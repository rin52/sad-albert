import {
    CLEAR_SATCHEL,
    OVERWRITE_SATCHEL,
    REMOVE_FROM_SATCHEL,
    UPDATE_SATCHEL,
} from "../actions/SatchelActions";

const initialState = {
    ingredients: {
        BEAR_FAT: {
            amount: 5,
        },
        BERBERCANE_FRUIT: {
            amount: 1,
        },
        BOAR_TUSKS: {
            amount: 3,
        },
        BOHUN_UPAS_POISON: {
            amount: 4,
        },
        BOTCHLING_BLOOD: {
            amount: 2,
        },
        FIEND: {
            amount: 2,
        },
    }
};

//object example:
// ingredients = {
//     BEAR_FAT: {
//         ...Ingredients.BEAR_FAT,
//         amount: 5,
//     }
// }

export default function SatchelReducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_SATCHEL:
            return {};
        case OVERWRITE_SATCHEL:
            return { ...action.payload };
        case REMOVE_FROM_SATCHEL:
            const newState = { ...state }
            delete newState.ingredients[action.payload];
            return { ...newState };
        case UPDATE_SATCHEL:
            return { ...state, ingredients: { ...state.ingredients, ...action.payload } };
        default:
            return { ...state };
    }
}