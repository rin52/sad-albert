export default function determineHasDC(itemsList, key) {
    let hasDC = false;

    if (itemsList[key]) {
        for (let i = 0; i < itemsList[key].length && !hasDC; i++) {
            if (itemsList[key][i].DC) {
                hasDC = true;
            }
        }
    }

    return hasDC;
}