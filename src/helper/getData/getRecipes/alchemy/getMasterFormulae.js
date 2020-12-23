import Constants from '../../../Constants';
import MasterFormulae from '../../../../data/recipes/dndAndHomebrew/alchemy/MasterFormulae';
import WttrpgMasterFormulae from '../../../../data/recipes/wttrpg/alchemy/MasterFormulae';

export default function getMasterFormulate(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? MasterFormulae : WttrpgMasterFormulae;
}