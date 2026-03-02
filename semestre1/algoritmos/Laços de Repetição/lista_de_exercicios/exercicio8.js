// Exercício 8: Verificador de Número Primo
// (Complexidade: Média-Alta) - Escreva um programa que verifica se um número inteiro positivo fornecido pelo usuário é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
// Exemplo de Interação:
// Digite um número inteiro positivo: 13
// ---
// Saída no Console:
// 13 é um número primo.
const prompt = require('prompt-sync')()

let n = Number(prompt('Digite um número inteiro positivo: '))
let resultado
for(let i = 0; i < n; i++){
    if(i != 1 && n % i === 0){
        resultado = " não é um número primo."
        i = n
        i--
    } else {
        resultado = " é um número primo."
    }
}
console.log(n, resultado)

// Agora com while
let n1 = Number(prompt('Digite um número inteiro positivo: '))
let resultado1
let y = 0
while (y < n1) {
    if(y != 1 && n1 % y === 0){
        resultado1 = ' não é um número primo.'
        y = n1
        y--
    } else {
        resultado1 = ' é um número primo.'
    }
    y++
}
console.log(n1, resultado1)