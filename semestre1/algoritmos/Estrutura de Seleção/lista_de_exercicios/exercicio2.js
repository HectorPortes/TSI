// Exercício 2: Iguais ou Diferentes
// (Complexidade: Baixa) - Faça um algoritmo que leia dois números e indique se são iguais ou se são diferentes. Mostre o maior e o menor (nesta sequência).
// Exemplo de Interação 1 (Diferentes):
// Digite o primeiro número: 5
// Digite o segundo número: 10
// Saída no Console:
// Os números são diferentes. O maior é 10 e o menor é 5.
// Exemplo de Interação 2 (Iguais):
// Digite o primeiro número: 7
// Digite o segundo número: 7
// Saída no Console:
// Os números são iguais.
const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite um número: '))
let numero2 = Number(prompt('Digite um número: '))

if(numero1 == numero2) {
    console.log('Os números são iguais.')
} else if(numero1 > numero2) {
    console.log('Os números são diferentes. O número', numero1, ' é o maior, e o número', numero2, ' é o menor.')
} else {
    console.log('Os números são diferentes. O número', numero2, ' é o maior, e o número', numero1, ' é o menor.')
}