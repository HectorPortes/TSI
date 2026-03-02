const prompt = require('prompt-sync')()

// // Lendo uma matriz 2x3
// let matriz = [
//     [1, 2, 3], 
//     [4, 5, 6]
// ]
// console.log(matriz)
// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(matriz[i][j])
//     }
// }

// // Colocando valores em uma matriz 2x3
// let matriz2 = [
//     [],
//     []
// ]
// for(let i = 0; i < 2; i++){
//     for(let j = 0; j < 3; j++){
//         matriz2[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
//     }
// }
// console.log(matriz2)

// // Lendo uma matriz 3x3
// let matriz3 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// for(let i = 0; i < matriz3.length; i++){
//     for(let j = 0; j < matriz3[i].length; j++){
//         console.log(matriz3[i][j])        
//     }
// }

// // Colocando valores em uma matriz 3x3
// let matriz4 = [
//     [],
//     [],
//     []
// ]
// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 3; j++){
//         matriz4[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
//     }
// }

// Criando uma matriz com linhas e colunas predefinidas, e preenchendo com valores
let matriz5 = []
for(let i = 0; i < 3; i++){
    matriz5[i] = []
    for(let j = 0; j < 3; j++){
        matriz5[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
    }
}
// Jeito bonitinho de imprimir matriz
for(let i = 0; i < matriz5.length; i++){
    console.log(matriz5[i])
}

// Criando uma matriz pedindo a linha e coluna ao usuário, e preenchendo com valores
let linhas = Number(prompt("Digite o número de linhas da matriz: "))
let colunas = Number(prompt("Digite o número de colunas da matriz: "))
let matriz6 = []
for(let i = 0; i < linhas; i++){
    matriz6[i] = []
    for(let j = 0; j < colunas; j++){
        matriz6[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
    }
}
// Jeito bonitinho de imprimir matriz
for(let i = 0; i < matriz6.length; i++){
    console.log(matriz6[i])
}