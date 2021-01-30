import Crafting from '../../../../wttrpg/Crafting';

export default {
    DARK_STEEL: {
        name: 'Dark Steel',
        DC: 17,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.DARK_IRON.item, amount: 1 },
            { component: Crafting.COAL.item, amount: 5 },
        ],
        investment: 55,
        cost: 110,
    },
    LYRIAN_LEATHER: {
        name: 'Lyrian Leather',
        DC: 17,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.LEATHER.item, amount: 1 },
            { component: Crafting.OGRE_WAX.item, amount: 1 },
            { component: Crafting.COAL.item, amount: 2 },
        ],
        investment: 40,
        cost: 80,
    },
    STEEL: {
        name: 'Steel',
        DC: 15,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.COAL.item, amount: 5 },
        ],
        investment: 35,
        cost: 70,
    },
    TRETOGOR_STEEL: {
        name: 'Tretogor Steel',
        DC: 16,
        craftTime: '1 Hour',
        ingredients: [
            { component: Crafting.IRON.item, amount: 1 },
            { component: Crafting.COAL.item, amount: 5 },
            { component: Crafting.FEATHERS.item, amount: 2 },
        ],
        investment: 43,
        cost: 86,
    },
}