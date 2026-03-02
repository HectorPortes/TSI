const prompt = require('prompt-sync')()
// Exercício 8: Dias para Idade
// Faça um algoritmo que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias. (Use as mesmas considerações: ano com 365 dias, mês com 30 dias). Este exercício exige o uso do operador de módulo (%) para encontrar os restos.
// Exemplo de Interação:
// Digite a idade total em dias: 9230
// Saída no Console:
// Idade: 25 anos, 3 meses e 5 dias.

let idade_dias, anos, meses, dias

idade_dias = Number(prompt('Digite a idade total em dias: '))

anos = Math.trunc(idade_dias / 365)
meses = Math.trunc((idade_dias % 365) / 30)
dias = (idade_dias % 365) % 30


console.log('Idade: ', anos, ' anos, ', meses, ' meses e ', dias, ' dias.')
