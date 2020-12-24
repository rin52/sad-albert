import IngredientCategory from '../../../../helper/IngredientCategory';
import Mutagens from '../../../wttrpg/Mutagens';

export default {
    ARACHAS: {
        name: 'Arachas',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.ARACHAS.item, key: 'ARACHAS', amount: 1 },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'For every 10 points of ENC you have free you gain +2 SP to all locations.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    FIEND: {
        name: 'Fiend',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.FIEND.item, key: 'FIEND', amount: 1 },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'Your ENC is doubled.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    GRAVE_HAG: {
        name: 'Grave Hag',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.GRAVE_HAG.item, key: 'GRAVE_HAG', amount: 1  },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: '+2 HP regeneration for every enemy slain during combat. This '
            + 'health bonus lasts until the end of combat.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    GRIFFIN: {
        name: 'Griffin',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.GRIFFIN.item, key: 'GRIFFIN', amount: 1 },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'Every time you take more than 5 points of damage you gain +2 '
            + 'SP. This SP stacks with itself.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    KATAKAN: {
        name: 'Katakan',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.KATAKAN.item, key: 'KATAKAN', amount: 1 },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'You gain a +3 to your roll when determining the location of a '
            + 'critical wound.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    NEKKER: {
        name: 'Nekker',
        DC: 14,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.NEKKER.item, key: 'NEKKER', amount: 1 },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'Your mount never panics and you gain a +3 to all Ride and '
            + 'Athletics checks.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    NOONWRAITH: {
        name: 'Noonwraith',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.SOL, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        specificIngredients: [
            { name: Mutagens.NOONWRAITH.item, key: 'NOONWRAITH', amount: 1 },
            { name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'You gain immunity to Stun & Blindness and cannot be knocked '
            + 'prone.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    TROLL: {
        name: 'Troll',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        specificIngredients: [
            {name: Mutagens.TROLL.item, key: 'TROLL', amount: 1 },
            {name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'You regenerate 5 Health Points per round.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    WEREWOLF: {
        name: 'Werewolf',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        specificIngredients: [
            {name: Mutagens.WEREWOLF.item, key: 'WEREWOLF', amount: 1 },
            {name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'Running for long periods of time takes no stamina.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    WYVERN: {
        name: 'Wyvern',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        specificIngredients: [
            {name: Mutagens.WYVERN.item, key: 'WYVERN', amount: 1 },
            {name: 'Bottle of Spirits', key: 'BOTTLE_OF_SPIRITS', amount: 1 },
        ],
        effects: 'You gain +1 damage to your next strike after a successful '
            + 'strike. This +1 is cumulative, and goes up with each hit until '
            + 'the combat ends or you take damage.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },

    // {
    //     name: '',
    //     ingredients: [
    //         {category: IngredientCategory.MUTAGEN, amount: 1},
    //         {category: IngredientCategory.VITRIOL, amount: 2},
    //         {category: IngredientCategory.HYDRAGENUM, amount: 1},
    //         {category: IngredientCategory.FULGUR, amount: 1},
    //     ],
    //     effects: '',
    //     duration: '',
    //     toxicity: 0,
    // },
};
