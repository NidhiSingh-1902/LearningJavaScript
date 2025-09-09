// // arrays
// const myArray = [0,1,2,3,4,5];
// console.log(`array is : ${myArray}`);

// // const myArray2 = new Array(1,2,3,4,5);
// // console.log(myArray2);
// // console.log(`Access specific element : ${myArray2[2]}`);

// myArray.push(101);
// console.log(myArray);


// // pop : remove last element and return 
// const res = myArray.pop();
// console.log(res);
// console.log(myArray);


// // unshift : is to add a element at begin
// /*
// these unshift is suggest to not to use, because when we are working with the array , in which we have 10000 element and adding to element at begin take more time.

// But, it totally depends upon our functionality, means wen to use or not.
// */
// myArray.unshift(9);
// console.log(myArray);



console.log(`Slice & Splice`);
const array = [1,2,3,4,5,6,7,8,9,0];
console.log(`Original Array : ${array}`);

console.log(`Example of Slice : ${array.slice(1,3)}`);
console.log(`Array after Slicing : ${array}`);
console.log(`Example of Splice : ${array.splice(1,3)}`);
console.log(`Array after Splicing ${array}`);

/*
Slice and Splice:


Slice: takes the part from the array, and do not updates the orignial array 

Splice: remove the element and updates the original array.
*/

