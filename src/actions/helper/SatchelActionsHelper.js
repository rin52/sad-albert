export function getCategory(listName) {
    switch (listName) {
        case "Potions":
            return "potions";
        case "Blade Oils":
            return "bladeOils";
        case "Decoctions":
            return "decoctions";
        default:
            return "";
    }
}

export function getNewPotionItem(satchelPotions, itemName, rarity, newAmount) {
    const item = satchelPotions[itemName];
    item[rarity] = { amount: newAmount };
    return item;
}