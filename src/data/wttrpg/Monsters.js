import Ingredients from "./Ingredients";
import Mutagens from "./Mutagens";

export default {
    Arachas: [
        {
            ...Ingredients.ARACHAS_EYES,
            maxAmount: 3,
        },
        {
            ...Ingredients.ARACHAS_VENOM,
            maxAmount: 6,
        },
        {
            ...Ingredients.ARACHAS_CHITIN,
            maxAmount: 6,
        },
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 6,
        },
        Mutagens.ARACHAS,
    ],
    Archespore: [
        {
            ...Ingredients.ARCHESPORE_JUICE,
            maxAmount: 3,
        },
        {
            ...Ingredients.ARCHESPORE_TENDRILS,
            maxAmount: 6,
        },
    ],
    Barbegazi: [
        {
            ...Ingredients.BARBEGAZI_FUR,
            maxAmount: 6,
        },
    ],
    Barghest: [
        {
            ...Ingredients.BARGHEST_ESSENCE,
            maxAmount: 6,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 3,
        }
    ],
    Bear: [
        {
            ...Ingredients.BEAR_FAT,
            maxAmount: 6,
        },
        Mutagens.BEAR,
    ],
    Boar: [
        {
            ...Ingredients.BOAR_TUSKS,
            maxAmount: 2,
        },
    ],
    Botchling: [
        {
            ...Ingredients.BOTCHLING_BLOOD,
            maxAmount: 6,
        },
        {
            ...Ingredients.BOTCHLING_BONES,
            maxAmount: 6,
        },
        {
            ...Ingredients.BOTCHLING_BRAIN,
            maxAmount: 1,
        },
        {
            ...Ingredients.BOTCHLING_EAR,
            maxAmount: 2,
        },
        Mutagens.BOTCHLING,
    ],
    Bruxa: [
        {
            ...Ingredients.ABOMINATION_LYMPH,
            maxAmount: 2,
        },
        {
            ...Ingredients.BRUXA_BLOOD,
            maxAmount: 6,
        },
        {
            ...Ingredients.NAEZAN_SALTS,
            maxAmount: 3,
        },
        {
            ...Ingredients.VAMPIRE_FANGS,
            maxAmount: 3,
        },
        Mutagens.BRUXA,
    ],
    Bullvore: [
        {
            ...Ingredients.BULLVORE_BLOOD,
            maxAmount: 12,
        },
        {
            ...Ingredients.BULLVORE_BRAIN,
            maxAmount: 1,
        },
        {
            ...Ingredients.BULLVORE_EYES,
            maxAmount: 2,
        },
        Mutagens.BULLVORE,
    ],

    Cockatrice: [
        {
            ...Ingredients.COCKATRICE_CARAPACE,
            maxAmount: 12,
        },
        {
            ...Ingredients.COCKATRICE_STOMACH,
            maxAmount: 1,
        },
        {
            ...Ingredients.COCKATRICE_TAIL_FEATHERS,
            maxAmount: 6,
        },
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 6,
        },
        Mutagens.COCKATRICE,
    ],
    Cyclops: [
        {
            ...Ingredients.CRYSTALLIZED_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.CYCLOPS_BONES,
            maxAmount: 18,
        },
        {
            ...Ingredients.CYCLOPS_BRAIN,
            maxAmount: 1,
        },
        {
            ...Ingredients.CYCLOPS_EYE,
            maxAmount: 1,
        },
        {
            ...Ingredients.CYCLOPS_TONGUE,
            maxAmount: 1,
        },
    ],

    Dragon: [
        {
            ...Ingredients.DRAGON_BLOOD,
            maxAmount: 50,
        },
        {
            ...Ingredients.DRAGON_TAIL,
            maxAmount: 20,
        },
        {
            ...Ingredients.DRAGON_TEARS,
            maxAmount: 20,
        },
        {
            ...Ingredients.DRAGON_TEETH,
            maxAmount: 40,
        },
    ],
    Drowner: [
        {
            ...Ingredients.DROWNER_BRAIN,
            maxAmount: 1,
        },
        {
            ...Ingredients.DROWNER_TONGUE,
            maxAmount: 1,
        },
        {
            ...Ingredients.ESSENCE_OF_WATER,
            maxAmount: 3,
        },
    ],

    'Earth Elemental': [
        {
            ...Ingredients.ELEMENTAL_STONE,
            maxAmount: 1,
        },
        Mutagens.ELEMENTAL,
    ],
    Endrega: [
        {
            ...Ingredients.ENDREGA_SALIVA,
            maxAmount: 3,
        },
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 3,
        },
    ],

    Fiend: [
        {
            ...Ingredients.FIEND_DUNG,
            maxAmount: 6,
        },
        {
            ...Ingredients.FIENDS_EYE,
            maxAmount: 3,
        },
        Mutagens.FIEND,
    ],
    'Fire Elemental': [
        {
            ...Ingredients.ELEMENTAL_STONE,
            maxAmount: 1,
        },
        {
            ...Ingredients.ESSENCE_OF_FIRE,
            maxAmount: 12,
        },
        Mutagens.ELEMENTAL,
    ],
    Foglet: [
        {
            ...Ingredients.FOGLET_ESSENCE,
            maxAmount: 6,
        },
        {
            ...Ingredients.FOGLET_TEETH,
            maxAmount: 3,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.PHOSPHORUS,
            maxAmount: 12,
        },
        Mutagens.FOGLET,
    ],
    Frightener: [
        {
            ...Ingredients.FRIGHTENER_CLAWS,
            maxAmount: 2,
        },
        {
            ...Ingredients.FRIGHTENER_EYES,
            maxAmount: 3,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 6,
        },
        Mutagens.FRIGTHENER,
    ],

    Garkain: [
        {
            ...Ingredients.ABOMINATION_LYMPH,
            maxAmount: 2,
        },
        {
            ...Ingredients.GARKIN_SALIVA,
            maxAmount: 6,
        },
        {
            ...Ingredients.WING_MEMBRANE,
            maxAmount: 2,
        },
        Mutagens.GARKAIN,
    ],
    Ghoul: [
        {
            ...Ingredients.GHOUL_CLAWS,
            maxAmount: 2,
        },
        {
            ...Ingredients.GHOUL_MARROW,
            maxAmount: 3,
        },
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 3,
        },
    ],
    'Giant Centipede': [
        {
            ...Ingredients.GIANT_CENTIPEDE_DISCHARGE,
            maxAmount: 12,
        },
        {
            ...Ingredients.GIANT_CENTIPEDE_MANDIBLES,
            maxAmount: 2,
        },
    ],
    Godling: [
        {
            ...Ingredients.GODLING_EYES,
            maxAmount: 2,
        },
    ],
    Golem: [
        {
            ...Ingredients.GOLEM_HEART,
            maxAmount: 1,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 6,
        },
        Mutagens.GOLEM,
    ],
    'Grave Hag': [
        {
            ...Ingredients.GRAVE_HAG_EAR,
            maxAmount: 2,
        },
        {
            ...Ingredients.HAG_TEETH,
            maxAmount: 3,
        },
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 6,
        },
        Mutagens.GRAVE_HAG,
    ],
    Griffin: [
        {
            ...Ingredients.GRIFFIN_EGG,
            maxAmount: 3,
        },
        {
            ...Ingredients.GRIFFIN_FEATHER,
            maxAmount: 10,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 3,
        },
        Mutagens.GRIFFIN,
    ],

    Harpy: [
        {
            ...Ingredients.HARPY_EGGS,
            maxAmount: 3,
        },
        {
            ...Ingredients.HARPY_FEATHERS,
            maxAmount: 6,
        },
        {
            ...Ingredients.HARPY_TALONS,
            maxAmount: 2,
        },
    ],
    'Higher Vampire': [
        {
            ...Ingredients.ABOMINATION_LYMPH,
            maxAmount: 3,
        },
        {
            ...Ingredients.HIGHER_VAMPIRE_FANGS,
            maxAmount: 2,
        },
        {
            ...Ingredients.NAEZAN_SALTS,
            maxAmount: 10,
        },
    ],
    Hym: [
        {
            ...Ingredients.CRYSTALLIZED_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 12,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
    ],

    'Ice Elemental': [
        {
            ...Ingredients.ELEMENTAL_STONE,
            maxAmount: 1,
        },
        {
            ...Ingredients.ESSENCE_OF_WATER,
            maxAmount: 12,
        },
        Mutagens.ELEMENTAL,
    ],

    Katakan: [
        {
            ...Ingredients.VAMPIRE_FANGS,
            maxAmount: 3,
        },
        {
            ...Ingredients.VAMPIRE_SALIVA,
            maxAmount: 6,
        },
        Mutagens.KATAKAN,
    ],
    Knocker: [
        {
            ...Ingredients.KNOCKER_HAIR,
            maxAmount: 12,
        },
        {
            ...Ingredients.KNOCKER_TEETH,
            maxAmount: 3,
        },
        {
            ...Ingredients.KNOCKER_TOES,
            maxAmount: 6,
        },
    ],

    Leshen: [
        {
            ...Ingredients.CRYSTALLIZED_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.LESHEN_BONE,
            maxAmount: 12,
        },
        {
            ...Ingredients.LESHEN_FIBER,
            maxAmount: 12,
        },
        {
            ...Ingredients.LESHEN_RESIN,
            maxAmount: 6,
        },
        Mutagens.LESHEN,
    ],

    Manticore: [
        {
            ...Ingredients.BOHUN_UPAS_POISON,
            maxAmount: 6,
        },
        {
            ...Ingredients.MANTICORE_FANGS,
            maxAmount: 3,
        },
        {
            ...Ingredients.MANTICORE_HORN,
            maxAmount: 2,
        },
        {
            ...Ingredients.MANTICORE_STOMACH,
            maxAmount: 1,
        },
        {
            ...Ingredients.MANTICORE_WING_MEMBRANES,
            maxAmount: 12,
        },
        Mutagens.MANTICORE,
    ],

    Nekker: [
        {
            ...Ingredients.NEKKER_CLAW,
            maxAmount: 2,
        },
        {
            ...Ingredients.NEKKER_HEART,
            maxAmount: 1,
        },
        {
            ...Ingredients.NEKKER_TEETH,
            maxAmount: 3,
        },
        Mutagens.NEKKER,
    ],
    Noonwraith: [
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 63,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.LIGHT_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        Mutagens.NOONWRAITH,
    ],

    Pesta: [
        {
            ...Ingredients.CRYSTALLIZED_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 12,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        Mutagens.PESTA,
    ],
    Phoenix: [
        {
            ...Ingredients.ESSENCE_OF_FIRE,
            maxAmount: 12,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.PHOENIX_ASH,
            maxAmount: 12,
        },
        {
            ...Ingredients.PHOENIX_FEATHERS,
            maxAmount: 6,
        },
    ],
    Plumard: [
        {
            ...Ingredients.PLUMARD_STOMACH,
            maxAmount: 1,
        },
        {
            ...Ingredients.WING_MEMBRANE,
            maxAmount: 2,
        },
    ],

    'Rock Troll': [
        {
            ...Ingredients.TROLL_HIDE,
            maxAmount: 6,
        },
        {
            ...Ingredients.TROLL_LIVER,
            maxAmount: 1,
        },
        Mutagens.ROCK_TROLL,
    ],
    Rotfiend: [
        {
            ...Ingredients.ROTFIEND_BLOOD,
            maxAmount: 3,
        },
        {
            ...Ingredients.ROTFIEND_LIVER,
            maxAmount: 1,
        }
    ],
    Shaelmaar: [
        {
            ...Ingredients.SHAELMAAR_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.SHAELMAAR_HAIR,
            maxAmount: 6,
        },
        Mutagens.SHAELMAAR,
    ],
    Siren: [
        {
            ...Ingredients.ESSENCE_OF_WATER,
            maxAmount: 6,
        },
        {
            ...Ingredients.SIREN_VOCAL_CHORD,
            maxAmount: 1,
        },
        Mutagens.SIREN,
    ],
    Slyzard: [
        {
            ...Ingredients.SLYZARD_SCALES,
            maxAmount: 12,
        },
        {
            ...Ingredients.SLYZARD_TALONS,
            maxAmount: 6,
        },
        {
            ...Ingredients.SLYZARD_VOCAL_CORDS,
            maxAmount: 3,
        },
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 12,
        },
    ],
    Succubus: [
        {
            ...Ingredients.SUCCUBUS_HEART,
            maxAmount: 1,
        },
        {
            ...Ingredients.SUCCUBUS_HORN,
            maxAmount: 2,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 12,
        },
        Mutagens.SUCCUBUS,
    ],
    Troll: [
        {
            ...Ingredients.TROLL_LIVER,
            maxAmount: 1,
        },
        {
            ...Ingredients.TROLL_HIDE,
            maxAmount: 6,
        },
        {
            ...Ingredients.TROLL_TONGUE,
            maxAmount: 1,
        },
        Mutagens.TROLL,
    ],
    Vendigo: [
        {
            ...Ingredients.CRYSTALLIZED_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.VENDIGO_FUR,
            maxAmount: 6,
        },
        {
            ...Ingredients.VENDIGO_HEART,
            maxAmount: 1,
        },
        Mutagens.VENDIGO,
    ],
    Werewolf: [
        {
            ...Ingredients.WEREWOLF_SALIVA,
            maxAmount: 6,
        },
        Mutagens.WEREWOLF,
    ],
    Wolf: [
        {
            ...Ingredients.DOG_TALLOW,
            maxAmount: 6,
        },
    ],
    Wraith: [
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 3,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 3,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 3,
        },
    ],
    Wyvern: [
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 10,
        },
        {
            ...Ingredients.WYVERN_EGG,
            maxAmount: 3,
        },
        {
            ...Ingredients.WYVERN_EYE,
            maxAmount: 3,
        },
        Mutagens.WYVERN,
    ],
}