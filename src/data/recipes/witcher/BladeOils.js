import IngredientCategory from '../../../helper/IngredientCategory';

const creatures = 'Increased damage (+5) to creatures of this type';

export default [
    {
        name: 'Beast Oil',
        DC: 14,
        ingredients: [
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Cursed Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.VERMILION, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Draconid Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.QUEBRITH, amount: 2},
            {category: IngredientCategory.HYDRAGENUM, amount: 2},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Elementa Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1}, 
            {category: IngredientCategory.VERMILION, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Hanged Man\'s Venom',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.CAELUM, amount: 1},
            {category: IngredientCategory.SOL, amount: 1},
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
        ],
        effects: 'Increased damage (+5) against humanoids',
        duration: '1 hour',
    },
    {
        name: 'Hybrid Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.SOL, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Insectoid Oil',
        DC: 14,
        ingredients: [
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.REBIS, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Necrophage Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.SOL, amount: 1},
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Ogroid Oil',
        DC: 15,
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
            {category: IngredientCategory.CAELUM, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Relict Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.QUEBRITH, amount: 1},
            {category: IngredientCategory.VERMILION, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Specter Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    {
        name: 'Vampire Oil',
        DC: 16,
        ingredients: [
            {category: IngredientCategory.AETHER, amount: 1},
            {category: IngredientCategory.SOL, amount: 2},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
// {
    //     name: '',
    //     ingredients: [
    //         {category: IngredientCategory.VITRIOL, amount: 2},
    //         {category: IngredientCategory.HYDRAGENUM, amount: 1},
    //         {category: IngredientCategory.FULGUR, amount: 1},
    //     ],
    //     effects: '',
    //     duration: '',
    // },
];