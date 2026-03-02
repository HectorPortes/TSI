// Exercício 4: Dia da Semana
// (Complexidade: Média) - Construa um algoritmo que leia um número inteiro de 1 a 7 e informe o dia da semana correspondente, sendo domingo o dia de número 1. Se o número não corresponder a um dia da semana, mostre uma mensagem de erro.
// Exemplo de Interação 1 (Válido):
// Digite um número de 1 a 7: 1
// Saída no Console:
// Domingo
// Exemplo de Interação 2 (Inválido):
// Digite um número de 1 a 7: 9
// Saída no Console:
// Erro: Número inválido. Por favor, digite um número de 1 a 7.
const prompt = require('prompt-sync')()

let dia_semana = Number(prompt('Digite de 1 a 7, sendo 1 domingo e assim por seguinte: '))

if(dia_semana == 1) {
    console.log('Domingo')
} else if(dia_semana == 2) {
    console.log('Segunda-feira')
} else if(dia_semana == 3) {
    console.log('Terça-feira')
} else if(dia_semana == 4) {
    console.log('Quarta-feira')
} else if(dia_semana == 5) {
    console.log('Quinta-feira')
} else if(dia_semana == 6) {
    console.log('Sexta-feira')
} else if(dia_semana == 7) {
    console.log('Sábado')
} else {
    console.log('Erro: Número inválido. Por favor, digite um número de 1 a 7.')
}

// Segunda forma de se fazer com switch case
switch (dia_semana) {
    case dia_semana = 1:
        console.log("Domingo")
        break;
    case dia_semana = 2:
        console.log("Segunda")
        break;
    case dia_semana = 3:
        console.log("Segunda")
        break;
    case dia_semana = 4:
        console.log("Segunda")
        break;
    case dia_semana = 5:
        console.log("Segunda")
        break;
    case dia_semana = 6:
        console.log("Segunda")
        break;
    case dia_semana = 7:
        console.log("Segunda")
        break;
    default:
        console.log("Erro: Número inválido. Por favor, digite um número de 1 a 7.")
}