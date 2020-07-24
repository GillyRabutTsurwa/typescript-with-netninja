/**
 * Typescript uses strict types.
 * Javascript does not.
 * Typescript uses inference (implicitly) to define the data type of the variable
 * We can do this explicitly as well. On va le faire plus tard.
 */
var character = "Mario";
var age = 30;
var isBlackBelt = false;
// character = 20; won't work
character = "Luigi";
// age = "yoshi"; won't work
age = 40;
// isBlackBelt = "yes"; won't work
isBlackBelt = true;
// can also do strict types for function arguments. This is more explicit
// Diametre has to be a number or else we will get an error and it won't compile
// in the javascript you will notice that the checks are not there. This is because it is done exclusively in the typescript file, and if there are any errors, it will not compiile to the javascript file.
var circumference = function (diametre) {
    return diametre * Math.PI;
};
var circ = circumference(3.4);
console.log(circumference);
