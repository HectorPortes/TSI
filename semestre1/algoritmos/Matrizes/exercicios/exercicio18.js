// Exercício 18: Matriz Transposta 4x4
// (Complexidade: Média-Alta) - Escreva um algoritmo para ler uma matriz 4x4 e gerar sua matriz transposta.
// Exemplo de Interação:
// --- Preenchendo a Matriz Original 4x4 ---
// (Usuário digita os 16 números)
// ---
// Saída no Console:
// Matriz Transposta:
// [ 1, 5,  9, 13 ]
// [ 2, 6, 10, 14 ]
// [ 3, 7, 11, 15 ]
// [ 4, 8, 12, 16 ]
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 4; i++){
    matriz[i] = []
    for(let j = 0; j < 4; j++){
        let numeros = Number(prompt('Digite o numero da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
console.log('Matriz Original')
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let matriz_transposta = []

for(i = 0; i < 4; i++){
    matriz_transposta[i] = []
    for(j = 0; j < 4; j++){
        matriz_transposta[i][j] = matriz[j][i]
    }
}
console.log('Matriz Transposta')
for(i = 0; i < matriz_transposta.length; i++){
    console.log(matriz_transposta[i])
}