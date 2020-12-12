"use strict";
var anchor = document.querySelector("a");
console.log(anchor.href);
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
