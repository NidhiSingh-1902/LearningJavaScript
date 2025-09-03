const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);


// const concatinated = marvel_heros.concat(dc_heros);
// console.log(marvel_heros);
// console.log(concatinated);


// spread operator (...) --> widely used to concat arrays 

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);


/*
To flatten the arrays

inside the flat(), we need to pass the depth count , instead of exact depth count we can pass "Infinity".
*/

const to_be_flatten_array = [1, [2,3, [4,5,6], 7,8,[9,10]]];
console.log(`Flaten Array : ${to_be_flatten_array.flat(Infinity)}`);


// To verify whether the given variable is array or not
console.log(Array.isArray("nidhi"));
console.log(Array.isArray(to_be_flatten_array));

//in the same way, if we want to convert into array we can use the below syntac
console.log(Array.from("nidhisingh"));


// interesting fact , when we convert the oject to array
console.log(Array.from({name: "nidhi"}));  //output is empty []

// create an array with set of elements

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
const score5 = 500;

console.log(Array.of(score1, score2, score3, score4, score5));
console.log(typeof score1);
