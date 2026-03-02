// Exercício 8: Posição do Maior Valor
// (Complexidade: Média) - Escreva um programa que leia uma matriz 3x3, encontre o maior elemento e a posição (linha e coluna) em que ele se encontra.
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x3 ---
// (Usuário digita os 9 números, e o maior deles é 25, na linha 1, coluna 2)
// ---
// Saída no Console:
// O maior valor é 25 e está na posição [1][2].
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt('Digite o valor na posição ['+i+']['+j+']: '))
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let maior = matriz[0][0]
let lin = 0
let col = 0
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] > maior){
            maior = matriz[i][j]
            lin = i
            col = j
        }
    }
}
console.log('O maior valor é '+maior+' e está na posição ['+lin+']['+col+'].')