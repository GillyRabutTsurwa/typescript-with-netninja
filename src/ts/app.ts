// moved the class definiton to models.invoice.ts. we will be using import exports. Just like in Javascript.
// NOTE: it the path of the file is .js and NOT .ts. This is because at the end our code will be transpiled to Javascript. Just a reminder.
// import { Invoice } from "./models/invoice.js"; 
// NOTE: I move app.ts out of the ts file and deleted to ts file. so the file strcuture is exactly like the ninja's
// juss kidding not quite. all my files are under 1 ts file in src. that's the only difference
// also changed ths script tag in html by adding the type module
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