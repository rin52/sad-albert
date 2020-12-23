import Constants from '../Constants';
import Ingredients from '../../data/dndAndHomebrew/Ingredients';
import WttrpgIngredients from '../../data/wttrpg/Ingredients';

export default function getIngredients(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? Ingredients : WttrpgIngredients;
}