import IngredientCategory from '../../../../helper/IngredientCategory';

export default {
    BERSERKERS_BREW: {
        name: 'Berserker\'s Brew',
        DC: 22,
        formulaeCost: '93 gp',
        cost: '62 gp',
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 3 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 2 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: 'When consumed, the imbiber must make a DC 16 Con save. If they fail, they must use ' +
            'their turn to attack the closest person. Each round at the beginning of their turn, the ' +
            'imbiber can attempt another DC 16 Con save. If they suceed, they can chose who they attack ' +
            'that turn. This check must be redone at their next turn. While under the effects, the user ' +
            'benefits the effects of a Barbarian\'s rage skill. These effects last for 1d10 rounds.',
    },
    BREDANS_FURY: {
        name: 'Bredan\'s Fury',
        DC: 22,
        formulaeCost: '84 gp',
        cost: '55 gp',
        weight: 0.5,
        ingredients: [
            { category: IngredientCategory.SOL, amount: 3 },
            { category: IngredientCategory.FULGUR, amount: 3 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'As an action, you can throw this flask up to 20 feet, shattering it on impact. ' +
            'Bredan\'s Fury explodes when exposed to air, doing 2d6 fire damage to any creature within a 5 foot radius.',
    },
    FISSTECH: {
        name: 'Fisstech',
        DC: 18,
        hide: true,
        formulaeCost: '70 gp',
        cost: '47 gp',
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 3 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Fisstech sends those who snort or rub it on their gums into a euphoric trance-like ' +
            'state. It is often used as an anesthetic, as it numbs pain. It is highly addictive. After ' +
            'each use, make a DC 18 Con save. If you fail, you become addicted.',
    },
    PANTAGRANS_ELIXIR: {
        name: 'Pantagran\'s Elixir',
        DC: 17,
        formulaeCost: '60 gp',
        cost: '40 gp',
        weight: 0.5,
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Consuming a draught of Pantagran\'s elixir brings delirious happiness. This effect ' +
            'lasts for 1d6/2 hours and leaves the imbiber incredibly suceptible to Charisma based checks ' +
            '(similar to Charm Person/Friends).',
    },
    PERFUME_POTION: {
        name: 'Perfume Potion',
        DC: 18,
        formulaeCost: '67 gp',
        cost: '45 gp',
        weight: 0.5,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
        ],
        effects: 'Someone who consumes a draught of perfume potion must make a DC 16 Con save. Failure ' +
            'causes intoxication for 1d10 hours. This intoxication can only be undone by magic or wives\' ' +
            'tears potion.',
        toxicity: '25',
    },
    TALGARS_TEARS: {
        name: 'Talgar\'s Tears',
        DC: 20,
        formulaeCost: '70 gp',
        cost: '47 gp',
        weight: 0.5,
        ingredients: [
            { category: IngredientCategory.HYDRAGENUM, amount: 3 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
        ],
        effects: 'Talgar\'s tears immediately freezes anything it is thrown on. Range is 20 feet. The ' +
            'liquid splatters in a 10 foot cone directly away from where it lands, freezing anything it hits.' +
            '(Restrained for 1d4 rounds, possible athletics check to escape)',
    },
    ZERRIKANIAN_FIRE: {
        name: 'Zerrikanian Fire',
        DC: 17,
        formulaeCost: '57 gp',
        cost: '38 gp',
        weight: 0.5,
        ingredients: [
            { category: IngredientCategory.SOL, amount: 2 },
            { category: IngredientCategory.REBIS, amount: 3 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'Zerrikanian fire immedately sets whatever it touches on fire. Range is 20 feet. The ' +
            'liquid splatters in a 10 foot cone directly away from where it lands, lighting anyone and anything in ' +
            'that area on fire.',
    },

    // {
    //     name: '',
    //     ingredients: [
    //         { category: IngredientCategory.AETHER, amount: 2 },
    //         { category: IngredientCategory.HYDRAGENUM, amount: 1 },
    //         { category: IngredientCategory.VERMILION, amount: 1},
    //     ],
    //     effects: '',
    // },
}