// Exercício 12: Soma da Diagonal Secundária
// (Complexidade: Média) - Semelhante ao exercício da diagonal principal, crie um programa que leia uma matriz 4x4 e calcule a soma dos elementos da diagonal secundária (aquela que vai do canto superior direito ao inferior esquerdo).

// Exemplo de Interação:

// --- Preenchendo a Matriz 4x4 ---
// (Usuário digita os valores)
// ---
// Saída no Console:
// A soma da diagonal secundária é: 42.
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 4; i++){
    matriz[i] = []
    for(let j = 0; j < 4; j++){
        let numeros = Number(prompt('Digite o número da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let soma = 0
let decremento = 0
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(j === (3 - decremento)){
            soma += matriz[i][j]
            decremento++
        }
    }
}
console.log('A soma da diagonal secundária é: ', soma)