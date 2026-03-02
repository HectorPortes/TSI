// Exercício 5: Soma dos Elementos
// (Complexidade: Baixa) - Escreva um programa que leia 10 números inteiros, armazene-os em um vetor e imprima a soma de todos os elementos.
// Exemplo de Interação:
// Digite 10 números:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ---
// Saída no Console:
// A soma de todos os elementos é: 55
const prompt = require('prompt-sync')()

let vetor = []
let soma = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite um número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    soma += vetor[i]
}
console.log('Vetor Original: ', vetor)
console.log('A soma de todos os elementos é: ', soma)