const prompt = require("prompt-sync")()

let frase = prompt("Escreva uma frase: ")

let resultado = frase.replace(/[aeiou]/g, "*")

console.log(resultado)