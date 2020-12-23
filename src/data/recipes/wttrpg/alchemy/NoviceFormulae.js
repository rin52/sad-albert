import IngredientCategory from '../../../../helper/IngredientCategory';

export default {
    ADDAS_TOMB: {
        name: 'Adda\'s Tomb',
        DC: 13,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'A dose of Adda\'s Tomb can be poured onto perishable foods or even corpses. Treated ' +
            'perishables will not begin to rot or spoil for 1d10 days. Preserving a human-sized body ' +
            'requires 2 doses.',
    },
    BASE_POWDER: {
        name: 'Base Powder',
        DC: 12,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: 'Base powder counteracts the effects of acid, negating one dose of acid solution per '
            + 'dose of base powder used. Base powder can also negate damage from a torn stomach critical wound.',
    },
    CLOTTING_POWDER: {
        name: 'Clotting Powder',
        DC: 12,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'Applying clotting powder to a wound stops the bleeding effect for 2d10 rounds. After ' +
            'the rounds elapse the wound begins bleeding again. You can then apply another dose.',
    },
    HALLUCINOGEN: {
        name: 'Hallucinogen',
        DC: 12,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
        ],
        effects: 'Hallucinogen can be thrown on a target within 3m or slipped into a drink. If ' +
            'the target fails a DC:15 Endurance check, they start hallucinating. These hallucinations last for ' +
            '1d10 rounds.',
    },
    INVISIBLE_INK: {
        name: 'Invisible Ink',
        DC: 11,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'Invisible ink allows you to write messages that can only be read when exposed to ' +
            'heat for 1 turn.',
    },
    NUMBING_HERBS: {
        name: 'Numbing Herbs',
        DC: 12,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
        ],
        effects: 'Numbing Herbs placed in a wound relieve pain, lowering negatives from critical ' +
            'wounds by 2. Numbing herbs also lessen penalties from being near death by 2. Numbing herbs ' +
            'work for 2d10 rounds, and then you can apply another dose.',
    },
    POISONERS_FRIEND: {
        name: 'Poisoner\'s Friend',
        DC: 14,
        craftTime: '10 Minutes',
        ingredients: [
            { category: IngredientCategory.VERMILION, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        effects: 'Poisoner\'s friend is a clear liquid that can be poured into food or drink to give ' +
            'it a potent savory or sweet taste. This raises the DC to detect poison to 20.',
    },
    SMELLING_SALTS: {
        name: 'Smelling Salts',
        DC: 14,
        craftTime: '10 Minutes',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 2 },
        ],
        effects: 'Smelling salts can be placed under an unconscious or stunned person, or creature\'s ' +
            'nose to immediately bring them out of their stunned state. Smelling salts can be used 25 times.',
    },
    STERLIZING_FLUID: {
        name: 'Sterlizing Fluid',
        DC: 12,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        effects: 'Sterlizing fluid poured on a wound raises the patient\'s natural healing rate by 2 ' +
            'points and lessens the number of days a critical wound takes to heal by 2. Multiple uses of ' +
            'sterlizing fluid don\'t stack',
    },
    SUCCUBUS_BREATH: {
        name: 'Succubus\' Breath',
        DC: 14,
        craftTime: '10 Minutes',
        ingredients: [
            { category: IngredientCategory.SOL, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        effects: 'A dose of succubus\' breath can be used to aid seduction. Used on the skin, it ' +
            'gives you a +2 to Seduction. If poured into someone\'s drink, it gives them a -5 to ' +
            'Seduction Resistance. Like black venom, tt takes a DC:16 Awareness check to realize there ' +
            'is succubus\' breath in a drink.',
    },
    SUMMER_OINTMENT: {
        name: 'Summer Ointment',
        DC: 12,
        craftTime: '5 Rounds',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'When rubbed on the neck and wrists, Summer Ointment doubles the number of hours you '
            + 'can survive in extreme cold and lowers the penalty to STA from extreme heat to 1/4 your total STA.'
    },
    WIVES_TEARS_POTION: {
        name: 'Wives\' Tears Potion',
        DC: 14,
        craftTime: '10 Minutes',
        ingredients: [
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 2 },
            { category: IngredientCategory.VITRIOL, amount: 1 },
        ],
        effects: 'Imbibing wives\' tears potion negates the effects of intoxication. Immediate after '
            + 'drinking a dose of wives\' tears potion the imbiber sobers up.',
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