import Constants from '../Constants';
import Foraging from '../../data/dndAndHomebrew/Foraging';
import WttrpgForaging from '../../data/wttrpg/Foraging';

export default function getForaging(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? Foraging : WttrpgForaging;
}