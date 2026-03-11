// 8) Escreva um programa que exiba a tabuada de um número informado pelo usuário.
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite o número: '))

for (let i = 0; i <= 10; i++){
  console.log(`${numero} x ${i} = ${numero * i}`)
}