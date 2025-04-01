const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let sumclosing = 0;
for (let prices of msftData) {
	sumclosing += prices[3];
}

console.log('Average closing price of MSFT is ', (sumclosing / msftData.length).toFixed(2));