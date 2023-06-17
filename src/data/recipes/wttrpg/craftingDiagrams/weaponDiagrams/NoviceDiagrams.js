import Crafting from '../../../../wttrpg/Crafting';

export default {
    AMMUNITION_BLUNT: {
        name: 'Ammunition, Blunt',
        craftAmount: 5,
        DC: 12,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 1 },
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.FEATHERS.item, amount: 1 },
        ],
        investment: 37,
        cost: 74,
    },
    AMMUNITION_STANDARD: {
        name: 'Ammunition, Standard',
        craftAmount: 30,
        DC: 10,
        craftTime: '2 Hours',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 1 },
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.FEATHERS.item, amount: 1 },
        ],
        investment: 37,
        cost: 14,
    },
    ARMING_SWORD: {
        name: 'Arming Sword',
        DC: 13,
        craftTime: '7 Hours',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 2 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.STEEL.item, amount: 3 },
        ],
        investment: 201,
        cost: 404,
    },
    BRASS_KNUCKLES: {
        name: 'Brass Knuckles',
        DC: 10,
        craftTime: '2 Hours',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.RESIN.item, amount: 2 },
            { component: Crafting.WAX.item, amount: 1 },
        ],
        investment: 72,
        cost: 125,
    },
    DAGGER: {
        name: 'Dagger',
        DC: 8,
        craftTime: '2 Hours',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 1 },
            { component: Crafting.IRON.item, amount: 1 },
        ],
        investment: 33,
        cost: 74,
    },
    GLEDDYF: {
        name: 'Gleddyf',
        DC: 14,
        craftTime: '7 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 1 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.STEEL.item, amount: 3 },
        ],
        investment: 210,
        cost: 426,
    },
    HAND_AXE: {
        name: 'Hand Axe',
        DC: 10,
        craftTime: '3 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.STEEL.item, amount: 1 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 1 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.RESIN.item, amount: 4 },
        ],
        investment: 148,
        cost: 306,
    },
    HUNTERS_FALCHION: {
        name: 'Hunter\'s Falchion',
        DC: 14,
        craftTime: '7 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.STEEL.item, amount: 3 },
            { component: Crafting.ESTER_GREASE.item, amount: 4 },
        ],
        investment: 240,
        cost: 486,
    },
    IRON_LONG_SWORD: {
        name: 'Iron Long Sword',
        DC: 10,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 1 },
            { component: Crafting.IRON.item, amount: 2 },
            { component: Crafting.LEATHER.item, amount: 2 },
        ],
        investment: 119,
        cost: 240,
    },
    Orions: {
        name: 'Orions',
        craftAmount: 3,
        DC: 12,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 1 },
            { component: Crafting.OIL.item, amount: 2 },
            { component: Crafting.RIVER_CLAY.item, amount: 2 },
        ],
        investment: 62,
        cost: 125,
    },
    SHORT_BOW: {
        name: 'Short Bow',
        DC: 15,
        craftTime: '8 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 4 },
            { component: Crafting.THREAD.item, amount: 4 },
            { component: Crafting.WAX.item, amount: 2 },
            { component: Crafting.RESIN.item, amount: 2 },
            { component: Crafting.ESTER_GREASE.item, amount: 3 },
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.LEATHER.item, amount: 2 },
        ],
        investment: 210,
        cost: 434,
    },
    SPEAR: {
        name: 'Spear',
        DC: 12,
        craftTime: '6 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 5 },
            { component: Crafting.STEEL.item, amount: 2 },
            { component: Crafting.RESIN.item, amount: 2 },
            { component: Crafting.LEATHER.item, amount: 2 },
        ],
        investment: 276,
        cost: 562,
    },
    THROWING_AXE: {
        name: 'Throwing Axe',
        craftAmount: 3,
        DC: 10,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 2 },
            { component: Crafting.STEEL.item, amount: 1 },
        ],
        investment: 51,
        cost: 116,
    },
    THROWING_KNIFE: {
        name: 'Throwing Knife',
        craftAmount: 3,
        DC: 8,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 1 },
        ],
        investment: 48,
        cost: 74,
    },
}

// {
//     name: '',
//     DC: 14,
//     craftTime: '1 Hour',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },