import Potions from "../data/recipes/dndAndHomebrew/witcher/Potions";
import BladeOils from '../data/recipes/dndAndHomebrew/witcher/BladeOils';
import Decoctions from '../data/recipes/dndAndHomebrew/witcher/Decoctions';
import NoviceFormulae from '../data/recipes/dndAndHomebrew/alchemy/NoviceFormulae';
import JourneymanFormulae from '../data/recipes/dndAndHomebrew/alchemy/JourneymanFormulae';
import MasterFormulae from '../data/recipes/dndAndHomebrew/alchemy/MasterFormulae';
import Ingredients from '../data/dndAndHomebrew/Ingredients';
import Mutagens from '../data/dndAndHomebrew/Mutagens';

export default {
    type: 'object',
    additionalProperties: false,
    properties: {
        ingredients: {
            type: 'object',
            additionalProperties: false,
            properties: { ...getPropertiesSchemaForAmountObjects({ ...Ingredients, ...Mutagens }) },
        },
        witcherBrews: {
            type: 'object',
            additionalProperties: false,
            properties: {
                potions: {
                    type: 'object',
                    additionalProperties: false,
                    properties: { ...getPropertiesSchemaForRarityAmountObjects(Potions) },
                },
                bladeOils: {
                    type: 'object',
                    additionalProperties: false,
                    properties: { ...getPropertiesSchemaForAmountObjects(BladeOils) },
                },
                decoctions: {
                    type: 'object',
                    additionalProperties: false,
                    properties: { ...getPropertiesSchemaForAmountObjects(Decoctions) },
                }
            }
        },
        alchemy: {
            type: 'object',
            additionalProperties: false,
            properties: {
                novice: {
                    type: 'object',
                    additionalProperties: false,
                    properties: { ...getPropertiesSchemaForAmountObjects(NoviceFormulae) },
                },
                journeyman: {
                    type: 'object',
                    additionalProperties: false,
                    properties: { ...getPropertiesSchemaForAmountObjects(JourneymanFormulae) },
                },
                master: {
                    type: 'object',
                    additionalProperties: false,
                    properties: { ...getPropertiesSchemaForAmountObjects(MasterFormulae) },
                },
            },
        },
        knownRecipes: getSchemaForRecipes(),
        acquiredFormulae: getSchemaForRecipes(),
    },
};

function getSchemaForAmount(minimum) {
    return {
        type: 'object',
        additionalProperties: false,
        properties: {
            amount: {
                type: 'number',
                minimum,
            }
        }
    };
}

function getPropertiesSchemaForAmountObjects(dataSource) {
    const properties = {};
    const keys = Object.keys(dataSource);

    keys.forEach((key) => {
        properties[key] = getSchemaForAmount(1);
    });

    return properties;
}

function getPropertiesSchemaForRarityAmountObjects(dataSource) {
    const properties = {};
    const keys = Object.keys(dataSource);

    keys.forEach((key) => {
        properties[key] = {
            type: 'object',
            additionalProperties: false,
            properties: {
                Rare: getSchemaForAmount(0),
                Uncommon: getSchemaForAmount(0),
                Common: getSchemaForAmount(0),
                Everyday: getSchemaForAmount(0),
            }
        }
    });

    return properties;
}

function getSchemaForRecipes() {
    return {
        type: 'object',
        additionalProperties: false,
        properties: {
            witcherBrews: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    potions: {
                        type: 'array',
                        items: [
                            {
                                type: 'string',
                                enum: Object.keys(Potions),
                            },
                        ],
                    },
                    bladeOils: {
                        type: 'array',
                        items: [
                            {
                                type: 'string',
                                enum: Object.keys(BladeOils),
                            },
                        ],
                    },
                    decoctions: {
                        type: 'array',
                        items: [
                            {
                                type: 'string',
                                enum: Object.keys(Decoctions),
                            },
                        ],
                    },
                },
            },
            alchemy: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    novice: {
                        type: 'array',
                        items: [
                            {
                                type: 'string',
                                enum: Object.keys(NoviceFormulae),
                            },
                        ],
                    },
                    journeyman: {
                        type: 'array',
                        items: [
                            {
                                type: 'string',
                                enum: Object.keys(JourneymanFormulae),
                            },
                        ],
                    },
                    master: {
                        type: 'array',
                        items: [
                            {
                                type: 'string',
                                enum: Object.keys(MasterFormulae),
                            },
                        ],
                    },
                },
            },
        }
    };
}
