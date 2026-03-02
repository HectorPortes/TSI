// Exercício 6: Soma de Pares e Ímpares
// (Complexidade: Média) - Escreva um programa que leia um número n e peça para o usuário digitar n números. Ao final, imprima a soma dos números pares e a soma dos números ímpares separadamente.
// Exemplo de Interação:
// Quantos números você vai digitar? 4
// Digite o numero 1: 10
// Digite o numero 2: 7
// Digite o numero 3: 2
// Digite o numero 4: 3
// ---
// Saída no Console:
// A soma dos números pares é: 12
// A soma dos números ímpares é: 10
const prompt = require('prompt-sync')()

let n = Number(prompt('Quantos números você vai digitar? '))
let soma_pares = 0
let soma_impares = 0
for(let i = 0; i < n; i++){
    let numeros = Number(prompt('Digite o número: '))
    if(numeros % 2 == 0){
        soma_pares = soma_pares + numeros
    } else {
        soma_impares = soma_impares + numeros
    }
}
console.log("A soma dos números pares é: ", soma_pares)
console.log("A soma dos números ímpares é: ", soma_impares)

// Agora com while
let n1 = Number(prompt('Quantos número você vai digitar? '))
let soma_pares1 = 0
let soma_impares1 = 0
y = 0
while (y < n1) {
    let numeros1 = Number(prompt('Digite o número: '))
    if(numeros1 % 2 == 0){
        soma_pares1 = soma_pares1 + numeros1
    } else {
        soma_impares1 = soma_impares1 + numeros1
    }
    y++
}
console.log("A soma dos números pares é: ", soma_pares1)
console.log("A soma dos números ímpares é: ", soma_impares1)