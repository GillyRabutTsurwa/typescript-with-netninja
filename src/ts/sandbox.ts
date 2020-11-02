// let greet: Function;

// exemple 1
// THis is a function signature
let gree: (param1: string, param2: string) => void;

// La fonction qui suit la signature dessûs. (Elle doit la suivre)
gree = (name: string, greeting: string) => {
	console.log(`${name} says ${greeting}`);
};

gree("Gilbert", "Bonjour");
// exemple 2

let calc: (param1: number, param2: number, param3: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
	if (action === "add") {
		return numOne + numTwo;
	}
	else if (action === "subtract") {
		return numOne - numTwo;
	}
	else {
		return numOne * numTwo;
	}
};

let example1 = calc(8, 3, "add");
console.log(example1);

// exemple 3

// 1. Defining the function signature
let logDetails: (param1: { name: string; age: number }) => void;

// Reminder. this is a type alias. look at previous branch to refresh
type person = { name: string; age: number };

// 2. Defining the function itself
// we are using a type alias but that's not important in the section
logDetails = (ninja: person) => {
	console.log(`I am ${ninja.name} et j'ai ${ninja.age}`);
};

// 3. Calling the function
logDetails({ name: "Shaun Pelling", age: 29 });
