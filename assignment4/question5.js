const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sumclosing = 0;
for (let prices of disneyData) {
	sumclosing += parseFloat(prices["close"])
	//console.log(sumclosing)
}

console.log('Average closing price of Disney is ', (sumclosing / disneyData.length).toFixed(2));
