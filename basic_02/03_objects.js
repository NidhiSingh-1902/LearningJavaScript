// singleton
/*
when we declare a object, using literals then singleton nhi bnta h 

constructor k through bnega toh humesha singleton bnega
Object.create()
*/

// Define an object with user details

console.log("Symbol declration");
const mySymbol = Symbol();

const jsUser = {
    userName: "Nidhi",
    age: 22,
    location: "Indore",
    email: "nidhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    // how to use a symbol key in object
    [mySymbol]: "This is my Key.",
    greetingThree:  function(){
        console.log("I am a greetign three")
    }

};




// If you want only specific properties, use an array of values
// console.table([
//     jsUser.userName,
//     jsUser.age,
//     jsUser.location,
//     jsUser.email,
//     jsUser.isLoggedIn,
//     jsUser.lastLoginDays
// ]);


console.log(jsUser["userName"]);
console.log(jsUser.age);



console.log(jsUser[mySymbol]);


/*
To freeze the user:

means you want thhat , none of the changes will impact on Object.
*/
console.log("To freeze the Object!");
Object.freeze(jsUser);
jsUser.email = "nismidhi@gmail.com";
console.log(jsUser);


// declare function with Object
jsUser.greeting = function(){
    console.log("I am a function!!");
}

function greetingTwo(){
    console.log("I am a greeting two.");
}

console.log(`calling greetingTwo () ${greetingTwo()}`);
console.log(`Calling greetingThree() ${jsUser.greetingThree}`);  //this gives me the funtion definition

console.log(`Calling greetingThree() ${jsUser.greetingThree()}`);  //this actually executes the function

