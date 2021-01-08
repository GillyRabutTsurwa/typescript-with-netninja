import { Invoice } from "./models/Invoice.js";
import { Payment } from "./models/Payment.js";
import { ListTemplate } from "./models/ListTemplate.js";
function ninjaTeachingIntefaces() {
    let docOne;
    let docTwo;
    docOne = new Invoice("Yoshi", "Web Work", 250);
    docTwo = new Payment("Mario", "Plumbing", 400);
    let docs = [];
    docs.push(docOne);
    docs.push(docTwo);
    console.log(docs);
    const invoiceOne = new Invoice("Peach", "Castle Infrastructure", 300);
    const invoiceTwo = new Invoice("Bowser", "Weapons Maintainence", 700);
    console.log(invoiceOne, invoiceTwo);
    let invoices = [];
    invoices.push(invoiceOne);
    invoices.push(invoiceTwo);
    console.log(invoices);
    invoices.forEach((currentInvoice) => {
        console.log(currentInvoice.client, currentInvoice.amount, currentInvoice.format());
    });
}
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
const forme = document.querySelector(".new-item-form");
console.log(forme.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
forme.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
