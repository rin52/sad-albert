import Crafting from '../../../../wttrpg/Crafting';
import Ingredients from '../../../../wttrpg/Ingredients';

export default {
    DUCAL_SWORD: {
        name: 'Ducal Sword',
        DC: 23,
        craftTime: '12 Hours',
        ingredients: [
            { component: Crafting.DARK_STEEL.item, amount: 4 },
            { component: Crafting.GOLD.item, amount: 2 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1},
            { component: Crafting.SHARPENING_GRIT.item, amount: 1 },
        ],
        investment: 594,
        cost: 1200,
    },
    FLAMBERGE: {
        name: 'Flamberge',
        DC: 25,
        craftTime: '13 Hours',
        ingredients: [
            { component: Crafting.DARK_IRON.item, amount: 5},
            { component: Crafting.DARK_STEEL.item, amount: 4 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.SHARPENING_GRIT.item, amount: 2 },
        ],
        investment: 764,
        cost: 1540,
    },
    VIROLEDAN_BLADE: {
        name: 'Viroledan Blade',
        DC: 25,
        craftTime: '12 Hours',
        ingredients: [
            { component: Crafting.DARK_STEEL.item, amount: 5 },
            { component: Crafting.DARKENING_OIL.item, amount: 2},
            { component: Crafting.DRAKE_OIL.item, amount: 1 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.SHARPENING_GRIT.item, amount: 2 },
            { component: Ingredients.VENOM_EXTRACT.item, amount: 3 },
        ],
        investment: 745,
        cost: 1492,
    },
}


// {
//     name: '',
//     DC: 25,
//     craftTime: '13 Hours',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },