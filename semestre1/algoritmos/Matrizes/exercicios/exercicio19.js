// Exercício 19: Rotação de 90 Graus
// (Complexidade: Alta) - Crie um programa que leia uma matriz 3x3 e, em seguida, rotacione-a 90 graus no sentido horário.
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x3 ---
// (O usuário digita os valores da matriz original)
// ---
// Saída no Console:
// Matriz Rotacionada 90°:
// [ 7, 4, 1 ]
// [ 8, 5, 2 ]
// [ 9, 6, 3 ]
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        let numeros = Number(prompt('Digite o numero da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
console.log('Matriz Original')
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let matriz_rotacionada = []
let linha = matriz.length
for(i = 0; i < linha; i++){
    matriz_rotacionada[i] = []
}
for(i = 0; i < linha; i++){
    for(j = 0; j < matriz[i].length; j++){
        matriz_rotacionada[j][linha - 1 - i] = matriz[i][j]
    }
}
console.log('Matriz Rotacionada em 90º')
for(i = 0; i < matriz_rotacionada.length; i++){
    console.log(matriz_rotacionada[i])
}