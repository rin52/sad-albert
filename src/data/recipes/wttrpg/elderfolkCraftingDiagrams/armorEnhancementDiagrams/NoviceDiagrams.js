import Crafting from '../../../../wttrpg/Crafting';

export default {
    FIBER: {
        name: 'Fiber',
        DC: 14,
        craftTime: '3 Hours',
        ingredients: [
            { component: Crafting.DOUBLE_WOVEN_LINEN.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 2 },
        ],
        investment: 28,
        cost: 60,
    },
    STUDDED_LEATHER: {
        name: 'Studded Leather',
        DC: 14,
        craftTime: '3 Hours',
        ingredients: [
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 1 },
        ],
        investment: 61,
        cost: 120,
    },
}

// {
//     name: '',
//     DC: 14,
//     craftTime: '3 Hours',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },