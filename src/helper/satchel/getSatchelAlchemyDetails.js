import NoviceFormulae from '../../data/recipes/alchemy/NoviceFormulae';
import JourneymanFormulae from '../../data/recipes/alchemy/JourneymanFormulae';
import MasterFormulae from '../../data/recipes/alchemy/MasterFormulae';

function getDetails(brew, list) {
    let details = {};
    if (brew === undefined) {
        return details;
    }
    const keys = Object.keys(brew);
    keys.forEach((key) => {
        details = {
            ...details, [key]: {
                ...list[key],
                ...brew[key]
            }
        };
        delete details[key].DC;
    });
    return details;
}

export default function getSatchelAlchemyDetails(alchemy) {
    return {
        novice: getDetails(alchemy.novice, NoviceFormulae),
        journeyman: getDetails(alchemy.journeyman, JourneymanFormulae),
        master: getDetails(alchemy.master, MasterFormulae),
    };
}