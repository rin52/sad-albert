import IngredientCategory from '../../../../helper/IngredientCategory';

export default {
    ACID_SOLUTION: {
        name: 'Acid Solution',
        DC: 16,
        craftTime: '15 Minutes',
        formulaeCost: 84,
        cost: 56,
        weight: 0.5,
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 3 },
        ],
        effects: 'Acid solution does 2d6 damage to any living creature it is thrown on and does 1d6/2 '
            + 'ablation damage to weapons and armor. Throwing it is an Athletics attack with a range '
            + 'equal to your BODYx2m, and the acid splatters in a 2m cone directly away from where it '
            + 'lands.',
    },
    ALCHEMICAL_ADHESIVE: {
        name: 'Alchemical Adhesive',
        DC: 15,
        craftTime: '10 Minutes',
        formulaeCost: 52,
        cost: 28,
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'Alchemical adhesive can be thrown or poured onto a place or person. After 2 rounds '
            + 'the solution will harden, sticking objects together, and sticking people to one another '
            + 'or to objects. The objects must be pried apart with a DC:16 Physique check. Throwing it '
            + 'is an Athletics attack with a range equal to your BODYx2m.',
    },
    BLACK_VENOM: {
        name: 'Black Venom',
        DC: 15,
        craftTime: '10 Minutes',
        formulaeCost: 67,
        cost: 45,
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'Black venom immediately poisons a target if it gets into their bloodstream or is ingested. A DC:16 ' +
            'Endurance check ends the effect, but the target can become poisoned again if they consume more black ' +
            'venom or are cut by a poisoned weapon.',
        notes: 'To coat a blade with black venom requires a full round and the weapon remains poisoned for 1d10 rounds. '
            + 'In drinks, it takes a DC:16 Awareness check to realize the drink is poisoned.',
    },
    CADAVERINE_SOLUTION: {
        name: 'Cadaverine Solution',
        DC: 16,
        craftTime: '15 Minutes',
        formulaeCost: 114,
        cost: 76,
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 4 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'A slashing or piercing weapon coated in Cadaverine inflicts both the poisoned and the ' +
            'nauseated conditions on a target on a successfuly damaging attack. Two separate (DC:16) ' +
            'Endurance checks must be made to end both conditions.',
    },
    CELESTINE: {
        name: 'Celestine',
        DC: 16,
        craftTime: '15 Minutes',
        formulaeCost: 93,
        cost: 62,
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Consuming a dose of Celestine causes the imbiber to hallucinate colorful lights and ' +
            'pleasant sounds. This makes focusing difficult and imposes a -2 penalty to Awareness ' +
            'and any other task that requires focus. This condition ends in 2d10 minutes but a DC:14 ' +
            'Endurance check ends the condition early.',
    },
    CHLOROFORM: {
        name: 'Chloroform',
        DC: 16,
        craftTime: '15 Minutes',
        formulaeCost: 54,
        cost: 36,
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'Chloroform forces anyone who breathes it to make a Stun save at -2 or be knocked ' +
            'unconscious until they do make the save. Usually it requires a Melee attack with a cloth ' +
            'soaked in the chloroform. It can also be poured into a vessel. Each bottle contains 25 doses.',
    },
    QUICK_FIRE: {
        name: 'Quick Fire',
        DC: 16,
        craftTime: '15 Minutes',
        formulaeCost: 67,
        cost: 45,
        weight: 0.1,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 2 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'A dose of quick fire poured on a person, surface, or object, dries quickly. Anything ' +
            'so treated is extremely flamable. There\'s a 50% chance it will ignite each time it\'s exposed ' +
            'to flame or sparks of any kind.',
        notes: 'If a target doused in quick fire is hit by a spell or item which has a percent chance to '
            + 'light them on fire, the odds raise by 50%.',
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