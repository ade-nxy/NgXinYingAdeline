const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
let sum = 0;
let i = 0;

/*if (i < msftData.length) {
    sum += msftData[i];
    i = i+1;
}*/

//Why does the if loop not work? 

for (let i =0; i < msftData.length; i++) {
    sum += msftData[i];
}

console.log(i)
console.log(sum);
console.log(sum / msftData.length);