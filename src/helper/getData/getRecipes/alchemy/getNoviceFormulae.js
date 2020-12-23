import Constants from '../../../Constants';
import NoviceFormulae from '../../../../data/recipes/dndAndHomebrew/alchemy/NoviceFormulae';
import WttrpgNoviceFormulae from '../../../../data/recipes/wttrpg/alchemy/NoviceFormulae';

export default function getNoviceFormulate(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? NoviceFormulae : WttrpgNoviceFormulae;
}