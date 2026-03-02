// Exercício 16: Subtração de Matrizes
// (Complexidade: Média) - Crie um programa que leia duas matrizes A e B, ambas 3x3. Calcule a matriz C onde C = A - B e imprima o resultado.
// Exemplo de Interação:
// Matriz A:       Matriz B:
// [ 10, 10, 10 ]  [ 1, 2, 3 ]
// [ 20, 20, 20 ]  [ 4, 5, 6 ]
// [ 30, 30, 30 ]  [ 7, 8, 9 ]
// ---
// Saída no Console (Matriz C):
// [ 9, 8, 7 ]
// [ 16, 15, 14 ]
// [ 23, 22, 21 ]
const prompt = require('prompt-sync')()

let matriz_A = []
let matriz_B = []

for(let i = 0; i < 3; i++){
    matriz_A[i] = []
    for(let j = 0; j < 3; j++){
        let numeros = Number(prompt('Digite o numero da matriz A na posição ['+i+']['+j+']: '))
        matriz_A[i][j] = numeros
    } 
}
console.log('Matriz A')
for(i = 0; i < matriz_A.length; i++){
    console.log(matriz_A[i])
}

for(let i = 0; i < 3; i++){
    matriz_B[i] = []
    for(let j = 0; j < 3; j++){
        numeros = Number(prompt('Digite o numero da matriz B na posição ['+i+']['+j+']: '))
        matriz_B[i][j] = numeros
    } 
}
for(i = 0; i < matriz_B.length; i++){
    console.log(matriz_B[i])
}

let matriz_C = []
let subtracao = 0

for(i = 0; i < 3; i++){
    matriz_C[i] = []
    for(j = 0; j < 3; j++){
        subtracao = matriz_A[i][j] - matriz_B[i][j]
        matriz_C[i][j] = subtracao
        subtracao = 0        
    }
}
console.log('Matriz C')
for(i = 0; i < matriz_C.length; i++){
    console.log(matriz_C[i])
}