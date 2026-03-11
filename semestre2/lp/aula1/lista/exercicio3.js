// 3) Implemente uma função que calcule o IMC de uma pessoa com base em peso e altura informados pelo usuário
const prompt = require('prompt-sync')()

let peso = Number(prompt('Digite o peso: '))
let altura = Number(prompt('Digite a altura: '))

let imc = peso / (altura ** 2)

console.log(`O IMC é: ${imc}`)