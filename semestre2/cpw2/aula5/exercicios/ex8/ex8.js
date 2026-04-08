const prompt = require("prompt-sync")();

let frase = prompt("Escreva palavras e números: ");

let resultado = frase.match(/[0-9+]/g);

console.log(resultado);