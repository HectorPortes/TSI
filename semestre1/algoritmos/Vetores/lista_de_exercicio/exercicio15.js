// Exercício 15: Inversão no Local
// (Complexidade: Média) - Crie um programa que leia 10 números para um vetor. Em seguida, inverta a ordem dos elementos *no próprio vetor* (sem usar um vetor auxiliar). O primeiro elemento deve se tornar o último, o segundo o penúltimo, etc. Imprima o vetor invertido.
// Exemplo de Interação:
// Digite 10 números:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ---
// Saída no Console:
// Vetor invertido: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
const prompt = require('prompt-sync')()

let vetor = []
for(let i = 9; i > -1; i--){
    let numeros = Number(prompt('Digite o número: '))
    vetor[i] = numeros
}
console.log("Vetor Invertido: ", vetor)