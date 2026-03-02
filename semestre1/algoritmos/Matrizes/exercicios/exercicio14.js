// Exercício 14: Média dos Elementos
// (Complexidade: Média) - Calcule a média aritmética de todos os elementos de uma matriz 3x4 fornecida pelo usuário.
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x4 ---
// (Soma total dos elementos deu 120)
// ---
// Saída no Console:
// A média dos valores da matriz é: 10.0
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 4; j++){
        let numeros = Number(prompt('Digite o numero da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let soma = 0
let media = 0
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j]
        if(i === matriz.length-1 && j === matriz[i].length-1){
            media = soma / (matriz.length * matriz[i].length)
        }
    }
}
console.log(media)