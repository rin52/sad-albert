import getIngredients from "../../helper/getData/getIngredients";
import getMutagens from '../../helper/getData/getMutagens';
import getRandomInt from "../getRandomInt";
import Rarity from "../Rarity";
import getIngredientKey from '../satchel/getIngredientKey';

function getCounts(ingredients, IngredientList, MutagenList) {
    const counts = {
        rareCount: 0,
        uncommonCount: 0,
        commonCount: 0,
        everydayCount: 0,
        unknownCount: 0,
    };
    const keys = Object.keys(ingredients);

    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const ingredient = ingredients[key];

        if (ingredient === '') {
            counts.unknownCount = 1
            return counts;
        }

        const ingredientKey = getIngredientKey(ingredient);
        let rarity = '';

        if (ingredient.includes('Mutagen')) {
            rarity = MutagenList[ingredientKey].rarity;
        } else {
            rarity = IngredientList[ingredientKey].rarity;
        }

        switch (rarity) {
            case Rarity.RARE:
                counts.rareCount += 1; break;
            case Rarity.UNCOMMON:
                counts.uncommonCount += 1; break;
            case Rarity.COMMON:
                counts.commonCount += 1; break;
            case Rarity.EVERYDAY:
                counts.everydayCount += 1; break;
            default:
                break;
        }
    }

    return counts;
}

export default function determinePotionRarity(ingredients, chosenSetting) {
    const IngredientList = getIngredients(chosenSetting);
    const MutagenList = getMutagens(chosenSetting);
    const counts = getCounts(ingredients, IngredientList, MutagenList);
    const countKeys = Object.keys(counts);
    if (counts.unknownCount === 1) {
        return '';
    }
    let max = -1;
    countKeys.forEach(key => {
        const count = counts[key];
        if (count > max) {
            max = count;
        }
    });

    let equals = [];
    countKeys.forEach((key) => {
        if (counts[key] === max) {
            equals.push(key);
        }
    });

    let winningCount = equals[0];
    if (equals.length > 1) {
        winningCount = equals[getRandomInt(equals.length)];
    }

    switch (winningCount) {
        case 'rareCount':
            return Rarity.RARE;
        case 'uncommonCount':
            return Rarity.UNCOMMON;
        case 'commonCount':
            return Rarity.COMMON;
        case 'everydayCount':
            return Rarity.EVERYDAY;
        default:
            return '';
    }
}
