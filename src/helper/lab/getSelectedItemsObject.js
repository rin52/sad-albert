export default function getSelectedItemsObject(recipeIngredients) {
    const selectedItems = {};
    recipeIngredients.forEach((ingredient) => {
        let num = 1;

        do {
            const key = ingredient.category + '_' +num;
            num += 1;
            selectedItems[key] = '';
        } while (num <= ingredient.amount)
    });
    return selectedItems;
}