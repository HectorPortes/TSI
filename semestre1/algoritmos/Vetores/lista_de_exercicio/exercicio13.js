// Exercício 13: Contar Ocorrências
// (Complexidade: Média) - Faça um programa que leia um vetor de 10 posições. Em seguida, leia um número X e informe quantas vezes o número X aparece no vetor.
// Exemplo de Interação:
// Digite 10 números:
// 5, 2, 5, 8, 1, 5, 9, 3, 5, 4
// Digite o número a ser contado (X): 5
// ---
// Saída no Console:
// O número 5 aparece 4 vezes no vetor.
const prompt = require('prompt-sync')()

let vetor = []
let x = Number(prompt('Digite o número a ser contado (X): '))
contador = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite o número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if(vetor[i] === x){
        contador++
    }
}
console.log('Vetor Original: ', vetor)
console.log('O Número ', x, ' Aparece ', contador, ' Vezes no Vetor.')