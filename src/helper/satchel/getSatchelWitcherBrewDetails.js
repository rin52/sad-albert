import Potions from '../../data/recipes/witcher/Potions';
import BladeOils from '../../data/recipes/witcher/BladeOils';
import Decoctions from '../../data/recipes/witcher/Decoctions';

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

export default function getSatchelWitcherBrewDetails(witcherBrews) {
    return {
        potions: getDetails(witcherBrews.potions, Potions),
        bladeOils: getDetails(witcherBrews.bladeOils, BladeOils),
        decoctions: getDetails(witcherBrews.decoctions, Decoctions),
    };
}