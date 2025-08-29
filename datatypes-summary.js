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

/*
1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.

*/



// ===========Memory========== //

/*
Stack (primitive) --> copy 
Heap(non-primitive) --> reference
*/

console.log("Call by Value:");
let stackName = "nidhi";
let stackName2 = "nidhi2";

stackName2 = "nnn";

console.log(`StackName : ${stackName}`);
console.log(`StackName2 : ${stackName2}`);


console.log("Call by Reference : ");
let heapObject = {
    objName : "Object 1 name"
}

let heapObject2 = heapObject;
heapObject2.objName = "new";

console.log(`HeapObject1 : ${heapObject.objName}`);
console.log(`HeapObject2 : ${heapObject2.objName}`);