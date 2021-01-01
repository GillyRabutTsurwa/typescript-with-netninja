import { Invoice } from "./models/invoice.js";
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
const forme = document.querySelector(".new-item-form");
console.log(forme.children);
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
forme.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
