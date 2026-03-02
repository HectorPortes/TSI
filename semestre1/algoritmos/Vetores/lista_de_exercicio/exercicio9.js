// Exercício 9: Maior e Menor Elemento
// (Complexidade: Média) - Faça um programa que receba do usuário um vetor com 10 posições. Em seguida, deverá ser impresso o maior e o menor elemento (número) do vetor.
// Exemplo de Interação:
// Digite 10 números:
// 5, 2, 8, 1, 9, 4, 10, 3, 7, 6
// ---
// Saída no Console:
// Maior elemento: 10
// Menor elemento: 1
const prompt = require('prompt-sync')()

let vetor = []
let maior_numero = 0
let menor_numero = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite um número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if(i === 0){
        maior_numero = vetor[i]
        menor_numero = vetor[i]
    }
    if(vetor[i] > maior_numero){
        maior_numero = vetor[i]
    }
    if(vetor[i] < menor_numero){
        menor_numero = vetor[i]
    }
}
console.log('Vetor Original: ', vetor)
console.log('Maior Elemento: ', maior_numero)
console.log('Menor Elemento: ', menor_numero)