// 1. Écrire un programme qui affiche dans la console les nombres de 1 à 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Demander à l’utilisateur son prénom avec  prompt()  et afficher “Bonjour, prénom !” dans la console.

let name = prompt("Quel est votre prénom ?");
console.log("Bonjour," + prenom + " !");

// 3. Calculer la somme de deux nombres saisis par l’utilisateur et afficher le résultat dans la console.

let firstNumber = prompt("Premier nombre de l'addition");
let secondNumber = prompt("Deuxième nombre de l'addition");
let numberOne = Number(firstNumber);
let numberTwo = Number(secondNumber);
console.log(numberOne + numberTwo);

// 4. Écrire une fonction qui prend une chaîne de caractères et retourne le nombre de caractères qu’elle contient.

let word = prompt("Ecrire un mot");
let wordLength = word.length;
console.log(wordLength + " lettres");

// Reponse avec function{} au 4.

function wordLength(randomWord) {
    let randomLength = randomWord.length;
    return randomLength;
}

let randomWord = prompt("Ecrire un mot");
let length = wordLength(randomWord);
console.log(length);
console.log(`Le mot a ${length} lettres`);

// 5. Vérifier si un nombre saisi par l’utilisateur est pair ou impair, et afficher le résultat dans la console.

let initialNumber = prompt("Donner un nombre");
let realNumber = Number(initialNumber);

if (realNumber % 2 === 0) {
    console.log(`${realNumber} est un nombre pair.`);
} else {
    console.log(`${realNumber} est un nombre impair`);
}

 // 6. Écrire une fonction qui reçoit un tableau d’entiers et retourne un nouveau tableau contenant uniquement les nombres supérieurs à 10.

function above10(array) {
    return array.filter((number) => number > 10);
}

let numberS = [1, 5, 7, 20, 44, 50, 7, 64, 9, 12];
let filteredNumbers = above10(numberS);
console.log("Nombres supérieurs à 10 : " + filteredNumbers);