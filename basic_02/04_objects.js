//object creation using Singleton
// const tinderUser = new Object(); //it is a singleton object


const tinderUser1 = {}; //it is a non-singleton object

tinderUser1.id = "123abc";
tinderUser1.name = "Sammy";
tinderUser1.isLoggedIn = false
// console.log(tinderUser1);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            first_name: "nidhi",
            last_name: "singh"
        }
    }
}

// console.log(regularUser.fullName.userFullName.first_name);


// console.log(regularUser["fullName"]["userFullName"]["first_name"]);


// objets merging'

const obj1 = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five"
}


const obj2 = {
    6: "six",
    7: "seven",
    8: "right",
    9: "nine",
    10: "ten"
}

console.log("merging objects!!");


// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2);  //here passing empty {} is totally optional, but passing this is a good practise.
//here {} this braces indicates the target and rest are the source.

// using spread operator
const obj3 = {...obj1, ...obj2};

console.log(obj3);


// array of objects

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser1);

// datatype of tinderUser : is a array

// console.log(Object.keys(tinderUser1));

// console.log(Object.values(tinderUser1));

// each and every entry of key-pair value is stored in a form of Arrays.

console.log(Object.entries(tinderUser1));

// If we have a tenderUser, [have some special methods]

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));


// eneumarable: means able to repeat or looping.
// console.log(tinderUser1.hasOwnProperty('Odoo'));



// de-structuring of an object
console.log(`De-structuring of an Object.`);
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Dummy"
}

// example: how to desructor 
console.log(course.courseInstructor);
