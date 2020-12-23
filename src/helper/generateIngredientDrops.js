import generateDropsWhenAllItemsHaveDC from './generator/generateDropsWhenAllItemsHaveDC';
import generateDropsWhenNoItemsHaveDC from './generator/generateDropsWhenNoItemsHaveDC';

export default function generateIngredientDrops(ingredientList, key, check) {
    const possibleDrops = [];
    let missingDC = false;
    let hasDC = false;
    ingredientList[key].forEach((item) => {
        if (item.DC <= check) {
            possibleDrops.push(item);
        } else if (!item.DC) {
            possibleDrops.push(item);
        }

        if (item.DC && !hasDC) {
            hasDC = true;
        } else if (!item.DC && !missingDC) {
            missingDC = true;
        }
    });

    if (possibleDrops.length === 0) {
        return [];
    }

    if (hasDC && !missingDC) {
        return generateDropsWhenAllItemsHaveDC(possibleDrops);
    } else if (!hasDC && missingDC) {
        return generateDropsWhenNoItemsHaveDC(possibleDrops);
    } else if (hasDC && missingDC) {
        //use same as when no items have DC as the possible drops list has been filtered for the DC already.
        return generateDropsWhenNoItemsHaveDC(possibleDrops);
    }

    return [];
}