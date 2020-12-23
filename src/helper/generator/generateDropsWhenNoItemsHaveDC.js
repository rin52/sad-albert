import getRandomInt from '../getRandomInt';

export default function generateDropsWhenNoItemsHaveDC(possibleDrops) {
    let newDrops = [];

    newDrops = possibleDrops;
    newDrops.forEach((item) => {
        item.amount = getRandomInt(item.maxAmount) + 1;
    })

    return newDrops;
}