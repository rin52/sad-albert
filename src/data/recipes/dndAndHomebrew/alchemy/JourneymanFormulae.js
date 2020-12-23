import IngredientCategory from '../../../../helper/IngredientCategory';

export default {
    ACID_SOLUTION: {
        name: 'Acid Solution',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 3 },
        ],
        effects: 'As an action, you can splash the contents of this vial onto a creature within 5 feet ' +
            'of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged ' +
            'attack against a creature or object, treating the acid as n improvised weapon. On a hit, the ' +
            'target takes 2d6 acid damage.',
    },
    ALCHEMICAL_ADHESIVE: {
        name: 'Alchemical Adhesive',
        DC: 15,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'As an action, you can splash the contents of this vial onto a creature within 5 feet ' +
            'of you or throw the vial up to 20 feet onto a place or person. After 2 rounds the solution will ' +
            'harden, permanently sticking objects together, and sticking people to one another or to objects. ' +
            'The objects must be pried apart with a DC 16 Athletics check. Creatures stuck in this manner are considered Restrained',
    },
    BLACK_VENOM: {
        name: 'Black Venom',
        DC: 15,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'Immediately poisons a target if it gets into their bloodstream or is ingested. A DC 16 ' +
            'Con save ends the effect, but the target can become poisoned again if they consume more black ' +
            'venom or are cut by a poisoned weapon. It takes a DC 16 Perception check to realize it' +
            'is in a drink.',
    },
    CADAVERINE_SOLUTION: {
        name: 'Cadaverine Solution',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 4 },
            { category: IngredientCategory.FULGUR, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'A slashing or piercing weapon coated in Cadaverine inflicts both the poisoned and the ' +
            'paralyzed conditions on a target on a successfuly damaging attack. Two separate DC 16 Con saves ' +
            'must be made to end both conditions.',
    },
    CELESTINE: {
        name: 'Celestine',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Consuming a dose of Celestine causes the imbiber to hallucinate colorful lights and ' +
            'pleasant sounds. This makes focusing difficult and imposes a -5 penalty to passive perception ' +
            'and any other task that requires focus. This condition ends in 2d10 minutes but a DC 14 Con ' +
            'save ends the condition early.',
    },
    CHLOROFORM: {
        name: 'Chloroform',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 2 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'Chloroform forces anyone who breathes it to make a DC 13 Con save or be knocked ' +
            'unconscious until they do make the save. Usually it requires a Melee attack with a cloth ' +
            'soaked in the chloroform. It can also be poured into a vessel. Each bottle contains 25 doses.',
    },
    QUICK_FIRE: {
        name: 'Quick Fire',
        DC: 16,
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 2 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'A dose of quick fire poured onto a person, surface, or object, dries quickly. Anything ' +
            'so treated is extremely flamable. There\'s a 50% chance it will ignite each time it\'s exposed ' +
            'to flame or sparks of any kind.',
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