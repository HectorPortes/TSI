// Exercício 3: Soma de N Números Digitados
// (Complexidade: Baixa) - Escreva um algoritmo que leia um número n e depois peça para o usuário digitar n números. Ao final, imprima a soma dos números digitados.
// Exemplo de Interação:
// Quantos números você vai digitar? 4
// Digite o numero 1: 10
// Digite o numero 2: -5
// Digite o numero 3: 0
// Digite o numero 4: 1
// Saída no Console:
// A soma é: 6.
const prompt = require('prompt-sync')()

let n = Number(prompt('Quantos número você vai digitar? '))
let soma = 0
for(let i = 0; i < n; i++){
    let numero = Number(prompt('Digite o número: '))
    soma = soma + numero
}
console.log("A soma é: ", soma)

// Agora com while
let n1 = Number(prompt('Quantos números você vai sigitar? '))

let soma1 = 0
let y = 0
while (y < n1) {
    let numero1 = Number('Digite um número: ')
    soma1 = soma1 + numero1
    y++
}
console.log("A soma é: ", soma1)