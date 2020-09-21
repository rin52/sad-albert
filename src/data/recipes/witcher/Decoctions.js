import IngredientCategory from '../../../helper/IngredientCategory';

export default [
    {
        name: 'Chort',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.BLUE_MUTAGEN, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Increase dexterity score to 24',
        duration: '20 minutes',
        toxicity: 80,
    },
    {
        name: 'Forktail',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.BLUE_MUTAGEN, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Cannot be flanked, and can use reaction after being attacked to riposte',
        duration: '10 minutes',
        toxicity: 75,
    },
    {
        name: 'Ghoul',
        DC: 14,
        ingredients: [
            { category: IngredientCategory.RED_MUTAGEN, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1},
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Induces a frenzy that halves all damage inflicted on imbiber',
        duration: '10 minutes',
        toxicity: 65,
    },
    {
        name: 'Griffin',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.GREEN_MUTAGEN, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1},
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'Imbiber inspires himself and an ally of his choice, granting 2d8 extra damage',
        duration: '6 rounds',
        toxicity: 70,
    },
    {
        name: 'Kikimore',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.GREEN_MUTAGEN, amount: 1 },
            {category: IngredientCategory.SOL, amount: 1},
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 2 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Every attack that lands against an enemy does an extra 2d10 poison damage',
        duration: '10 minutes',
        toxicity: 50,
    },
    {
        name: 'Nekker',
        DC: 14,
        ingredients: [
            { category: IngredientCategory.RED_MUTAGEN, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1},
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'Reaction, add +5 to AC during an attack that may hit (gain Shield spell effects). If they miss, use full movement to flee from enemy',
        duration: '15 minutes',
        toxicity: 45,
    },
    {
        name: 'Noonwraith',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.GREEN_MUTAGEN, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            {category: IngredientCategory.SOL, amount: 1},
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1},
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Imitate spell "Mirror Image" to create four duplicates',
        duration: '30 minutes',
        toxicity: 65,
    },
    {
        name: 'Vampire',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.RED_MUTAGEN, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 2},
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'If knocked down to 0 HP, rise again with 10 HP instantly',
        duration: '30 minutes',
        toxicity: 95,
    },
    {
        name: 'Werewolf',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.RED_MUTAGEN, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1},
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Advantage on all perception checks, and increase strength to 24',
        duration: '20 minutes',
        toxicity: 85,
    },
    {
        name: 'Wyvern',
        DC: 18,
        ingredients: [
            { category: IngredientCategory.RED_MUTAGEN, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 2},
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Gain an extra attack and double movement',
        duration: '15 minutes',
        toxicity: 70,
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
]