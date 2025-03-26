const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below


const bacData_obj = {
    Low: bacData[0],
    High: bacData[1],
    Open: bacData[2],
    Close: bacData[3],
    Volume: bacData[4]
}

console.log(bacData_obj)

if (bacData_obj["Close"] > bacData_obj["Open"]) {
    if (bacData_obj["Volume"] > 100000) {
        console.log("Strong Bullish")
    }
    else {console.log("Bullish")}
}
if (bacData_obj["Close"] < bacData_obj["Open"]) {
    if (bacData_obj["Volume"] > 10000) {
        console.log("Strong Bearish")
    }
    else {console.log("Bearish")}
}

if (bacData_obj["Close"] === bacData_obj["Open"]) {
    console.log("Neutral")
}