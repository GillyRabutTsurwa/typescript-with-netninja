class Invoice {
	// this is typescript specific. we don't define the type in Javascript. in javascript, these three lines would not exist.
	client: string;
	details: string;
	amount: number;

	constructor(c: string, d: string, a: number) {
		this.client = c;
		this.details = d;
		this.amount = a;
	}

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