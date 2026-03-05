// 11) Faça um programa que classifique um estudante como "aprovado", "recuperação" ou "reprovado" com base em sua nota final.
// Regras:
//   a) Média igual ou superior a 6.0 (Aprovado);
//   b) Média entre 5.0 e 5.99 (Recuperação);
//   c) Média abaixo de 5.0 (Reprovado).
const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Digite a 1º nota: '))
let nota2 = Number(prompt('Digite a 2º nota: '))
let media = (nota1 + nota2) / 2

if (media >= 6) {
  console.log('Aprovado')
} else if (media < 6 && media >= 5) {
  console.log('Recuperação')
} else {
  console.log('Reprovado')
}