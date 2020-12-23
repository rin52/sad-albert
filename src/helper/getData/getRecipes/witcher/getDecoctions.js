import Constants from '../../../Constants';
import Decoctions from '../../../../data/recipes/dndAndHomebrew/witcher/Decoctions';
import WttrpgDecoctions from '../../../../data/recipes/wttrpg/witcher/Decoctions';

export default function getDecoctions(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? Decoctions : WttrpgDecoctions;
}