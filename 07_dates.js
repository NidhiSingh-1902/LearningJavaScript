const myDate = new Date();
// console.log(myDate);  //Output is : 2025-09-02T10:57:57.599Z
// console.log(myDate.toString());  //Output is : Tue Sep 02 2025 16:28:50 GMT+0530 (India Standard Time)

console.log(`toISOString --> ${myDate.toISOString()}`);
console.log(`toDateString -->  ${myDate.toDateString()}`);
console.log(`toLocaleDateString --> ${myDate.toLocaleDateString()}`);

console.log(`Type of Date is -->  ${typeof myDate}`);

/*
In JS, month start from 0 - 11 means 0 for Jan and 11 for December
*/
let createdDate = new Date("01-14-2023");
console.log(`createdDate : ${createdDate}`);

/*
TimeStamp:
it is used while developing the projects in which we need a Polls. 
*/
console.log(`TimeStamp`);

let myTimeStamp = Date.now();
console.log(myTimeStamp);

// by using the getTime() method we can get the Time

console.log(`TimeStamp : ${createdDate.getTime()}`);

console.log(`Today's Date is : ${Date.now()}`);

console.log(`Conversion Date to Seconds : ${Math.floor(Date.now() / 1000)}`);


const myCreatedDate = new Date();
console.log(`Date : ${myCreatedDate.getDate()}`);
console.log(`Day : ${myCreatedDate.getDay()}`);

// same for month, etc., 

