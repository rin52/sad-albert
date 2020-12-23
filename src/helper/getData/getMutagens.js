import Constants from '../Constants';
import Mutagens from '../../data/dndAndHomebrew/Mutagens';
import WttrpgMutagens from '../../data/wttrpg/Mutagens';

export default function getMutagens(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? Mutagens : WttrpgMutagens;
}