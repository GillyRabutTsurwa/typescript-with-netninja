let character = "Mario";
let age = 30;
let isBlackBelt = false;

// character = 20; won't work
character = "Luigi"; // will work

// age = "yoshi"; won't work
age = 40; // will work

// isBlackBelt = "yes"; won't work
isBlackBelt = true; // will work

// Diametre has to be a number or else we will get an error and it won't compile
// in the javascript you will notice that the checks are not there. This is because it is done exclusively in the typescript file, and if there are any errors, it will not compiile to the javascript file.
const circumference = (diametre: number) => {
	return diametre * Math.PI;
};

let circ = circumference(3.4);
console.log(circumference);
