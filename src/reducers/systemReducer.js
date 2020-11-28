import {
    SWITCH_APP,
    SWITCH_SELECTED_INGREDIENTS_TAB,
    SWITCH_SELECTED_RECIPES_TAB,
    SWITCH_SELECTED_ALCHEMY_FORMULAE_TAB,
    SWITCH_SELECTED_LAB_TAB,
    SWITCH_SELECTED_INGREDIENTS_GENERATOR_TAB,
    SWITCH_SELECTED_SATCHEL_TAB,
} from '../actions/SystemActions';
import Constants from '../helper/Constants';

const initialState = {
    app: Constants.INGREDIENT_GENERATOR,
    selectedIngredientsGeneratorTab: 0,
    selectedIngredientsTab: 0,
    selectedRecipesTab: 0,
    selectedAlchemyFormulaeTab: 0,
    selectedLabTab: 0,
    selectedSatchelTab: 0,
};

export default function SystemReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_APP:
            return { ...state, app: action.payload };
        case SWITCH_SELECTED_INGREDIENTS_GENERATOR_TAB:
            return { ...state, selectedIngredientsGeneratorTab: action.payload };
        case SWITCH_SELECTED_INGREDIENTS_TAB:
            return { ...state, selectedIngredientsTab: action.payload };
        case SWITCH_SELECTED_RECIPES_TAB:
            return { ...state, selectedRecipesTab: action.payload };
        case SWITCH_SELECTED_ALCHEMY_FORMULAE_TAB:
            return { ...state, selectedAlchemyFormulaeTab: action.payload };
        case SWITCH_SELECTED_LAB_TAB:
            return { ...state, selectedLabTab: action.payload };
        case SWITCH_SELECTED_SATCHEL_TAB:
            return { ...state, selectedSatchelTab: action.payload };
        default:
            return { ...state };
    }
}