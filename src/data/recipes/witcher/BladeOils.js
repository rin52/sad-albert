import IngredientCategory from '../../../helper/IngredientCategory';

const creatures = 'Increased damage (+5) to creatures of this type';

export default {
    BEAST_OIL: {
        name: 'Beast Oil',
        DC: 14,
        ingredients: [
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    CURSED_OIL: {
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
    DRACONID_OIL: {
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
    ELEMENTA_OIL: {
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
    HANGED_MANS_VENOM: {
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
    HYBRID_OIL: {
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
    INSECTOID_OIL: {
        name: 'Insectoid Oil',
        DC: 14,
        ingredients: [
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.REBIS, amount: 1},
        ],
        effects: creatures,
        duration: '1 hour',
    },
    NECROPHAGE_OIL: {
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
    OGROID_OIL: {
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
    RELICT_OIL: {
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
    SPECTER_OIL: {
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
    VAMPIRE_OIL: {
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
};