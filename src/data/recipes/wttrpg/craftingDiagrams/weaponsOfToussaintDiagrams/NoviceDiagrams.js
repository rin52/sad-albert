import Crafting from '../../../../wttrpg/Crafting';

export default {
    PEASANTS_MAUL: {
        name: 'Peasant\'s Maul',
        DC: 12,
        craftTime: '3 Hours',
        ingredients: [
            { component: Crafting.ESTER_GREASE.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 6 },
            { component: Crafting.IRON.item, amount: 3 },
            { component: Crafting.LEATHER.item, amount: 3 },
            { component: Crafting.WAX.item, amount: 2 },
        ],
        investment: 282,
        cost: 562,
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