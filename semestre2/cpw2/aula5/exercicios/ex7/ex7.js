const prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");
let palavra = prompt("Digite uma palavra para buscar em sua frase: ");

let achar = frase.search(palavra);

console.log(achar);