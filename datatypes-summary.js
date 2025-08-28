// Primitive Datatype
/*
7 types: (Call by Value) --> String, Number, Boolean, Null, Undefined, Symbol, (for uniqueness of any value), BigInt 
*/

// Non-Primitive Datatype or Reference Datatype
/*
Array, Objects, Functions
*/

// Javascript is a dynmacially-typed language.


/*
Symbol:

const id = Symbol('123');  //its's return type is Symbol 

//even if the 2 symbols have same value , but the memeory address for both is different
*/
const id = Symbol('123');
const aId = Symbol('123');

console.log(id === aId);


console.log("==========");
const bigata = 123456898765431234567898765n;

console.log(typeof(bigata));


console.log("========Arrays=========");
const info = ["nidhi", "singh"];
console.log(info);

console.log("=====objects======");
let student = {
    first_name: "nidhi",
    last_name: "singh"
}
console.log(student);

console.log("======functions =======");
const myFun = function() {
    console.log("nid");
}
myFun();
const fun2  = () => {
    console.log("fu2");
}
fun2();

console.log(typeof(fun2));