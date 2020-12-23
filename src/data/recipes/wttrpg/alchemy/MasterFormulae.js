import IngredientCategory from '../../../../helper/IngredientCategory';

export default {
    BERSERKERS_BREW: {
        name: 'Berserker\'s Brew',
        DC: 22,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 3 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 2 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: 'When consumed, the imbiber must make an Endurance check at DC:16. If they fail, they must use ' +
            'their turn to attack the closest person. Each round at the beginning of their turn, the ' +
            'imbiber can attempt another Endurance check DC:16. If they suceed, the frenzy subsides until ' +
            'their next turn, at which point they must make the Endurance check again or fall back into ' +
            'the frenzy. Berserker\'s Brew lasts 1d10 rounds.',
    },
    BREDANS_FURY: {
        name: 'Bredan\'s Fury',
        DC: 22,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.SOL, amount: 3 },
            { category: IngredientCategory.FULGUR, amount: 3 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Bredan\'s fury explodes when exposed to air, doing 2d6 damage to every body location of ' +
            'any creature within 2m. Throwing it is an Athletics attack with a range equal to your BODYx2m.',
    },
    FISSTECH: {
        name: 'Fisstech',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 3 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Fisstech sends those who snort or rub it on their gums into a euphoric trance-like ' +
            'state. It is often used as an anesthetic, as it numbs pain. It is highly addictive. After ' +
            'each use, make an Endurance check at DC:18. If you fail, you become addicted. See pg.32 for addiction rules.',
    },
    PANTAGRANS_ELIXIR: {
        name: 'Pantagran\'s Elixir',
        DC: 17,
        craftTime: '15 Minutes',
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Consuming a draught of Pantagran\'s elixir brings delirious happiness. This effect ' +
            'lasts for 1d6/2 hours and leaves the imbiber incredibly suceptible to Persuasion, Charisma, ' +
            'and Seduction giving them a -2 to Resist Coercion.',
    },
    PERFUME_POTION: {
        name: 'Perfume Potion',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
        ],
        effects: 'Someone who consumes a draught of perfume potion must make a DC:16 Endurance check. Failure ' +
            'causes intoxication for 1d10 hours. This intoxication can only be undone by magic or wives\' ' +
            'tears potion.',
        toxicity: '25%',
    },
    TALGARS_TEARS: {
        name: 'Talgar\'s Tears',
        DC: 20,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.HYDRAGENUM, amount: 3 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 2 },
        ],
        effects: 'Talgar\'s tears immediately freezes anything it is thrown on. If used on weapons, armor, ' +
            'or objects, those items take double ablation damage. Throwing it is an Athletics attack with a ' +
            'range equal to your BODYx2m, and the liquid splatters in a 2m cone directly away from where it ' +
            'lands, freezing anything it hits.'
    },
    ZERRIKANIAN_FIRE: {
        name: 'Zerrikanian Fire',
        DC: 17,
        craftTime: '15 Minutes',
        ingredients: [
            { category: IngredientCategory.SOL, amount: 2 },
            { category: IngredientCategory.REBIS, amount: 3 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'Zerrikanian fire immedately sets whatever it touches on fire. Throwing it is an Athletics ' +
            'attack with a range equal to your BODYx2m, and then it splatters in a 2m cone away from where it lands, ' +
            'lighting anyone and anything in that area on fire.',
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