import getNoviceFormulae from '../getData/getRecipes/alchemy/getNoviceFormulae';
import getJourneymanFormulae from '../getData/getRecipes/alchemy/getJourneymanFormulae';
import getMasterFormulae from '../getData/getRecipes/alchemy/getMasterFormulae';

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

export default function getSatchelAlchemyDetails(alchemy, chosenSetting) {
    if (alchemy) {
        return {
            novice: getDetails(alchemy.novice, getNoviceFormulae(chosenSetting)),
            journeyman: getDetails(alchemy.journeyman, getJourneymanFormulae(chosenSetting)),
            master: getDetails(alchemy.master, getMasterFormulae(chosenSetting)),
        };
    }
    return {
        novice: {},
        journeyman: {},
        master: {},
    };
}