"use strict";
// Typescript code will go here.
// the type of greet is implicitly a function.
var greet = function () {
    console.log("Bonjour");
};
greet();
// explicitly (mon moyen prefere), we do it like this
// Remarquez que le type est ecrit avec une lettre majuscule.
var salut;
salut = function () {
    console.log("Bonjour-sa-va?");
};
salut();
// if we don't return anything in a function, typescript returns void under the hood.
var add = function (a, b, c) {
    // NEW: the ? is how we define an optional parametre in typescript
    // default parametres are like they are in javascript.
    // if the optional paremetre isn't set in the argument, the value is undefined.
    console.log(a + b);
    console.log(c);
};
add(5, 10);
var minus = function (a, b) {
    return a - b;
};
// Typescript knows that our function returns a number. so the result variable is implicitly set ot be a number.
var result = minus(10, 7);
// Finally if we want to define a return type of a function (I don't know when I would do this though), we can do it at after defining our parametres. Like so:
// syntaxe - : (data-type)
var producc = function (a, b) {
    return a * b;
};
var multi = producc(4, 9);
console.log(multi);
