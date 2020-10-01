// Typescript code will go here.
// the type of greet is implicitly a function.
let greet = () => {
	console.log("Bonjour");
};

greet();

// explicitly (mon moyen prefere), we do it like this
// Remarquez que le type est ecrit avec une lettre majuscule.
let salut: Function;
salut = () => {
	console.log("Bonjour-sa-va?");
};

salut();

// if we don't return anything in a function, typescript returns void under the hood.
// This void when compiled to javascript, becomes undefined.

const add = (a: number, b: number, c?: number | string) => {
	// NEW: the ? is how we define an optional parametre in typescript
	// default parametres are like they are in javascript.
	// if the optional paremetre isn't set in the argument, the value is undefined.
	console.log(a + b);
	console.log(c);
};

add(5, 10);
add(5, 10, 10);

const minus = (a: number, b: number) => {
	return a - b;
};

// Typescript knows that our function returns a number. so the result variable is implicitly set ot be a number.
let result = minus(10, 7);
console.log(result);

// NOTEIMPORTANT: Finally if we want to explicitly define a return type of a function (I don't know when I would do this though, but I like it), we can do it at after defining our parametres. Like so:
// syntaxe - : (data-type)

const producc = (a: number, b: number): number => {
	return a * b;
};

let multi = producc(4, 9);
console.log(multi);
