const prompt = require("prompt-sync")()

let frase = prompt("Escreva uma frase que contenha numeros: ")

// /d+/g significado 
// d=decimal(0-9) 
// +=continuo(pega numeros continuos, ex: 33) 
// g=global(não para no primeiro que achar e mostra repetidos, diferente de search());
// let resultado = frase.match(/d+/g);
let resultado = frase.replace(/[0-9]+/g, "abestado")

console.log(resultado)