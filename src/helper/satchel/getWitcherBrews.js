import getPotions from '../getData/getRecipes/witcher/getPotions';
import getBladeOils from '../getData/getRecipes/witcher/getBladeOils';
import getDecoctions from '../getData/getRecipes/witcher/getDecoctions';

export default function getWitcherBrews(category, chosenSetting) {
    let list = {};
    if (category === 'Potions') {
        list = getPotions(chosenSetting);
    } else if (category === 'Blade Oils') {
        list = getBladeOils(chosenSetting);
    } else if (category === 'Decoctions') {
        list = getDecoctions(chosenSetting);
    }

    const keys = Object.keys(list);
    const allBrews = [];

    keys.forEach((key) => {
        allBrews.push(list[key].name);
    });
    allBrews.sort();
    return allBrews;
}