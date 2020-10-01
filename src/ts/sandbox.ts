// Type aliases nous aide empecher de faire trop longues des parametres des variables et arguments dans nos fonctions (comme un exemple). En gros, en met nos paramètres dans leurs propes variables que l'on peut utiliser autant que l'on veut. Regardez

// NOTE: Voici le code sans type aliases

const logDetails = (uid: string | number, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { name: string; uid: string | number }) => {
	console.log(`${user.name} says hello`);
};

const greetAgain = (user: { name: string; uid: string | number }) => {
	console.log(`${user.name} says hello`);
};

// NEWNOTE: Et maintenat voici le meme code avec type aliases. Remarquez comment il est plus court, précis et lisible. Mais tout d'abord. Faut déclarer nos aliases.

// NEW: type alias
type StringOrNum = string | number;
type objectWithName = { name: string; uid: StringOrNum };

const logDetailsAvecAlias = (uid: StringOrNum, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
};

const greetAvecAlias = (user: objectWithName) => {
	console.log(`${user.name} says hello`);
};

const greetAgainAvecAlias = (user: objectWithName) => {
	console.log(`${user.name} says hello`);
};
