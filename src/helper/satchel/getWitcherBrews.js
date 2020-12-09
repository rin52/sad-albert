import Potions from '../../data/recipes/witcher/Potions';
import BladeOils from '../../data/recipes/witcher/BladeOils';
import Decoctions from '../../data/recipes/witcher/Decoctions';

export default function getWitcherBrews(category) {
    let list = {};
    if (category === 'Potions') {
        list = Potions;
    } else if (category === 'Blade Oils') {
        list = BladeOils;
    } else if (category === 'Decoctions') {
        list = Decoctions;
    }

    const keys = Object.keys(list);
    const allBrews = [];

    keys.forEach((key) => {
        allBrews.push(list[key].name);
    });
    allBrews.sort();
    return allBrews;
}