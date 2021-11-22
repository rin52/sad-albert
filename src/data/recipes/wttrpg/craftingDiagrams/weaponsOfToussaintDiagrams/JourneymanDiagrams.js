import Crafting from '../../../../wttrpg/Crafting';

export default {
    BLUNTED_LANCE: {
        name: 'Blunted Lance',
        DC: 15,
        craftTime: '6 Hours',
        ingredients: [
            { component: Crafting.DARK_IRON.item, amount: 1 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 9 },
            { component: Crafting.OGRE_WAX.item, amount: 3 },
            { component: Crafting.STEEL.item, amount: 1 },
        ],
        investment: 370,
        cost: 750,
    },
    HORSEMANS_HAMMER: {
        name: 'Horseman\'s Hammer',
        DC: 18,
        craftTime: '9 Hours',
        ingredients: [
            { component: Crafting.DARK_IRON.item, amount: 3 },
            { component: Crafting.DARK_STEEL.item, amount: 4 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 3 },
            { component: Crafting.OGRE_WAX.item, amount: 2 },
        ],
        investment: 648,
        cost: 1290,
    },
    HUNTSMANS_CROSSBOW: {
        name: 'Huntsman\'s Crossbow',
        DC: 18,
        craftTime: '9 Hours',
        ingredients: [
            { component: Crafting.HARDENED_LEATHER.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 3 },
            { component: Crafting.MAHAKAMAN_STEEL.item, amount: 3},
            { component: Crafting.OGRE_WAX.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 4},
        ],
        investment: 460,
        cost: 900,
    },
    PARTISAN: {
        name: 'Partisan',
        DC: 16,
        craftTime: '8 Hours',
        ingredients: [
            { component: Crafting.DARK_IRON.item, amount: 3 },
            { component: Crafting.DARK_STEEL.item, amount: 2 },
            { component: Crafting.ESTER_GREASE.item, amount: 2},
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 7},
            { component: Crafting.OGRE_WAX.item, amount: 2 },
        ],
        investment: 515,
        cost: 1126,
    },
    WAR_LANCE: {
        name: 'War Lance',
        DC: 15,
        craftTime: '6 Hours',
        ingredients: [
            { component: Crafting.DARK_IRON.item, amount: 2 },
            { component: Crafting.HARDENED_LEATHER.item, amount: 2 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 9 },
            { component: Crafting.OGRE_WAX.item, amount: 3 },
            { component: Crafting.STEEL.item, amount: 1},
        ],
        investment: 392,
        cost: 825,
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