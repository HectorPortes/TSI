// 10) Desenvolva um programa que peça ao usuário para inserir números até que ele digite 0, utilizando do...while.
const prompt = require('prompt-sync')()

do {
  var numero = Number(prompt('Digite o número: '))
} while (numero != 0)