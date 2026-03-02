// Exercício 5: Multiplicação por Escalar
// (Complexidade: Baixa) - Faça um programa que leia uma matriz 2x2 e um valor multiplicador (escalar). Multiplique todos os elementos da matriz por esse valor e imprima a nova matriz.
// Exemplo de Interação:
// --- Preenchendo a Matriz 2x2 ---
// [0][0]: 2
// [0][1]: 3
// [1][0]: 4
// [1][1]: 5
// Digite o multiplicador: 3
// ---
// Saída no Console:
// Matriz Resultante:
// [ 6, 9 ]
// [ 12, 15 ]
const prompt = require('prompt-sync')()

let matriz = []
let multiplicador = Number(prompt('Digite o multiplicador: '))

for(let i = 0; i < 2; i++){
    matriz[i] = []
    for(let j = 0; j < 2; j++){
        matriz[i][j] = Number(prompt('Digite o valor da casa ['+i+']['+j+']: '))
    }
}
console.log('Matriz Base:↓')
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        matriz[i][j] *= multiplicador
    }
}
console.log('Matriz Multiplicada:↓')
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}