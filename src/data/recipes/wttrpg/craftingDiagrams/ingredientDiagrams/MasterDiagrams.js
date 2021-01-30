import Crafting from '../../../../wttrpg/Crafting';

export default {
    DIMERITIUM: {
        name: 'Dimeritium',
        DC: 20,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.GLOWING_ORE.item, amount: 2 },
        ],
        investment: 160,
        cost: 320,
    },
    DRACONID_LEATHER: {
        name: 'Draconid Leather',
        DC: 18,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.DRACONID_SCALES.item, amount: 1 },
            { component: Crafting.TANNING_HERB.item, amount: 3 },
        ],
        investment: 39,
        cost: 78,
    },
    MAHAKAMAN_DIMERITIUM: {
        name: 'Mahakaman Dimeritium',
        DC: 24,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.GLOWING_ORE.item, amount: 2 },
            { component: Crafting.RIVER_CLAY.item, amount: 3 },
            { component: Crafting.ASHES.item, amount: 2 },
            { component: Crafting.BEAST_BONES.item, amount: 3 },
        ],
        investment: 201,
        cost: 402,
    },
    MAHAKAMAN_STEEL: {
        name: 'Mahakaman Steel',
        DC: 22,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.COAL.item, amount: 5 },
            { component: Crafting.ASHES.item, amount: 2 },
            { component: Crafting.RIVER_CLAY.item, amount: 3 },
            { component: Crafting.BEAST_BONES.item, amount: 3 },
        ],
        investment: 76,
        cost: 152,
    },
}

// {
//     name: '',
//     DC: 24,
//     craftTime: '1 Hour',
//     ingredients: [
//         { component: Crafting..item, amount: 1 },
//         { component: Crafting..item, amount: 1 },
//     ],
//     investment: ,
//     cost: ,
// },