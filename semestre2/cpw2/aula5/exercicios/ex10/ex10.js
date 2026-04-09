const prompt = require("prompt-sync")()

let frase = prompt("Escreva uma frase: ")

// gi significa que é global e ira pegar independente de ser maisculo ou minusculo
let resultado = frase.replace(/[aeiou]/gi, "*")

console.log(resultado)