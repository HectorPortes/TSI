// Exercício 21: União de Vetores (Sem Repetição)
// (Complexidade: Medio-Alta) - Faça um programa que leia dois vetores A e B, cada um com 5 elementos. Crie um terceiro vetor C que seja a união de A e B. A união deve conter todos os elementos de A e B, mas sem elementos repetidos. Imprima o vetor C.
// Exemplo de Interação:
// Digite os 5 valores de A:
// 1, 2, 3, 4, 5
// Digite os 5 valores de B:
// 4, 5, 6, 7, 8
// ---
// Saída no Console:
// Vetor C (União): [1, 2, 3, 4, 5, 6, 7, 8]
const prompt = require('prompt-sync')()

let A = []
let B = []
let C = []
for(let i = 0; i < 5; i++){
    let ns1 = Number(prompt('Digite um número para o Vetor A: '))
    A[i] = ns1   
}

for(i = 0; i < 5; i++){
    ns1 = Number(prompt('Digite um número para o Vetor B: '))
    B[i] = ns1   
}

// Conferindo se Vetor A tem algum numero repetido
let contador = 0
for(let i = 0; i < 5; i++){
    let repetido = false
    for(let j = 0; j < i; j++){
        if(i === 0){
            break
        } else if(A[i] === A[j]){
            repetido = true
            break
        }
    }
    if(repetido !== true){
        C[contador] = A[i]
        contador++
    }
}

// Conferindo se Vetor B tem algum numero repetido
for(let i = 0; i < 5; i++){
    repetido = false;
    for(let j = 0; j < C.length; j++){
        if(B[i] === C[j]){
            repetido = true
            break
        }
    }
    if(repetido !== true){
        C[contador] =  B[i]
        contador++
    }
}
console.log('Vetor A: ', A)
console.log('Vetor B: ', B)
console.log('Vetor C: ', C)