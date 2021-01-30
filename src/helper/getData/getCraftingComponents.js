import Constants from '../Constants';
import WttrpgCrafting from '../../data/wttrpg/Crafting';

export default function getCraftingComponents(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? {} : WttrpgCrafting;
}