// Exercício 8: Número no Intervalo
// (Complexidade: Média) - Crie um algoritmo que leia um número inteiro e informe se ele está entre 10 e 50 (inclusive). Caso não esteja, o programa deve mostrar uma mensagem informando que o número está fora do intervalo.
// Exemplo de Interação:
// Digite um número: 25
// Saída no Console:
// O número está dentro do intervalo.
// Digite um número: 7
// Saída no Console:
// O número está fora do intervalo.
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um numero entre 10 a 50: '))

// Resolvendo com if
if(numero <= 50 && numero >= 10){
    console.log('O número está dentro do intervalo.')
} else {
    console.log('O número está fora do intervalo.')
}

// Resolvendo com switch case
switch (true) {
    case numero <= 50 && numero >= 10:
        console.log('O número está dentro do intervalo.')
        break
    default:
        console.log('O número está fora do intervalo.')
        break
}