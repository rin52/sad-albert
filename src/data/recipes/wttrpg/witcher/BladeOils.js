import IngredientCategory from '../../../../helper/IngredientCategory';
import Ingredients from '../../../wttrpg/Ingredients';

const creatures = '+5 damage against ';

export default {
    BEAST_OIL: {
        name: 'Beast Oil',
        DC: 14,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'beasts.',
        duration: '1/2 Hour',
    },
    CURSED_OIL: {
        name: 'Cursed Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.VERMILION, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.VITRIOL, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'cursed ones.',
        duration: '1/2 Hour',
    },
    DRACONID_OIL: {
        name: 'Draconid Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.QUEBRITH, amount: 2},
            {category: IngredientCategory.HYDRAGENUM, amount: 2},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'draconids.',
        duration: '1/2 Hour',
    },
    ELEMENTA_OIL: {
        name: 'Elementa Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1}, 
            {category: IngredientCategory.VERMILION, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'elementa.',
        duration: '1/2 Hour',
    },
    HANGED_MANS_VENOM: {
        name: 'Hanged Man\'s Venom',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.CAELUM, amount: 1},
            {category: IngredientCategory.SOL, amount: 1},
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'humanoids.',
        duration: '1/2 Hour',
    },
    HYBRID_OIL: {
        name: 'Hybrid Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.SOL, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'hybrids',
        duration: '1/2 Hour',
    },
    INSECTOID_OIL: {
        name: 'Insectoid Oil',
        DC: 14,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.REBIS, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'insectoids.',
        duration: '1/2 Hour',
    },
    NECROPHAGE_OIL: {
        name: 'Necrophage Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.SOL, amount: 1},
            {category: IngredientCategory.VITRIOL, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'necrophages.',
        duration: '1/2 Hour',
    },
    OGROID_OIL: {
        name: 'Ogroid Oil',
        DC: 15,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.QUEBRITH, amount: 1},
            {category: IngredientCategory.CAELUM, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'ogroids.',
        duration: '1/2 Hour',
    },
    RELICT_OIL: {
        name: 'Relict Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.QUEBRITH, amount: 1},
            {category: IngredientCategory.VERMILION, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'relicts.',
        duration: '1/2 Hour',
    },
    SPECTER_OIL: {
        name: 'Specter Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.REBIS, amount: 1},
            {category: IngredientCategory.HYDRAGENUM, amount: 1},
            {category: IngredientCategory.AETHER, amount: 1},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'specters.',
        duration: '1/2 Hour',
    },
    VAMPIRE_OIL: {
        name: 'Vampire Oil',
        DC: 16,
        craftTime: '15 Minutes',
        ingredients: [
            {category: IngredientCategory.AETHER, amount: 1},
            {category: IngredientCategory.SOL, amount: 2},
            {category: IngredientCategory.FULGUR, amount: 1},
        ],
        specificIngredients: [
            {name: Ingredients.DOG_TALLOW.item, key: 'DOG_TALLOW', amount: 1 },
        ],
        effects: creatures + 'vampires.',
        duration: '1/2 Hour',
    },
// {
    //     name: '',
    //     ingredients: [
    //         {category: IngredientCategory.VITRIOL, amount: 2},
    //         {category: IngredientCategory.HYDRAGENUM, amount: 1},
    //         {category: IngredientCategory.FULGUR, amount: 1},
    //     ],
    //     effects: '',
    //     duration: '',
    // },
};