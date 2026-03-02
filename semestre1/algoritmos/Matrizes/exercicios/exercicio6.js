// Exercício 6: Contagem de Negativos
// (Complexidade: Baixa) - Escreva um algoritmo que leia uma matriz 3x4 e informe quantos números negativos foram digitados.
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x4 ---
// (Usuário digita os valores, incluindo: -1, -5, 10, -2...)
// ---
// Saída no Console:
// A matriz possui 3 números negativos.
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 4; j++){
        matriz[i][j] = Number(prompt('Digite o valor da casa ['+i+']['+j+']: '))
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let contador = 0
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if (matriz[i][j] < 0) {
            contador++
        }
    }
}
console.log('A matriz possui '+contador+' números negativos')