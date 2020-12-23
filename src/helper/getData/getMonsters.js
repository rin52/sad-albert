import Constants from '../Constants';
import Monsters from '../../data/dndAndHomebrew/Monsters';
import WttrpgMonsters from '../../data/wttrpg/Monsters';

export default function getMonsters(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? Monsters : WttrpgMonsters;
}