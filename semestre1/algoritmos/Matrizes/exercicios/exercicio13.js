// Exercício 13: Soma das Linhas
// (Complexidade: Média) - Faça um programa que leia uma matriz 3x3 e calcule a soma dos elementos de cada linha, armazenando esses resultados em um vetor (array) de 3 posições. Imprima o vetor resultante.
// Exemplo de Interação:
// Matriz Lida:
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 7, 8, 9 ]
// ---
// Saída no Console:
// Soma da Linha 0: 6
// Soma da Linha 1: 15
// Soma da Linha 2: 24
const prompt = require('prompt-sync')()

let matriz = []
for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        let numeros = Number(prompt('Digite o numero da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let contador = 0
let soma = 0
let vet_soma = []
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(i === contador){
            soma += matriz[i][j]
        }
    }
    vet_soma[i] = soma
    soma = 0
    contador++
}
for(i = 0; i < vet_soma.length; i++){
    console.log('Soma da Linha '+i+': ', vet_soma[i])   
}