// typescript doesn't have direct access to the index.html page. Therefore, it doesn't know if the element we are fetching for the HTML actually exists. that's why we get this an when we put:
// const anchor = document.querySelector("a")


// here are some ways to solve this:

// 1st way is via an if statement to check if the element exists 
/**
 * const anchor = document.querySelector("a");
 * if (anchor) {
 * 	 console.log(anchor);
 * }
 */
// 2nd way that is much simpler and cleaner is putting an ! after element declaration. preferred for fetching by using element names. 

const anchor = document.querySelector("a")!;
console.log(anchor.href);

// if you're fetching using class names or id names, where it is more ideal to target a specific element, type casting is preferred. So instead of:
// const form = document.querySelector("form");

// with NEW Type Casting, we now do:
const forme = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(forme.children);

//NOTE: Typecasting serves to specify which type of element we are selecting with a querySelector. This is why when we hover over the variable, we get the type of the HTML Element. If we don't use Typecasting and select something using a class or id, we get the type of Element instead. Uncomment and hover over line 20 to see this in action.

// grabbing the inputs field using Type Casting
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// add event listener to the form.
forme.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	// NEW: amount.value (below) will give as a string.
	// Try change it to amount.valueAsNumber to change value to number
	// Ça me sera très utile
	console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
});