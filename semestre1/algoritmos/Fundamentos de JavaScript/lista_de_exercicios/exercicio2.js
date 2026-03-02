// Escreva um algoritmo que leia tres notas de um aluno, calcule e escreva a média final deste aluno.
// primeira nota: 7
// segunda nota: 8.5
// Terceira nota: 9
// Saida no console:
// Média final é: 8.17

let prompt = require('prompt-sync')()
let nota1, nota2, nota3, media
nota1 = Number(prompt('Digite a nota: '))
nota2 = Number(prompt('Digite a nota: '))
nota3 = Number(prompt('Digite a nota: '))
media = (nota1 + nota2 + nota3) / 3
console.log('Média final é: ', media);
