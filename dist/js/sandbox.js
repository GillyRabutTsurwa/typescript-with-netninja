"use strict";
// Type aliases nous aide empecher de faire trop longues des parametres des variables et arguments dans nos fonctions (comme un exemple). En gros, en met nos paramètres dans leurs propes variables que l'on peut utiliser autant que l'on veut. Regardez
// NOTE: Voici le code sans type aliases
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greet = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello");
};
var logDetailsAvecAlias = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greetAvecAlias = function (user) {
    console.log(user.name + " says hello");
};
var greetAgainAvecAlias = function (user) {
    console.log(user.name + " says hello");
};
