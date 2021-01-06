import { Invoice } from "./models/Invoice.js"; 
import { Payment } from "./models/Payment.js"; 
import { HasFormatter } from "./interfaces/HasFormatter.js"; 

/** NOTE:
 * this code in function below is useful, but not part of the project moving forward. Hence, I will leave it in this function and run it in case I need to seek references
 */
function ninjaTeachingIntefaces() {
	// remember, we can do this because both our invoice and payment classes implement the HasFormatter interface
	let docOne: HasFormatter;
	let docTwo: HasFormatter;

	docOne = new Invoice("Yoshi", "Web Work", 250);
	docTwo = new Payment("Mario", "Plumbing", 400);

	// array of objects that follows the has formatter structure
	let docs: HasFormatter[] = [];
	docs.push(docOne);
	docs.push(docTwo);

	console.log(docs);


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
}

const forme = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(forme.children);



const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

forme.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	//NEW: 
	let doc: HasFormatter;
	if (type.value === "invoice") {
		doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
	}
	else {
		doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
	}
	console.log(doc)
}); 