// 7) Implemente um algoritmo para calcular a média de 10 estudantes usando uma estrutura de repetição for.
const prompt = require('prompt-sync')()

let i = 1

while (i <= 10) {
    let nota1 = Number(prompt('Digite a 1º nota: '))
    let nota2 = Number(prompt('Digite a 2º nota: '))
    let media = (nota1 + nota2) / 2
    console.log(`Média do ${i}º aluno é: ${media}.`)
}