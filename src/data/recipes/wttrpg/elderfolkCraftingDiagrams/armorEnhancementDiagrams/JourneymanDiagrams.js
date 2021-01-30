import Crafting from '../../../../wttrpg/Crafting';

export default {
    CHAIN_MAIL: {
        name: 'Chain Mail',
        DC: 17,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 2 },
        ],
        investment: 96,
        cost: 187,
    },
    HARDENED_LEATHER: {
        name: 'Hardened Leather',
        DC: 16,
        craftTime: '4 Hours',
        ingredients: [
            { component: Crafting.HARDENED_LEATHER.item, amount: 1 },
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 5 },
            { component: Crafting.WAX.item, amount: 3 },
        ],
        investment: 97,
        cost: 195,
    },
    STEEL: {
        name: 'Steel',
        DC: 18,
        craftTime: '5 Hours',
        ingredients: [
            { component: Crafting.STEEL.item, amount: 2 },
            { component: Crafting.THREAD.item, amount: 3 },
            { component: Crafting.ETCHING_ACID.item, amount: 2 },
        ],
        investment: 109,
        cost: 217,
    },
}

// {
//     name: '',
//     DC: 17,
//     craftTime: '5 Hours',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },