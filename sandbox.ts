let names = [ "Luigi", "Mario", "Yoshi" ];

names.push("toad");
// names.push(3); don't work
// names[0] = 3; don't work

let numbers = [ 10, 20, 30, 40 ];
numbers.push(25);
// numbers.push("shaun"); don't work
// numbers[0] = "Pelling"; don't work

let mixed = [ "Ken", 4, true, "Chun-li", 9, 7 ];
mixed.push("Ryu");
// mixed.push(10); works
// mixed[mixed.length - 1] = false; works

// OBJECTS
// properties behave much like variables: name has to be a string
let ninja = {
	name: "Mario",
	belt: "black",
	age: 30
};

// ninja.age = 40; works
// ninja.belt = false; will not work
//IMPORTANT: with typescript, you can't add additional properties to an object once it is defined like you can in javascript
// ninja.skills = ["fighting", "running", "sneaking"]; won't work

// you can update ninja to become a new object. but it have the exact same structure (properties) with exact value types as the initial object
ninja = {
	name: "Luigi",
	belt: "green",
	age: 40
};
