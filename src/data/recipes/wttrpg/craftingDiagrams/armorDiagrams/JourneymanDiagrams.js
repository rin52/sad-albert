import Crafting from '../../../../wttrpg/Crafting';

export default {
    ARMORED_HOOD: {
        name: 'Armored Hood',
        DC: 17,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.LEATHER.item, amount: 2 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 3 },
            { component: Crafting.DOUBLE_WOVEN_LINEN.item, amount: 3 },
            { component: Crafting.THREAD.item, amount: 4 },
            { component: Crafting.OGRE_WAX.item, amount: 3 },
        ],
        investment: 260,
        cost: 524,
    },
    ARMORED_TROUSERS: {
        name: 'Armored Trousers',
        DC: 16,
        craftTime: '8 Hours',
        ingredients: [
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.STEEL.item, amount: 1 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 5 },
        ],
        investment: 187,
        cost: 374,
    },
    BRIGANDINE: {
        name: 'Brigandine',
        DC: 16,
        craftTime: '8 Hours',
        ingredients: [
            { component: Crafting.LEATHER.item, amount: 3 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 3 },
        ],
        investment: 228,
        cost: 450,
    },
    CHAIN_COIF: {
        name: 'Chain Coif',
        DC: 16,
        craftTime: '4 Hours',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 4 },
        ],
        investment: 192,
        cost: 374,
    },
    KAEDWENI_SHIELD: {
        name: 'Kaedweni Shield',
        DC: 19,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 5 },
            { component: Crafting.DARK_STEEL.item, amount: 1 },
            { component: Crafting.BEAST_BONES.item, amount: 7 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.OGRE_WAX.item, amount: 5 },
            { component: Crafting.WAX.item, amount: 2 },
        ],
        investment: 300,
        cost: 600,
    },
    LYRIAN_LEATHER_JACKET: {
        name: 'Lyrian Leather Jacket',
        DC: 18,
        craftTime: '9 Hours',
        ingredients: [
            { component: Crafting.LYRIAN_LEATHER.item, amount: 4 },
            { component: Crafting.THREAD.item, amount: 6 },
            { component: Crafting.LEATHER.item, amount: 2 },
            { component: Crafting.LINEN.item, amount: 4 },
            { component: Crafting.STEEL.item, amount: 1 },
        ],
        investment: 392,
        cost: 786,
    },
    LYRIAN_LEATHER_TROUSERS: {
        name: 'Lyrian Leather Trousers',
        DC: 18,
        craftTime: '9 Hours',
        ingredients: [
            { component: Crafting.LYRIAN_LEATHER.item, amount: 4 },
            { component: Crafting.THREAD.item, amount: 6 },
            { component: Crafting.LEATHER.item, amount: 2 },
            { component: Crafting.LINEN.item, amount: 4 },
            { component: Crafting.STEEL.item, amount: 1 },
        ],
        investment: 392,
        cost: 786,
    },
    REDANIAN_GREAVES: {
        name: 'Redanian Greaves',
        DC: 17,
        craftTime: '9 Hours',
        ingredients: [
            { component: Crafting.HARDENED_LEATHER.item, amount: 4 },
            { component: Crafting.LEATHER.item, amount: 2 },
            { component: Crafting.TRETEGOR_STEEL.item, amount: 3 },
            { component: Crafting.THREAD.item, amount: 5 },
        ],
        investment: 295,
        cost: 600,
    },
    REDANIAN_HALBERDIERS_ARMOR: {
        name: 'Redanian Halberdier\'s Armor',
        DC: 17,
        craftTime: '9 Hours',
        ingredients: [
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.TRETEGOR_STEEL.item, amount: 5 },
            { component: Crafting.THREAD.item, amount: 5 },
        ],
        investment: 299,
        cost: 600,
    },
    SKELLIGE_RAIDER_SHIELD: {
        name: 'Skellige Raider Shield',
        DC: 18,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.HARDENED_TIMBER.item, amount: 5 },
            { component: Crafting.DARK_STEEL.item, amount: 1 },
            { component: Crafting.BEAST_BONES.item, amount: 5 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.OGRE_WAX.item, amount: 1 },
        ],
        investment: 240,
        cost: 486,
    },
    STEEL_KITE_SHIELD: {
        name: 'Steel Kite Shield',
        DC: 17,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 4 },
            { component: Crafting.DARK_STEEL.item, amount: 1 },
            { component: Crafting.LEATHER.item, amount: 1 },
        ],
        investment: 302,
        cost: 600,
    },
    TEMERIAN_ARMET: {
        name: 'Temerian Armet',
        DC: 18,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 4 },
            { component: Crafting.LEATHER.item, amount: 3 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 3 },
            { component: Crafting.ESTER_GREASE.item, amount: 2 },
        ],
        investment: 352,
        cost: 712,
    },
}

// {
//     name: '',
//     DC: 16,
//     craftTime: '9 Hours',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },