"use strict";
// let greet: Function;
// exemple 1
// THis is a function signature
var gree;
// La fonction qui suit la signature dessûs. (Elle doit la suivre)
gree = function (name, greeting) {
    console.log(name + " says " + greeting);
};
gree("Gilbert", "Bonjour");
// exemple 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else if (action === "subtract") {
        return numOne - numTwo;
    }
    else {
        return numOne * numTwo;
    }
};
var example1 = calc(8, 3, "add");
console.log(example1);
// exemple 3
// 1. Defining the function signature
var logDetails;
// 2. Defining the function itself
// we are using a type alias but that's not important in the section
logDetails = function (ninja) {
    console.log("I am " + ninja.name + " et j'ai " + ninja.age);
};
// 3. Calling the function
logDetails({ name: "Shaun Pelling", age: 29 });
