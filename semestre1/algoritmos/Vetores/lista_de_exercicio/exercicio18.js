// Exercício 18: Intercalação de Vetores
// (Complexidade: Medio-Alta) - Faça um programa que leia dois vetores de 5 posições cada (Vetor A e Vetor B). Gere um terceiro vetor (Vetor C) de 10 posições, cujos valores deverão ser compostos pelos elementos intercalados de A e B (A[0], B[0], A[1], B[1], ...). Imprima o Vetor C.
// Exemplo de Interação:
// Digite os 5 valores de A:
// 1, 3, 5, 7, 9
// Digite os 5 valores de B:
// 2, 4, 6, 8, 10
// ---
// Saída no Console:
// Vetor C (intercalado): [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const prompt = require('prompt-sync')()

let A = []
let B = []
let C = []

for(let i = 0; i < 5; i++){
    let ns1 = Number(prompt('Digite o número do Vetor A: '))
    A[i] = ns1 
}

for(i = 0; i < 5; i++){
    ns1 = Number(prompt('Digite o número do Vetor B: '))
    B[i] = ns1 
}

// let contador_A = 0
// let contador_B = 0
for(i = 0; i < 5; i++){
    C[2 * i] = A[i]
    C[2 * i + 1] = B[i]
    //if(i % 2 === 0){
    //    C[i] = A[contador_A]
    //    contador_A++
    //} else {
    //    C[i] = B[contador_B]
    //    contador_B++
    //}
}

console.log('Vetor A: ', A)
console.log('Vetor B: ', B)
console.log('Vetor C: ', C)

// Funciona mas pode confundir, pois pede um numero A depois um B depois um A depois um B e assim por diante. Além de envolver for dentro de for.
// let contador_A = 0
// let contador_B = 0
// for(let i = 0; i < 5; i++){
//     let ns1 = Number(prompt('Digite o número do Vetor A: '))
//     A[i] = ns1
//     let ns2 = Number(prompt('Digite o número do Vetor B: '))
//     B[y] = ns2
//     if(i === 4){
//         for(let j = 0; j < 10; j++){
//             if(j % 2 === 0){
//                 C[j] = A[contador_A]
//                 contador_A++
//             } else {
//                 C[j] = B[contador_B]
//                 contador_B++
//             }
//         }
//     }
// }