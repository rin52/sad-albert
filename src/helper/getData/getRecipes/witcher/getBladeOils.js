import Constants from '../../../Constants';
import BladeOils from '../../../../data/recipes/dndAndHomebrew/witcher/BladeOils';
import WttrpgBladeOils from '../../../../data/recipes/wttrpg/witcher/BladeOils';

export default function getBladeOils(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? BladeOils : WttrpgBladeOils;
}