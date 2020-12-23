import Ingredients from './Ingredients';

export default {
    Breweries: [
        Ingredients.WINE_STONE,
    ],
    Caves: [
        Ingredients.GREEN_MOLD,
        Ingredients.SEWANT_MUSHROOMS,
        Ingredients.SCLERODERM,
    ],
    Cities: [
        Ingredients.BRYONIA,
    ],
    Fields: [
        Ingredients.ALLSPICE_ROOT,
        Ingredients.BALISSE_FRUIT,
        Ingredients.BALISSE_LEAVES,
        Ingredients.BARLEY,
        Ingredients.BURDOK_ROOT,
        Ingredients.CELANDINE,
        Ingredients.CROWS_EYE,
        Ingredients.FOOLS_PARSLEY,
        Ingredients.GINATIA_PETALS,
        Ingredients.HAN_FIBER,
        Ingredients.HONEYSUCKLE,
        Ingredients.MANDRAKE_ROOT,
        Ingredients.MISTLETOE,
        Ingredients.VERBENA,
        Ingredients.WHITE_MYRTLE_PETALS,
        Ingredients.WOLFSBANE,
    ],
    Forests: [
        Ingredients.BURDOK_ROOT,
        Ingredients.CELANDINE,
        Ingredients.CORTINARIUS,
        Ingredients.CROWS_EYE,
        Ingredients.HELLEBORE_PETALS,
        Ingredients.MANDRAKE_ROOT,
        Ingredients.MISTLETOE,
        Ingredients.SCLERODERM,
        Ingredients.WOLFSBANE,
    ],
    Mountains: [
        Ingredients.BERBERCANE_FRUIT,
        Ingredients.BRYONIA,
        Ingredients.CALCIUM_EQUUM,
        Ingredients.DUCAL_WATER,
        Ingredients.LUNAR_SHARDS,
        Ingredients.OPTIMA_MATER,
        {
            ...Ingredients.PHOSPHORUS,
            DC: 15,
        },
        Ingredients.QUICKSILVER_SOLUTION,
        Ingredients.SULFUR,
        Ingredients.WOLFSBANE,
    ],    
    'Ocean Floor & Shore': [
        Ingredients.PEARL,
    ],
    Swamps: [
        Ingredients.BERBERCANE_FRUIT,
    ],
    'The Blue Mountains': [
        Ingredients.WOLFS_ALOE_LEAVES,
    ],
    Underground: [
        Ingredients.CALCIUM_EQUUM,
        Ingredients.DUCAL_WATER,
        Ingredients.DWARVEN_IMMORTELLE,
        Ingredients.LUNAR_SHARDS,
        Ingredients.OPTIMA_MATER,
        {
            ...Ingredients.PHOSPHORUS,
            DC: 15,
        },
        Ingredients.QUICKSILVER_SOLUTION,
        Ingredients.SULFUR,
    ],
}