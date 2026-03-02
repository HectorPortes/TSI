// Exercício 10: Soma da Diagonal Principal
// (Complexidade: Média) - Faça um programa que leia uma matriz quadrada 4x4 e calcule a soma dos elementos que estão na diagonal principal.
// Exemplo de Interação:
// --- Preenchendo a Matriz 4x4 ---
// (Usuário digita os 16 números)
// ---
// Saída no Console:
// A soma dos elementos da diagonal principal é: 34.
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 4; i++){
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
        if(i === j){
            soma += matriz[i][j]
        }
    }
}
console.log('A soma dos elementos da diagonal principal é: ', soma)
