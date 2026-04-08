// 2) Desenvolva um programa que leia a média de um estudante e diga se ele está aprovado (média >= 6)
const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Digite a 1º nota: '))
let nota2 = Number(prompt('Digite a 2º nota: '))

let media = (nota1 + nota2) / 2

if (media >= 6) {
  console.log('Aprovado')
}