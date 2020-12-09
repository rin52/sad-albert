export function getCategory(listName) {
    console.log(listName);
    switch (listName) {
        case "Potions":
            return "potions";
        case "Blade Oils":
            return "bladeOils";
        case "Decoctions":
            return "decoctions";
        case "Novice":
            return "novice";
        case "Novice Formulae":
            return "novice";
        case "Journeyman":
            return "journeyman";
        case "Journeyman Formulae":
            return "journeyman";
        case "Master":
            return "master";
        case "Master Formulae":
            return "master";
        default:
            return "";
    }
}

export function getNewPotionItem(satchelPotions, itemName, rarity, newAmount) {
    const item = satchelPotions[itemName];
    item[rarity] = { amount: newAmount };
    return item;
}