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
            ...Ingredients.FIEND_EYE,
            maxAmount: 3,
        },
        Mutagens.FIEND,
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
    Troll: [
        {
            ...Ingredients.TROLL_LIVER,
            maxAmount: 1,
        },
        {
            ...Ingredients.TROLL_HIDE,
            maxAmount: 6,
        },
        Mutagens.TROLL,
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