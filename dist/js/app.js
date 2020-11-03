"use strict";
// typescript doesn't have direct access to the index page. that's why we get this error
// here are some ways to solve this:
// do in if statement to check if the element exists 
// put an ! after element declaration. preferred for fetching by using element names. 
// if you're fetching using class names or id names, type casting is preferred.
// TODO: Clean up these notes. It is messy in here
// example 1
var anchor = document.querySelector("a");
// if (anchor) {
// 	console.log(anchor.href);
// }
console.log(anchor.href);
// const form = document.querySelector("form");
// NEW: Type Casting
var forme = document.querySelector(".new-item-form");
// grabbing the inputs field
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// add event listener to the form.
forme.addEventListener("submit", function (e) {
    e.preventDefault();
    // NEW: amount.value (below) will give as a string.
    // Try change it to amount.valueAsNumber to change value to number
    // Ça me sera très utile
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
