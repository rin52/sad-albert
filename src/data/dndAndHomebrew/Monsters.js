import Ingredients from "./Ingredients";
import Mutagens from "./Mutagens";

export default {
    Alp: [
        {
            ...Ingredients.ABOMINATION_LYMPH,
            maxAmount: 2,
        },
        {
            ...Ingredients.ALP_SALIVA,
            maxAmount: 6,
        },
        {
            ...Ingredients.ESSENCE_OF_DEATH,
            maxAmount: 12,
        },
        {
            ...Ingredients.VAMPIRE_FANGS,
            maxAmount: 3,
        },
    ],
    Arachas: [
        {
            ...Ingredients.ARACHAS_EYES,
            maxAmount: 3,
        },
        {
            ...Ingredients.ARACHAS_VENOM,
            maxAmount: 3,
        },
        {
            ...Ingredients.CHITIN,
            maxAmount: 3,
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
        {
            ...Ingredients.CHITIN,
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
    ],
    
    Bes: [
        {
            ...Ingredients.BES_HORN,
        }, 
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 20,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 12,
        }
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
    ],

    Casglydd: [
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 10,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 6,
        },
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
    ],
    'Corpse Amalgam': [
        {
            ...Ingredients.LUNAR_SHARDS,
            maxAmount: 1,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 6,
        },
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
    ],
    Endrega: [
        {
            ...Ingredients.CHITIN,
            maxAmount: 3,
        },
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
    ],
    Forktail: [
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 10,
        },
        Mutagens.FORKTAIL,
    ],
    Frightener: [
        {
            ...Ingredients.CHITIN,
            maxAmount: 18,
        },
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
        Mutagens.GHOUL,
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
    'Giant Frog': [
        {
            ...Ingredients.ESSENCE_OF_WATER,
            maxAmount: 12,
        }
    ],
    Gigascorpion: [
        {
            ...Ingredients.VENOM_EXTRACT,
            maxAmount: 6,
        },
    ],
    Glustyworp: [
        {
            ...Ingredients.CHITIN,
            maxAmount: 6,
        },
        {
            ...Ingredients.GLUSTYWORP_STOMACH,
            maxAmount: 1,
        },
        {
            ...Ingredients.GREEN_MOLD,
            maxAmount: 6,
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
            maxAmount: 3,
        },
        Mutagens.GRAVE_HAG,
    ],
    'Great Bear': [
        {
            ...Ingredients.BEAR_FAT,
            maxAmount: 6,
        },
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
    ],
    'Living Armor': [
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 2,
        },
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
    ],
    'Mari Lywd': [
        {
            ...Ingredients.MARI_LWYD_SKULL,
            maxAmount: 1,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 10,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 12,
        },
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
    Nightwraith: [
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
        Mutagens.NIGHTWRAITH,
    ],
    Noonwraith: [
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 3,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 3,
        },
        {
            ...Ingredients.LIGHT_ESSENCE,
            maxAmount: 3,
        },
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 3,
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
    ],
    Penitent: [
        {
            ...Ingredients.SPECTER_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.ESSENCE_OF_WRAITH,
            maxAmount: 6,
        },
        {
            ...Ingredients.INFUSED_DUST,
            maxAmount: 6,
        },
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
            ...Ingredients.CHITIN,
            maxAmount: 12,
        },
        {
            ...Ingredients.SHAELMAAR_DUST,
            maxAmount: 6,
        },
        {
            ...Ingredients.SHAELMAAR_HAIR,
            maxAmount: 6,
        },
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
    ],
    Ekhidna: [
        {
            ...Ingredients.ESSENCE_OF_WATER,
            maxAmount: 6,
        },
        {
            ...Ingredients.SIREN_VOCAL_CHORD,
            maxAmount: 1,
        },
        Mutagens.EKHIDNA,
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
    ],    Sylvan: [
        {
            ...Ingredients.SYLVAN_HOOF,
            maxAmount: 2,
        },
        {
            ...Ingredients.SYLVAN_HORN,
            maxAmount: 2,
        },
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
    ],
    
    Werecat: [
        // {
        //     ...Ingredients.FIFTH_ESSENCE,
        //     maxAmount: 3,
        // },
        {
            ...Ingredients.WERECAT_TEETH,
            maxAmount: 3
        },
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
        Mutagens.WRAITH,
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
            maxAmount: 2,
        },
        Mutagens.WYVERN,
    ],
}