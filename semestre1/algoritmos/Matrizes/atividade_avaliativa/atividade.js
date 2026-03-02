// Exercício: Matriz Transposta
// (Complexidade: Média) - Escreva um algoritmo para ler uma matriz 4x4 de números inteiros e transpor essa matriz. A transposição de uma matriz envolve a troca de suas linhas por colunas, resultando em uma nova matriz onde as antigas colunas se tornam as novas linhas e vice-versa.
// Exemplo de Interação:
// (Após o usuário digitar os 16 números da matriz original)
// Matriz Original Lida:
// [ 1,  2,  3,  4 ]
// [ 5,  6,  7,  8 ]
// [ 9, 10, 11, 12 ]
// [ 13, 14, 15, 16 ]
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
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

console.log('-----------------------------------------')

let matriz_transposta = []
for(i = 0; i < matriz.length; i++){
    matriz_transposta[i] = []
    for(j = 0; j < matriz[i].length; j++){
        matriz_transposta[i][j] = matriz[j][i] 
    }
}
for(i = 0; i <matriz_transposta.length; i++){
    console.log(matriz_transposta[i])
}