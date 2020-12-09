import NoviceFormulae from '../../data/recipes/alchemy/NoviceFormulae';
import JourneymanFormulae from '../../data/recipes/alchemy/JourneymanFormulae';
import MasterFormulae from '../../data/recipes/alchemy/MasterFormulae';

export default function getAlchemy(category) {
    let list = {};
    if (category === 'Novice Formulae') {
        list = NoviceFormulae;
    } else if (category === 'Journeyman Formulae') {
        list = JourneymanFormulae;
    } else if (category === 'Master Formulae') {
        list = MasterFormulae;
    }

    const keys = Object.keys(list);
    const allBrews = [];

    keys.forEach((key) => {
        allBrews.push(list[key].name);
    });
    allBrews.sort();
    return allBrews;
}