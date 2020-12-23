import getIngredients from '../../helper/getData/getIngredients';
import getMutagens from '../../helper/getData/getMutagens';

export default function getSatchelSummary(ingredients, chosenSetting) {
    const summary = {
        Vitriol: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Rebis: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Aether: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Quebrith: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Hydragenum: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Vermilion: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Sol: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Caelum: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        Fulgur: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },

        'Red Mutagen': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        'Green Mutagen': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        'Blue Mutagen': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        'Other': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
            total: 0,
        },
        'DOG_TALLOW': 0,
        'BOTTLE_OF_SPIRITS': 0,
        'ARACHAS': 0,
        'FIEND': 0,
        'GRAVE_HAG': 0,
        'GRIFFIN': 0,
        'KATAKAN': 0,
        'NEKKER': 0,
        'NOONWRAITH': 0,
        'TROLL': 0,
        'WEREWOLF': 0,
        'WYVERN': 0,
    };

    const summaryKeys = Object.keys(summary);
    const allIngredients = { ...getIngredients(chosenSetting), ...getMutagens(chosenSetting) };
    const keys = Object.keys(ingredients);

    keys.forEach((key) => {
        const ingredient = allIngredients[key];
        const rarity = ingredient.rarity;
        summary[ingredient.category][rarity] += ingredients[key].amount;
        summary[ingredient.category].total += ingredients[key].amount;
        if (summaryKeys.indexOf(key) !== -1) {
            summary[key] = ingredients[key].amount;
        }
    })

    return summary;
}