// Exercício 3: Contar Valores Pares
// (Complexidade: Baixa) - Faça um programa que leia uma matriz 4x4, conte e imprima quantos valores pares ela possui.
// Exemplo de Interação:
// --- Preenchendo a Matriz 4x4 ---
// (Usuário digita os 16 números)
// ---
// Saída no Console:
// A matriz possui 8 valores pares.
const prompt = require('prompt-sync')()

let matriz = []
for(let i = 0; i < 4; i++){
    matriz[i]= []
    for(let j = 0; j < 4; j++){
        matriz[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
    }
}
for(let i = 0; i< matriz.length; i++){
    console.log(matriz[i])
}

con_pares = 0
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] % 2 === 0){
            con_pares++
        }
    }
}
console.log("A matriz possui ", con_pares, " valores pares.")