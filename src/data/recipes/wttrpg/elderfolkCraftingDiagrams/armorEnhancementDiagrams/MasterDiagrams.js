import Crafting from '../../../../wttrpg/Crafting';

export default {
    ELVEN: {
        name: 'Elven',
        DC: 24,
        craftTime: '6 Hours',
        ingredients: [
            { component: Crafting.DARK_STEEL.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 5 },
            { component: Crafting.FEATHERS.item, amount: 1 },
        ],
        investment: 149,
        cost: 300,
    },
    DWARVEN: {
        name: 'Dwarven',
        DC: 24,
        craftTime: '6 Hours',
        ingredients: [
            { component: Crafting.MAHAKAMAN_STEEL.item, amount: 1 },
            { component: Crafting.WOLF_HIDE.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 5 },
        ],
        investment: 144,
        cost: 292,
    },
}

// {
//     name: '',
//     DC: 24,
//     craftTime: '6 Hours',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 5 },
//     ],
//     investment: ,
//     cost: ,
// },