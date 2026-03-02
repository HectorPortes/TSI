const prompt = require('prompt-sync')()
// Exercício 5: Idade em Dias
// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias. (Considere um ano com 365 dias e um mês com 30 dias).
// Exemplo de Interação:
// Digite os anos: 25
// Digite os meses: 3
// Digite os dias: 15
// Saída no Console:
// A idade total em dias é: 9230

let anos, meses, dias, idade

anos = Number(prompt('Digite os anos: '))
meses = Number(prompt('Digite os meses: '))
dias = Number(prompt('Digite os dias: '))

idade = (anos * 365) + (meses * 30) + dias
console.log('A idade total em dias é: ', idade);
