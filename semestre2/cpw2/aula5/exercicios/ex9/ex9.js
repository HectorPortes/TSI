const prompt = require("prompt-sync")()

let frase = prompt("Escreva uma frase que contenha numeros: ")

let resultado = frase.replace(/[0-9]+/g, "abestado")

console.log(resultado)