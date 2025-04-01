const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// find average price over 7 days
// find array of prices above the 7 day SMA

function aboveSMA (stockPrices) {
    let sum = 0;
    for (let price of stockPrices) {
    sum += price
    };
    let avestockPrices = (sum / stockPrices.length);
    //console.log(avestockPrices)

    let noDays = 0
    for (let price of stockPrices) {
        if (price > avestockPrices) {
            noDays += 1;
        }
    }
console.log('Number of days AMD was above the 7-day SMA is: ', noDays)
}

aboveSMA(amdPrices)
