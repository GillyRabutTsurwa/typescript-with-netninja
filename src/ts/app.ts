class Invoice {
	//NEW: access modifiers, ça me fait rappeler de Java
	//NOTE: they are public by default.
	// setting one to private means it is only accessible WITHIN the class. If we try to directly access it outside the class we get an erreur.
	//NOTE: setting to readonly allows us to access the variable value (anywhere) but NOT modify it. So if we try to change the value of client somewhere else in our code, we get an error. Essaie de le changer pour voir ce qui arrive

	//NOTE: There is a shorthand to declare the class' variables with their respective access modifiers. Even though I like the long way, I will comment it out just for this branch. Le voici. NOTE: This only works when including access modifiers. Else, it won't work.
	// readonly client: string;
	// private details: string;
	// public amount: number;

	// constructor(c: string, d: string, a: number) {
	// 	this.client = c;
	// 	this.details = d;
	// 	this.amount = a;
	// }

	//NOTE: not a really a fan of this short hand. moreso because there is no code inside the constructor function, mais néanmoins, c'est bon à savoir
	constructor(readonly client: string, private details: string, public amount: number) {}

	format() {
		return `${this.client} owes ${this.amount} for ${this.details}`
	}
}

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