import Constants from '../../../Constants';
import Potions from '../../../../data/recipes/dndAndHomebrew/witcher/Potions';
import WttrpgPotions from '../../../../data/recipes/wttrpg/witcher/Potions';

export default function getPotions(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? Potions : WttrpgPotions;
}