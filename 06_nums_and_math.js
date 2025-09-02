// console.log("nums & math");
// const score = 500;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// // toFixed() is used during calculations.

// console.log(balance.toFixed(3));

// const otherNumber = 123.98674;

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
// as the value of variable is mostly zeroes, which is difficult to read or understand.   For these we can the toLocaleString()
// console.table([balance, hundreds]);
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

console.log("===========Math========");
console.log(`Math ${Math}`);
console.log(`Floor ${Math.floor(3.8)}`);
console.log(`Ceil ${Math.ceil(3.8)}`);
console.log(`Round ${Math.round(8.7)}`);
console.log(`Abs ${Math.abs(-10)}`);
console.log(`Min ${Math.min(12,34,6,78,89)}`);
console.log(`Max ${Math.max(-79,6,2,4,5,6,7,6,5,4)}`);
console.log(`Math.random`);
console.log(Math.random()); //value between 0 to 1.

console.log("==================");
console.log("to avoid the 0 case in Randowm number generator , so we were using, the below LOC");
console.log(Math.random()*10 + 1);

/*
Special Case: to handle the random number in a specific range like more than 10 and less than 20.

Math.floor(Math.random() * (max-min + 1) + min)
*/

const min = 1;
const max = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);