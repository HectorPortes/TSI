// Exercício 2: Encontrar o Maior Valor
// (Complexidade: Baixa) - Faça um programa que leia uma matriz 3x3 e, em seguida, encontre e imprima o maior elemento contido nela.
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x3 ---
// (Usuário digita os 9 números, por exemplo: 5, 2, 19, 4, 8, 1, 9, 12, 3)
// ---
// Saída no Console:
// O maior valor na matriz é: 19
const prompt = require('prompt-sync')()

let matriz = []
for(let i = 0; i < 3; i++){
    matriz[i]= []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
    }
}
for(let i = 0; i< matriz.length; i++){
    console.log(matriz[i])
}

let maior = matriz[0][0]
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j< matriz[i].length; j++){
        if(matriz[i][j] > maior){
            maior = matriz[i][j]
        }
    }
}
console.log("O maior valor na matriz é: ", maior)