import Potions from "../data/recipes/wttrpg/witcher/Potions";
import BladeOils from '../data/recipes/wttrpg/witcher/BladeOils';
import Decoctions from '../data/recipes/wttrpg/witcher/Decoctions';
import NoviceFormulae from '../data/recipes/wttrpg/alchemy/NoviceFormulae';
import JourneymanFormulae from '../data/recipes/wttrpg/alchemy/JourneymanFormulae';
import MasterFormulae from '../data/recipes/wttrpg/alchemy/MasterFormulae';
import Ingredients from '../data/wttrpg/Ingredients';
import Mutagens from '../data/wttrpg/Mutagens';

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
                    properties: { ...getPropertiesSchemaForAmountObjects(Potions) },
                },
                bladeOils: {
                    type: 'object',
                    additionalProperties: false,
                    properties:  { ...getPropertiesSchemaForAmountObjects(BladeOils) },
                },
                decoctions: {
                    type: 'object',
                    additionalProperties: false,
                    properties:  { ...getPropertiesSchemaForAmountObjects(Decoctions) },
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
                    properties:  { ...getPropertiesSchemaForAmountObjects(NoviceFormulae) },
                },
                journeyman: {
                    type: 'object',
                    additionalProperties: false,
                    properties:  { ...getPropertiesSchemaForAmountObjects(JourneymanFormulae) },
                },
                master: {
                    type: 'object',
                    additionalProperties: false,
                    properties:  { ...getPropertiesSchemaForAmountObjects(MasterFormulae) },
                }
            }
        }
    },
};

function getPropertiesSchemaForAmountObjects(dataSource) {
    const properties = {};
    const keys = Object.keys(dataSource);

    keys.forEach((key) => {
        properties[key] = {
            type: 'object',
            additionalProperties: false,
            properties: {
                amount: {
                    type: 'number',
                    minimum: 1,
                }
            }
        };
    });

    return properties;
}