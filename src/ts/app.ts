// typescript doesn't have direct access to the index page. that's why we get this error
// here are some ways to solve this:

// do in if statement to check if the element exists 
// put an ! after element declaration. preferred for fetching by using element names. 
// if you're fetching using class names or id names, type casting is preferred.

// TODO: Clean up these notes. It is messy in here

// example 1
const anchor = document.querySelector("a")!;

// if (anchor) {
// 	console.log(anchor.href);
// }

console.log(anchor.href);

// const form = document.querySelector("form");

// NEW: Type Casting
const forme = document.querySelector(".new-item-form") as HTMLFormElement;

// grabbing the inputs field
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// add event listener to the form.
forme.addEventListener("submit", (e) => {
	e.preventDefault();

	// NEW: amount.value (below) will give as a string.
	// Try change it to amount.valueAsNumber to change value to number
	// Ça me sera très utile
	console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
});