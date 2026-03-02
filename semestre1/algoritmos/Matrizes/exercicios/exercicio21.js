// Exercício 21: Quadrado Mágico
// (Complexidade: Alta) - Leia uma matriz 3x3 e verifique se ela é um Quadrado Mágico. Em um quadrado mágico, a soma de cada linha, a soma de cada coluna e a soma das duas diagonais deve ser exatamente a mesma.
// Exemplo de Interação:
// --- Entrada ---
// [ 2, 7, 6 ]
// [ 9, 5, 1 ]
// [ 4, 3, 8 ]
// ---
// Saída no Console:
// A soma mágica é 15.
// A matriz É um Quadrado Mágico!
const prompt = require('prompt-sync')()

let matriz = []
let soma_linhas = 0
let soma_principal = 0
let soma_secundaria = 0

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        let numeros = Number(prompt('Digite o numero da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let contador_principal = 0
let contador_secundario = 0
let resultado = ''
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        soma_linhas += matriz[i][j]
        if(j === contador_principal){
            soma_principal += matriz[i][j]
            contador_principal++
        }
        if(j === matriz[i].length - 1 - contador_secundario){
            soma_secundaria += matriz[i][j]
            contador_secundario++
        }
        if(i === matriz.length-1){
            if(soma_linhas / 3 === soma_principal && soma_linhas / 3 === soma_secundaria && soma_principal === soma_secundaria){
                resultado = 'A matriz é um Quadrado Mágico!'
            } else {
                resultado = 'A matriz não é um Quadrado Mágico'
            }
        }
    }
}
console.log(resultado)