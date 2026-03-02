// Exercício 5: Faixa Etária Permitida
// (Complexidade: Média) - Crie um algoritmo que leia a idade de uma pessoa e informe se ela pode entrar em um evento. A regra é: apenas pessoas com idade maior ou igual a 18 e menor que 60 podem entrar.
// Exemplo de Interação:
// Digite a idade: 20
// Saída no Console:
// Entrada permitida.
// Digite a idade: 65
// Saída no Console:
// Entrada não permitida.
const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite a sua idade: '))

// Resolvendo com if
if(idade <= 60 && idade >= 18){
    console.log('Entrada permitida.')
} else {
    console.log('Entrada não permitida.')
}

// Resolvendo com switch case
switch (true) {
    case idade <= 60 && idade >= 18:
        console.log('Entrada permitida.')
        break
    default:
        console.log('Entrada não permitida.')
        break
}