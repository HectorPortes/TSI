// Exercício 11: MDC pelo Algoritmo de Euclides
// (Complexidade: Alta) - Escreva um algoritmo que calcule o Máximo Divisor Comum (MDC) de dois números inteiros fornecidos pelo usuário, usando o método de Euclides.
// Exemplo de Interação:
// Digite o primeiro número (A): 48
// Digite o segundo número (B): 18
// ---
// Saída no Console:
// O MDC de 48 e 18 é 6.
const prompt = require('prompt-sync')()

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite um número: '))

let a = n1
let b = n2
let mdc = 0
for(let i = 1; i > 0; i++){
    if(b === 0){
        mdc = a
        i = 0
        i--
    } else {
        let resto = a % b
        a = b
        b = resto
    }
}
console.log("O MDC de ", n1, " e ", n2, " é ", mdc)

// Agora com while
let n3 = Number(prompt('Digite um número: '))
let n4 = Number(prompt('Digite um número: '))

let a1 = n3
let b1 = n4
let mdc1 = 0
let y = 1
while (y > 0) {
    if(b1 === 0){
        mdc1 = a1
        y = 0
        y--
    } else {
        let resto1 = a1 % b1
        a1 = b1
        b1 = resto1
    }
    y++
}
console.log("O MDC de ", n3, " e ", n4, " é ", mdc1)