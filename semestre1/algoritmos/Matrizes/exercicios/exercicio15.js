// Exercício 15: Soma de Duas Matrizes
// (Complexidade: Média) - Crie um programa que leia duas matrizes A e B de ordem 3x3. Em seguida, calcule a matriz C, que será a soma de A e B. Ao final, imprima a matriz C.
// Exemplo de Interação:
// --- Preenchendo a Matriz A e B ---
// ...
// Saída no Console:
// Matriz Resultante (A + B):
// [ 6, 8, 10 ]
// [ 12, 14, 16 ]
// [ 18, 20, 22 ]
const prompt = require('prompt-sync')()

let matriz_A = []
let matriz_B = []

for(let i = 0; i < 3; i++){
    matriz_A[i] = []
    for(let j = 0; j < 3; j++){
        let numeros = Number(prompt('Digite numeros da matriz A na posição ['+i+']['+j+']: '))
        matriz_A[i][j] = numeros
    }
}
console.log('Matriz A')
for(i = 0; i < matriz_A.length; i++){
    console.log(matriz_A[i])
}

for(i = 0; i < 3; i++){
    matriz_B[i] = []
    for(j = 0; j < 3; j++){
        numeros = Number(prompt('Digite numeros da matriz B na posição ['+i+']['+j+']: '))
        matriz_B[i][j] = numeros
    }
}
console.log('Matriz B')
for(i = 0; i < matriz_B.length; i++){
    console.log(matriz_B[i])
}

let matriz_C = []
let soma = 0

for(i = 0; i < 3; i++){
    matriz_C[i] = []
    for(j = 0; j < 3; j++){
        soma = matriz_A[i][j] + matriz_B[i][j]
        matriz_C[i][j] = soma
        soma = 0
    }
}
console.log('Matriz C')
for(i = 0; i < matriz_C.length; i ++){
    console.log(matriz_C[i])
}