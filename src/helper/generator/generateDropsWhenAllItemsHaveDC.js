import getRandomInt from '../getRandomInt';

export default function generateDropsWhenAllItemsHaveDC(possibleDrops) {
    const numDropped = getRandomInt(possibleDrops.length) + 1;
    let newDrops = [];

    if (numDropped === possibleDrops.length) {
        newDrops = possibleDrops;
        newDrops.forEach((item) => {
            item.amount = getRandomInt(item.maxAmount) + 1;
        })
    } else {
        let counter = 0;
        let selectedArray = [];

        while (counter < numDropped) {
            let index = getRandomInt(possibleDrops.length);

            if (selectedArray.indexOf(index) === -1) {
                const droppedItem = possibleDrops[index];
                droppedItem.amount = getRandomInt(droppedItem.maxAmount) + 1;
                newDrops.push(droppedItem);
                selectedArray.push(index);
                counter++;
            }
        }
    }

    return newDrops;
}