// Exercício 9: Soma dos Elementos
// (Complexidade: Média) - Faça um programa que leia uma matriz 3x4 e calcule a soma de todos os seus elementos.
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x4 ---
// (Usuário digita os 12 números)
// ---
// Saída no Console:
// A soma de todos os elementos da matriz é: 78.
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 4; j++){
        matriz[i][j] = Number(prompt('Digite o número ['+i+']['+j+']: '))
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let soma = 0
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j]
    }
}
console.log('A soma de todos os elementos da matriz é: ', soma)