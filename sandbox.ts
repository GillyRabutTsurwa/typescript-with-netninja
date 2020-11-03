let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "Luigi"; won't work;
age = 40; // works;

// arrays
// array of just one data type

//NOTE: below line just enforces that ninjas should be an array of strings. It actually doesn't give us an empty array. So if we try to push something to it, it won't work. So we need to make our empty array ON TOP of declaring that the value of this variable should be exclusively an array of strings. Like so... (I will comment out this line below for reference).
// let ninjas: string[];

let ninjas: string[] = [];
ninjas.push("Ninjas");

console.log(ninjas);

// union types. good for an array of mixed data types

let mixed: (string | number | boolean)[] = [];
mixed.push("Akinde");
mixed.push(35);
mixed.push(false);

console.log(mixed);

// We can use these (union types) on normal variables as well.
// uid can be a string or a number
// don't need parantheses if it's not an array.
let uid: string | number;

// objects
let firstNinja: object;
firstNinja = {
	name: "Yoshi",
	age: 30
};
// firstNinja = []. this will work because an array is an object

// more refined way of defining an object
let secondNinja: {
	name: string;
	age: number;
	beltColour: string;
};

secondNinja = {
	name: "Mario",
	age: 20,
	beltColour: "pink"
};
