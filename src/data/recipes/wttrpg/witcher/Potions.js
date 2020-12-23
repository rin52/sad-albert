import IngredientCategory from '../../../../helper/IngredientCategory';

export default {
    BLACK_BLOOD: {
        name: 'Black Blood',
        DC: 20,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 3 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'The witcher\'s blood poisons any creature that drinks it, doing '
            + '3 points of damage per round until an Endurance check, DC:20 is made. '
            + 'The creature is also forced to recoil 2m.',
        duration: '20 Rounds',
        toxicity: '25%',
    },
    BLIZZARD: {
        name: 'Blizzard',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.REBIS, amount: 2 },
        ],
        effects: '+4 Reflex after killing an enemy. Further kills do not add to '
            + 'the bonus, which lasts until the potion duration ends.',
        duration: '10 Rounds',
        toxicity: '75%',
    },
    CAT: {
        name: 'Cat',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 1 },
        ],
        effects: 'No penalties for darkness or dim light. You also cannot be '
            + 'hypnotised, and gain a +2 to see through illusions.',
        duration: '2 Hours',
        toxicity: '25%',
    },
    FULL_MOON: {
        name: 'Full Moon',
        DC: 20,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
            { category: IngredientCategory.VERMILION, amount: 2 },
        ],
        effects: 'Grants you +30 temporary Health Points until the end of the '
            + 'duration. Full Moon potions do not stack with one another.',
        duration: '1/2 Hour',
        toxicity: '75%',
    },
    GOLDEN_ORIOLE: {
        name: 'Golden Oriole',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        effects: 'Grants immunity to poisons and neutralizes any poisons in your system.',
        duration: '1/2 Hour',
        toxicity: '50%',
    },
    KILLER_WHALE: {
        name: 'Killer Whale',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 2 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
            { category: IngredientCategory.FULGUR, amount: 1 },
        ],
        effects: 'Increases your ability to hold your breath by half and negates '
            + 'sight penalties underwater.',
        duration: '1/2 Hour',
        toxicity: '25%',
    },
    MARIBOR_FOREST: {
        name: 'Maribor Forest',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
            { category: IngredientCategory.SOL, amount: 1 },
        ],
        effects: 'Each time you gain an adrenaline die, add a second one.',
        duration: '15 Rounds',
        toxicity: '50%',
    },
    PETRIS_PHILTER: {
        name: 'Petri\'s Philter',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: '+2 points in Spellcasting, Hex Weaving, and Ritual Casting.',
        duration: '15 Rounds',
        toxicity: '75%',
    },
    SWALLOW: {
        name: 'Swallow',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
            { category: IngredientCategory.CAELUM, amount: 1 },
        ],
        effects: 'Regenerate 3 points per round. In any round you are struck, '
            + 'you do not regenerate. This healing doesn\'t stack with multiple uses',
        duration: '20 Rounds',
        toxicity: '50%',
    },
    TAWNY_OWL: {
        name: 'Tawny Owl',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.VERMILION, amount: 1 },
            { category: IngredientCategory.QUEBRITH, amount: 1 },
        ],
        effects: 'Each time you use a Recovery action to gain back STA, add an '
            + 'extra 2 points.',
        duration: '20 Rounds',
        toxicity: '50%',
    },
    THUNDERBOLT: {
        name: 'Thunderbolt',
        DC: 18,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.QUEBRITH, amount: 2 },
            { category: IngredientCategory.HYDRAGENUM, amount: 2 },
        ],
        effects: '+3 damage on physical attacks.',
        duration: '15 Rounds',
        toxicity: '75%',
    },
    WHITE_HONEY: {
        name: 'White Honey',
        DC: 16,
        craftTime: '1/2 Hour',
        ingredients: [
            { category: IngredientCategory.VITRIOL, amount: 1 },
            { category: IngredientCategory.REBIS, amount: 1 },
            { category: IngredientCategory.AETHER, amount: 1 },
        ],
        effects: 'Clears toxicity and removes all potion effects.',
        duration: 'N/A',
        toxicity: 'N/A',
    },
 
   
    


    // {
    //     name: '',
    //     ingredients: [
    //         {category: IngredientCategory.AETHER, amount: 1},
    //         {category: IngredientCategory.QUEBRITH, amount: 1},
    //         {category: IngredientCategory.VERMILION, amount: 1},
    //     ],
    //     effects: '',
    //     duration: {
    //         everyday: '',
    //         common: '',
    //         uncommon: '',
    //         rare: '',
    //     },
    //     toxicity: {
    //         everyday: 0,
    //         common: 1,
    //         uncommon: 0,
    //         rare: 5,
    //     },
    // },
};