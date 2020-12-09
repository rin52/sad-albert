import IngredientCategory from '../../../helper/IngredientCategory';

export default {
    BINDWEED: {
        name: 'Bindweed',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Resistant to acid damage',
        duration: {
            everyday: '30 minutes',
            common: '1 hour',
            uncommon: '4 hours',
            rare: '8 hours',
        },
        toxicity: {
            everyday: 10,
            common: 15,
            uncommon: 30,
            rare: 50,
        },
    },
    BLACK_BLOOD: {
        name: 'Black Blood',
        DC: 20,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 3 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'Turns imbiber\'s blood to poison (enemy bite DC 15 constitution save)',
        duration: {
            everyday: '5 minutes',
            common: '10 minutes',
            uncommon: '30 minutes',
            rare: '1 hour',
        },
        toxicity: {
            everyday: 20,
            common: 40,
            uncommon: 60,
            rare: 80,
        },
    },
    BLIZZARD: {
        name: 'Blizzard',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.REBIS, amount: 2 },
        ],
        effects: 'Boosts reflexes and reactions (gain Hasted spell effects)',
        duration: {
            everyday: '1 round',
            common: '3 rounds',
            uncommon: '6 rounds',
            rare: '1 minute',
        },
        toxicity: {
            everyday: 5,
            common: 15,
            uncommon: 30,
            rare: 50,
        },
    },
    CAT: {
        name: 'Cat',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 2 },
        ],
        effects: 'See in the dark and through walls (detect warm-blooded creatures up to 60 ft)',
        duration: {
            everyday: '30 minutes',
            common: '45 minutes',
            uncommon: '1 hour',
            rare: '2 hours',
        },
        toxicity: {
            everyday: 5,
            common: 10,
            uncommon: 15,
            rare: 20,
        },
    },
    DE_VRIES_EXTRACT: {
        name: 'De Vries\' Extract',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
        ],
        effects: 'See invisible or ethereal creatures',
        duration: {
            everyday: '10 minutes',
            common: '20 minutes',
            uncommon: '30 minutes',
            rare: '1 hour',
        },
        toxicity: {
            everyday: 15,
            common: 25,
            uncommon: 35,
            rare: 45,
        },
    },
    FULL_MOON: {
        name: 'Full Moon',
        DC: 20,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 2 },
        ],
        effects: 'Gain temporary HP equal to max HP',
        duration: {
            everyday: '2 rounds',
            common: '4 rounds',
            uncommon: '1 minute',
            rare: '10 minutes',
        },
        toxicity: {
            everyday: 20,
            common: 30,
            uncommon: 40,
            rare: 50,
        },
    },
    GOLDEN_ORIOLE: {
        name: 'Golden Oriole',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
        ],
        effects: 'Resistant to poison damage (not including toxicity)',
        duration: {
            everyday: '30 minutes',
            common: '1 hour',
            uncommon: '4 hours',
            rare: '8 hours',
        },
        toxicity: {
            everyday: 10,
            common: 15,
            uncommon: 30,
            rare: 50,
        },
    },
    KISS: {
        name: 'Kiss',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Imbiber resistant to slashing damage',
        duration: {
            everyday: '30 minutes',
            common: '1 hour',
            uncommon: '4 hours',
            rare: '8 hours',
        },
        toxicity: {
            everyday: 10,
            common: 15,
            uncommon: 30,
            rare: 50,
        },
    },
    MARIBOR_FOREST: {
        name: 'Maribor Forest',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: 'Removes exhaustion and returns max amount of HP per Hit Die spent',
        duration: {
            uncommon: '24 hours',
        },
        toxicity: {
            uncommon: 75,
        },
    },
    PETRIS_PHILTER: {
        name: 'Petri\'s Philter',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 2 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Imposes disadvantage against saving throws vs Signs',
        duration: {
            everyday: '1 minute',
            common: '5 minutes',
            uncommon: '20 minutes',
            rare: '1 hour',
        },
        toxicity: {
            everyday: 20,
            common: 30,
            uncommon: 40,
            rare: 50,
        },
    },
    SHRIKE: {
        name: 'Shrike',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 2 },
        ],
        effects: 'Increase critical chance (nat 19 imposes a critical hit)',
        duration: {
            everyday: '1 minute',
            common: '3 minutes',
            uncommon: '10 minutes',
            rare: '1 hour',
        },
        toxicity: {
            everyday: 30,
            common: 40,
            uncommon: 50,
            rare: 75,
        },
    },
    SWALLOW: {
        name: 'Swallow',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'Gain regeneration (roll a Hit Die and gain those hit points every third round. Does not exceed full health or expend the die)',
        duration: {
            everyday: '5 minutes',
            common: '15 minutes',
            uncommon: '30 minutes',
            rare: '1 hour',
        },
        toxicity: {
            everyday: 15,
            common: 25,
            uncommon: 35,
            rare: 45,
        },
    },
    TAWNY_OWL: {
        name: 'Tawny Owl',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 2 },
        ],
        effects: 'Advantage on concentration checks (concentrate for a round and gain two expended signs)',
        duration: {
            everyday: '2 rounds',
            common: '4 rounds',
            uncommon: '1 minute',
            rare: '5 minutes',
        },
        toxicity: {
            everyday: 10,
            common: 20,
            uncommon: 30,
            rare: 40,
        },
    },
    THUNDERBOLT: {
        name: 'Thunderbolt',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1},
            { category: IngredientCategory.VERMILION, amount: 2 },
        ],
        effects: 'Increase strength score to 21',
        duration: {
            everyday: '1 hour',
            common: '5 hours',
            uncommon: '12 hours',
            rare: '24 hours',
        },
        toxicity: {
            everyday: 50,
            common: 65,
            uncommon: 80,
            rare: 95,
        },
    },
    WHITE_HONEY: {
        name: 'White Honey',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1},
            { category: IngredientCategory.REBIS, amount: 1},
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'Cancels all potion effects and reduces current toxicity to 0 (cannot consume again for 24 hours)',
        duration: {
            everyday: '1 round',
        },
        toxicity: {
            everyday: 0,
        },
    },
    WHITE_RAFFARDS_DECOCTION: {
        name: 'White Raffard\'s Decoction',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
        ],
        effects: 'Instantly regain HP and add constitution modifier',
        duration: {
            everyday: 'Inst. (d4)',
            common: 'Inst. (d6)',
            uncommon: 'Inst. (d8)',
            rare: 'Inst. (2d8)',
        },
        toxicity: {
            everyday: 35,
            common: 45,
            uncommon: 55,
            rare: 65,
        },
    },
    WILLOW: {
        name: 'Willow',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: 'Gain advantage against effects that would stun or knock the imbiber prone',
        duration: {
            everyday: '30 minutes',
            common: '1 hour',
            uncommon: '4 hours',
            rare: '8 hours',
        },
        toxicity: {
            everyday: 30,
            common: 40,
            uncommon: 50,
            rare: 75,
        },
    },
    WOLF: {
        name: 'Wolf',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Inflict dangerous crits (with a weapon add an extra damage die, Igni gains 1d6 fire on each turn, Aard knocks target prone)',
        duration: {
            everyday: '30 minutes',
            common: '1 hour',
            uncommon: '2 hours',
            rare: '4 hours',
        },
        toxicity: {
            everyday: 20,
            common: 25,
            uncommon: 40,
            rare: 45,
        },
    },
    WOLVERINE: {
        name: 'Wolverine',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Weapon attacks deal +5 damage when imbiber\'s HP is half or lower',
        duration: {
            everyday: '20 minutes',
            common: '40 minutes',
            uncommon: '1 hour',
            rare: '2 hours',
        },
        toxicity: {
            everyday: 15,
            common: 25,
            uncommon: 35,
            rare: 45,
        },
    },


    // {
    //     name: '',
    //     ingredients: [
    //         {category: IngredientCategory.AETHER, amount: 1},
    //         {category: IngredientCategory.QUEBRITH, amount: 1},
    //         {category: IngredientCategory.VERMILION, amount: 1},
    //     ],
    //     effects: '',
    //     duration: {
    //         everyday: '',
    //         common: '',
    //         uncommon: '',
    //         rare: '',
    //     },
    //     toxicity: {
    //         everyday: 0,
    //         common: 1,
    //         uncommon: 0,
    //         rare: 5,
    //     },
    // },
};