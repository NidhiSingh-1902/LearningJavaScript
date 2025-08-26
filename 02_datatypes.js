// every thing in js uses the newer version or we can use the below ling of code
"use strict";

// alert("hello");   alert is allowed in Browser, and here we are using Node not Browser.

console.log("datatypes");
let name = "nidhi";
let age = 22;

console.table([typeof(name), typeof(age)]);


// null - standlone value in js null is a type. here need to specify: let user = null; here the value is known which NULL and its type is OBJECT
// undefined - variable is declared but not defined., here the value is unknown

// symbol : used when to use the unique

// objects: key, value pair form 
/*
const student = {
first_name: "nidhi",
last_name: "singh"};
*/

const student = {
    first_name: "Nidhi",
    last_name: "Singh"
};
console.table([student.first_name, student.last_name]);