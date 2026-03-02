// Exercício 1: Leitura e Impressão
// (Complexidade: Baixa) - Faça um programa que leia uma matriz 2x3 de números inteiros, e ao final, imprima a matriz formatada na tela.
// Exemplo de Interação:
// Digite o valor para a posição [0][0]: 1
// Digite o valor para a posição [0][1]: 2
// Digite o valor para a posição [0][2]: 3
// Digite o valor para a posição [1][0]: 4
// Digite o valor para a posição [1][1]: 5
// Digite o valor para a posição [1][2]: 6
// ---
// Saída no Console:
// Matriz Digitada:
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
const prompt = require('prompt-sync')()

let matriz = []
for(let i = 0; i < 2; i++){
    matriz[i]= []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
    }
}
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}