import IngredientCategory from './IngredientCategory';
import Vitriol from '../images/Vitriol.svg';
import Rebis from '../images/Rebis.svg';
import Aether from '../images/Aether.svg';
import Quebrith from '../images/Quebrith.svg';
import Hydragenum from '../images/Hydragenum.svg';
import Vermilion from '../images/Vermilion.svg';
import Sol from '../images/Sol.svg';
import Caelum from '../images/Caelum.svg';
import Fulgur from '../images/Fulgur.svg';
import RedMutagen from '../images/redMutagen.png';
import GreenMutagen from '../images/greenMutagen.png';
import BlueMutagen from '../images/blueMutagen.png';
import DogTallow from '../images/dogTallow.png';
import BottleOfSpirits from '../images/bottleOfSpirits.png';

export default function getIngredientImage(category) {
    if (category === IngredientCategory.VITRIOL) {
        return Vitriol;
    }
    if (category === IngredientCategory.REBIS) {
        return Rebis;
    }
    if (category === IngredientCategory.AETHER) {
        return Aether;
    }
    if (category === IngredientCategory.QUEBRITH) {
        return Quebrith;
    }
    if (category === IngredientCategory.HYDRAGENUM) {
        return Hydragenum;
    }
    if (category === IngredientCategory.VERMILION) {
        return Vermilion;
    }
    if (category === IngredientCategory.SOL) {
        return Sol;
    }
    if (category === IngredientCategory.CAELUM) {
        return Caelum;
    }
    if (category === IngredientCategory.FULGUR) {
        return Fulgur;
    }
    if (category === IngredientCategory.RED_MUTAGEN
        || category === 'KATAKAN'
        || category === 'NEKKER'
        || category === 'WEREWOLF'
        || category === 'WYVERN') {
        return RedMutagen;
    }
    if (category === IngredientCategory.GREEN_MUTAGEN 
        || category === 'ARACHAS'
        || category === 'FIEND'
        || category === 'GRAVE_HAG'
        || category === 'GRIFFIN'
        || category === 'NOONWRAITH'
        || category === 'TROLL') {
        return GreenMutagen;
    }
    if (category === IngredientCategory.BLUE_MUTAGEN) {
        return BlueMutagen;
    }
    if (category === 'DOG_TALLOW') {
        return DogTallow;
    }
    if (category === 'BOTTLE_OF_SPIRITS') {
        return BottleOfSpirits;
    }
    return undefined;
}