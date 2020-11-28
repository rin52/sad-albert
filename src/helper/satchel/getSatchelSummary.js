import Ingredients from '../../data/Ingredients';
import Mutagens from '../../data/Mutagens';

export default function getSatchelSummary(ingredients) {
    const summary = {
        Vitriol: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Rebis: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Aether: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Quebrith: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Hydragenum: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Vermilion: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Sol: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Caelum: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        Fulgur: {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },

        'Red Mutagen': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        'Green Mutagen': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
        'Blue Mutagen': {
            Rare: 0,
            Uncommon: 0,
            Common: 0,
            Everyday: 0,
        },
    };

    const allIngredients = {...Ingredients, ...Mutagens};

    const keys = Object.keys(ingredients);
    keys.forEach((key) => {
        const ingredient = allIngredients[key];
        const rarity = ingredient.rarity;
        summary[ingredient.category][rarity] += ingredients[key].amount;
    })

    return summary;
}