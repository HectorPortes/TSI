// Exercício 4: Busca de Valor
// (Complexidade: Baixa) - Crie um programa que leia uma matriz 3x3 e um número inteiro X. O programa deve verificar se X existe na matriz e imprimir "Encontrado" ou "Não Encontrado".
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x3 ---
// (Usuário digita os 9 números: 10, 20, 30, 40, 50, 60, 70, 80, 90)
// Digite o valor a ser buscado: 50
// ---
// Saída no Console:
// O valor 50 foi Encontrado na matriz.
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite o valor a ser buscado: '))
let matriz = []
for(let i = 0; i < 3; i++){
    matriz[i]= []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt("Digite o valor para a posição ["+i+"]["+j+"]: "))
    }
}
for(let i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let resultado = "O valor "+numero+" não foi encontrado na matriz."
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] === numero){
            resultado = "O valor "+numero+" foi encontrado na matriz."
            break
        }
    }
}
console.log(resultado)