import getNoviceFormulae from '../getData/getRecipes/alchemy/getNoviceFormulae';
import getJourneymanFormulae from '../getData/getRecipes/alchemy/getJourneymanFormulae';
import getMasterFormulae from '../getData/getRecipes/alchemy/getMasterFormulae';

export default function getAlchemy(category, chosenSetting) {
    let list = {};
    if (category === 'Novice Formulae') {
        list = getNoviceFormulae(chosenSetting);
    } else if (category === 'Journeyman Formulae') {
        list = getJourneymanFormulae(chosenSetting);
    } else if (category === 'Master Formulae') {
        list = getMasterFormulae(chosenSetting);
    }

    const keys = Object.keys(list);
    const allBrews = [];

    keys.forEach((key) => {
        allBrews.push(list[key].name);
    });
    allBrews.sort();
    return allBrews;
}