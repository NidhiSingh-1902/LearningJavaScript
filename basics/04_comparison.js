// console.log(2>1);

/*
sometimes this type of comparison is not gave the correct answer, 

It is suggest that while compairing operand values make sure the operands are of same type.
*/
// console.log("2">1); 

//tricky conversion
/*
Reason:
equality check == and comparisons > < >= <= work differently.

Comparisons convert null to a number, treating it as 0
That's why (3) null >=0 is true and (1) null > 0 is false
*/
console.log(null > 0);
console.log(null ==0);
console.log(null >=0);  //here null is converted into 0 that's why the output is true

console.log(undefined > 0);  //false
console.log(undefined ==0); //false
console.log(undefined >=0);  //false


// strict comparison  
console.log("==============");
console.log("2" === 2);
console.log("2" == 2);
