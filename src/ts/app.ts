// NEW: interfaces. a structure or blueprint for defining our classes
//NOTE: we do not use interfaces to create classes
// all we are saying is: if we make an isPerson class, it has to have:
// a name property which is a string, an age property which is a number, a speak method with a parametre of value string which returns void, and a spend method with a parametre of value number which returns a number.
// NOTE: stopped @2.53
interface Person {
	name: string,
	age: number,
	// name of the parametre doesn't matter
	speak(a: string): void,
	spend(a: number): number
}

// This class has to match the structure of the interface
const moi: Person = {
	name: "Gilbert",
	age: 24,
	speak(text: string): void {
		console.log(text);
	},
	spend(amount: number): number {
		console.log(`J'ai dépensé ${amount}`);
		return amount;
	}
}

console.log(moi)

// we don't have to define it right away... we can do
let someone: Person
// puis plus tard on peut définer notre variable someone par-rapport à notre interface. Contrairement à la ligne 15, faut pas faire tout de suite. Mais attention. ce variable, pourvue qu'on déclar que sa valeur et l'interface, la classe qu'on crée à la suite doit tout accorder avec la structure de l'interface. Juste comme l'on a fait à la ligne 15

// on peut aussi faire avec les parametres des fonctions
const greetPerson = (person: Person) => {
	// remarque comment intellisense reconnait les propriétaires dans notre interface
	console.log(`Yo ${person.name}`)
}

// donc, quand on appelle notre fonction, notre argument doit être un objet qui suit la même structure comme notre interface
// greetPerson({name: "Gilo"}) // ca va pas marcher
greetPerson(moi); // ca marche parce que la modéle de "moi" est pareille que notre interface



import { Invoice } from "./models/invoice.js"; 

const invoiceOne = new Invoice("Peach", "Castle Infrastructure", 300);
const invoiceTwo = new Invoice("Bowser", "Weapons Maintainence", 700);

console.log(invoiceOne, invoiceTwo);

// NEW: I see. only invoices objects that are made via the invoice class schema are allowed. Just like let myStrings: string[] = [] accepts only strings. This one accepts only the objects that are properly instantiated. ie, it has to follow the schema of lines 17 and 18.
let invoices: Invoice[] = []
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);

invoices.forEach((currentInvoice) => {
	console.log(currentInvoice.client, currentInvoice.amount, currentInvoice.format())
})  

const forme = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(forme.children);



const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

forme.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	console.log(type.value, toFrom.value, details.value, amount.valueAsNumber)
}); 