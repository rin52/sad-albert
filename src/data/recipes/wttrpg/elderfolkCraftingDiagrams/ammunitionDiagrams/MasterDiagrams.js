import Crafting from '../../../../wttrpg/Crafting';

export default {
    DWARVEN_IMPACT: {
        name: 'Dwarven Impact',
        craftAmount: 5,
        DC: 20,
        craftTime: '1/2 Hour',
        ingredients: [
            { component: Crafting.MAHAKAMAN_DIMERITIUM.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.FEATHERS.item, amount: 1 },
            { component: Crafting.OGRE_WAX.item, amount: 2 },
            { component: Crafting.IRON.item, amount: 1 },
        ],
        investment: 184,
        cost: 100,
    },
    ELVEN_BURROWER: {
        name: 'Elven Burrower',
        craftAmount: 5,
        DC: 20,
        craftTime: '1/2 Hour',
        ingredients: [
            { component: Crafting.DARK_STEEL.item, amount: 1 },
            { component: Crafting.HARDENED_TIMBER.item, amount: 1 },
            { component: Crafting.FEATHERS.item, amount: 2 },
            { component: Crafting.SHARPENING_GRIT.item, amount: 2 },
            { component: Crafting.OGRE_WAX.item, amount: 1 },
            { component: Crafting.RESIN.item, amount: 1 },
            { component: Crafting.THREAD.item, amount: 1 },
        ],
        investment: 185,
        cost: 100,
    },
}

// {
//     name: '',
//     craftAmount: 5,
//     DC: 20,
//     craftTime: '1/2 Hour',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 2 },
//     ],
//     investment: ,
//     cost: ,
// },