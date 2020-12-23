import getPotions from '../getData/getRecipes/witcher/getPotions';
import getBladeOils from '../getData/getRecipes/witcher/getBladeOils';
import getDecoctions from '../getData/getRecipes/witcher/getDecoctions';

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

export default function getSatchelWitcherBrewDetails(witcherBrews, chosenSetting) {
    if (witcherBrews) {
        return {
            potions: getDetails(witcherBrews.potions, getPotions(chosenSetting)),
            bladeOils: getDetails(witcherBrews.bladeOils, getBladeOils(chosenSetting)),
            decoctions: getDetails(witcherBrews.decoctions, getDecoctions(chosenSetting)),
        };
    }
    return {
        potions: {},
        bladeOils: {},
        decoctions: {},
    };
}