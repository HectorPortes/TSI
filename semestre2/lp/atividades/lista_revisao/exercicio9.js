// 9) Crie um algoritmo para verificar se um número é par ou ímpar usando operadores relacionais e lógicos.
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite o número: '))

if (numero % 2 == 0) {
  console.log(`O número ${numero} é par.`)
} else {
  console.log(`O número ${numero} é ímpar.`)
}