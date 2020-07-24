// Dynamic types are for allowing variables to have any value type. So just like how they behave in normal javascript. Don't know if I will be using this much, though I'm sure it may have it's use cases.
// Use this with caution.
var age;
age = 25;
age = "Twenty Five";
console.log(age);
age = true;
console.log(age);
age = { name: "Luigi" };
console.log(age);
// Can also do it for arrays and objects.
var mixed = [];
mixed.push(5);
mixed.push("Daisy");
mixed.push(false);
console.log(mixed);
var ninja;
ninja = {
    name: "Yoshi",
    age: 25
};
console.log(ninja);
ninja = {
    name: true,
    age: false
};
console.log(ninja);
