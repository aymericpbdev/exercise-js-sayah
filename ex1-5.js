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

let word = prompt("Ecrivez un seul mot");
let wordLength = word.length;
console.log(wordLength + " lettres");