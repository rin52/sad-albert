import Crafting from "../../../../wttrpg/Crafting";

export default {
    DOUBLE_WOVEN_LINEN: {
        name: 'Double Woven Linen',
        DC: 14,
        craftTime: '1/2 Hour',
        ingredients: [
            { component: Crafting.LINEN.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 2 },
        ],
        investment: 15,
        cost: 30,
    },
    HARDENED_LEATHER: {
        name: 'Hardened Leather',
        DC: 14,
        craftTime: '1/2 Hour',
        ingredients: [
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.WAX.item, amount: 2 },
        ],
        investment: 32,
        cost: 64,
    },
    HARDENED_TIMBER: {
        name: 'Hardened Timber',
        DC: 12,
        craftTime: '1/2 Hour',
        ingredients: [
            { component: Crafting.TIMBER.item, amount: 1 },
            { component: Crafting.RESIN.item, amount: 3 },
        ],
        investment: 11,
        cost: 21,
    },
    LEATHER: {
        name: 'Leather',
        DC: 12,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.COW_HIDE.item, amount: 1 },
            { component: Crafting.TANNING_HERB.item, amount: 3 },
        ],
        investment: 19,
        cost: 38,
    },
    LINEN: {
        name: 'Linen',
        DC: 10,
        craftTime: '15 Minutes',
        ingredients: [
            { component: Crafting.THREAD.item, amount: 2 },
        ],
        investment: 6,
        cost: 12,
    },
    THREAD: {
        name: 'Thread',
        DC: 10,
        craftTime: '15 Minutes',
        ingredients: [
            { component: Crafting.COTTON.item, amount: 2 },
        ],
        investment: 2,
        cost: 4,
    },
}


// {
//     name: '',
//     DC: 14,
//     craftTime: '1/2 Hour',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },