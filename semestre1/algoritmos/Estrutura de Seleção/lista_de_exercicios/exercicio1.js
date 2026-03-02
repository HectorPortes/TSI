// Exercício 1: Par ou Ímpar
// (Complexidade: Baixa) - Crie um algoritmo que determine se um número fornecido é par ou ímpar.
// Exemplo de Interação:
// Digite um número: 10
// Saída no Console:
// O número 10 é par.
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))

if(numero % 2 == 0) {
    console.log('O número', numero, ' é par.');
} else {
    console.log('O número', numero, ' é impar.');
}