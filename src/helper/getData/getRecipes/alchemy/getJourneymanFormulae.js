import Constants from '../../../Constants';
import JourneymanFormulae from '../../../../data/recipes/dndAndHomebrew/alchemy/JourneymanFormulae';
import WttrpgJourneymanFormulae from '../../../../data/recipes/wttrpg/alchemy/JourneymanFormulae';

export default function getJourneymanFormulate(chosenSetting) {
    return chosenSetting === Constants.DND_HOMEBREW ? JourneymanFormulae : WttrpgJourneymanFormulae;
}