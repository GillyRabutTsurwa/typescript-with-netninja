// Explicit types are very useful for initialising variables of whose the value we don't know initially. Comme ci.
var character;
var age;
var isLoggedIn;
// age = "Luigi"; won't work;
age = 40; // works;
// arrays
// array of just one data type
//NOTE: below line just enforces that ninjas should be an array of strings. It actually doesn't give us an empty array. So if we try to push something to it, it won't work. So we need to make our empty array. Like so... (I will comment out this line below for reference)
// let ninjas: string[];
var ninjas = [];
ninjas.push("Ninjas");
console.log(ninjas);
// union types. good for an array of mixed data types
var mixed = [];
mixed.push("Akinde");
mixed.push(35);
mixed.push(false);
console.log(mixed);
// We can use these (union types) on normal variables as well.
// uid can be a string or a number
// don't need parantheses if it's not an array.
var uid;
// objects
var firstNinja;
firstNinja = {
    name: "Yoshi",
    age: 30
};
// firstNinja = []. this will work because an array is an object
// more refined way of defining an object
var secondNinja;
secondNinja = {
    name: "Mario",
    age: 20,
    beltColour: "pink"
};
