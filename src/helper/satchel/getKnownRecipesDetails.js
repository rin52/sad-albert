import Constants from '../Constants';
import getPotions from '../getData/getRecipes/witcher/getPotions';
import getBladeOils from '../getData/getRecipes/witcher/getBladeOils';
import getDecoctions from '../getData/getRecipes/witcher/getDecoctions';
import getNoviceFormulae from '../getData/getRecipes/alchemy/getNoviceFormulae';
import getJourneymanFormulae from '../getData/getRecipes/alchemy/getJourneymanFormulae';
import getMasterFormulae from '../getData/getRecipes/alchemy/getMasterFormulae';

export default function getKnownRecipesDetails(knownRecipes, chosenSetting) {
    let potions = {};
    let bladeOils = {};
    let decoctions = {};
    let novice = {};
    let journeyman = {};
    let master = {};

    if (knownRecipes) {
        if (knownRecipes.witcherBrews) {
            potions = getDetails(knownRecipes.witcherBrews.potions, Constants.POTIONS, chosenSetting);
            bladeOils = getDetails(knownRecipes.witcherBrews.bladeOils, Constants.BLADE_OILS, chosenSetting);
            decoctions = getDetails(knownRecipes.witcherBrews.decoctions, Constants.DECOCTIONS, chosenSetting);
        }
        if (knownRecipes.alchemy) {
            novice = getDetails(knownRecipes.alchemy.novice, Constants.NOVICE_FORMULAE, chosenSetting);
            journeyman = getDetails(knownRecipes.alchemy.journeyman, Constants.JOURNEYMAN_FORMULAE, chosenSetting);
            master = getDetails(knownRecipes.alchemy.master, Constants.JOURNEYMAN_FORMULAE, chosenSetting);
        }
    }

    return {
        witcherBrews: {
            potions,
            bladeOils,
            decoctions,
        },
        alchemy: {
            novice,
            journeyman,
            master,
        }
    };

}

function getDetails(object, category, chosenSetting) {
    let list = {};
    if (category === Constants.POTIONS) {
        list = getPotions(chosenSetting);
    } else if (category === Constants.BLADE_OILS) {
        list = getBladeOils(chosenSetting);
    } else if (category === Constants.DECOCTIONS) {
        list = getDecoctions(chosenSetting);
    } else if (category === Constants.NOVICE_FORMULAE) {
        list = getNoviceFormulae(chosenSetting);
    } else if (category === Constants.JOURNEYMAN_FORMULAE) {
        list = getJourneymanFormulae(chosenSetting);
    } else if (category === Constants.MASTER_FORMULAE) {
        list = getMasterFormulae(chosenSetting);
    }

    let recipeDetails = {};
    if (object) {
        object.forEach((recipe) => {
            recipeDetails = {
                ...recipeDetails,
                [recipe]: {
                    ...list[recipe],
                }
            };
        });
    }

    return recipeDetails;
}
