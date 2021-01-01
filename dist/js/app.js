"use strict";
var Invoice = (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoiceOne = new Invoice("Peach", "Castle Infrastructure", 300);
var invoiceTwo = new Invoice("Bowser", "Weapons Maintainence", 700);
console.log(invoiceOne, invoiceTwo);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
var forme = document.querySelector(".new-item-form");
console.log(forme.children);
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
forme.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
