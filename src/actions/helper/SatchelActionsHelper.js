import Constants from '../../helper/Constants';

export function getCategory(listName) {
    switch (listName) {
        case Constants.POTIONS:
            return "potions";
        case Constants.BLADE_OILS:
            return "bladeOils";
        case Constants.DECOCTIONS:
            return "decoctions";
        case "Novice":
            return "novice";
        case Constants.NOVICE_FORMULAE:
            return "novice";
        case "Journeyman":
            return "journeyman";
        case Constants.JOURNEYMAN_FORMULAE:
            return "journeyman";
        case "Master":
            return "master";
        case Constants.MASTER_FORMULAE:
            return "master";
        case Constants.WITCHER_BREWS:
            return "witcherBrews"
        case Constants.ALCHEMY_FORMULAE:
            return "alchemy";
        default:
            return "";
    }
}

export function getNewPotionItem(satchelPotions, itemName, rarity, newAmount) {
    const item = satchelPotions[itemName];
    item[rarity] = { amount: newAmount };
    return item;
}