// Exercício 10: Maior Elemento e sua Posição
// (Complexidade: Média) - Escreva um programa que leia 10 números inteiros e os armazene em um vetor. Imprima o vetor, o maior elemento e a posição (índice) que ele se encontra.
// Exemplo de Interação:
// Digite 10 números:
// 10, 50, 20, 90, 30, 70, 40, 80, 60, 100
// ---
// Saída no Console:
// Vetor: [10, 50, 20, 90, 30, 70, 40, 80, 60, 100]
// Maior elemento: 100
// Posição do maior elemento: 9
const prompt = require('prompt-sync')()

let vetor = []
let maior_numero = 0
let indice
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite um número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if(i === 0){
        maior_numero = vetor[i]
    }
    if(vetor[i] > maior_numero){
        maior_numero = vetor[i]
        indice = i
    }
}
console.log('Vetor Original: ', vetor)
console.log('Maior Elemento: ', maior_numero)
console.log('Posição do Maior Elemento: ', indice)