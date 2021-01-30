export default function getIngredientKey(ingredient) {
    let result = ingredient;
    if (result.includes('Mutagen')) {
        result = result.replace(' Mutagen', '');
    }
    while (result.includes('\'')) {
        result = result.replace('\'', '');
    }
    while (result.includes(',')) {
        result = result.replace(',', '');
    }
    result = result.toUpperCase();
    while (result.includes(' ')) {
        result = result.replace(' ', '_');
    }
    return result;
}