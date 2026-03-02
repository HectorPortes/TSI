// Exercício 6: Aprovado na Escola
// (Complexidade: Média) - Um aluno será aprovado se tiver média maior ou igual a 7 ou se tiver média maior ou igual a 5 e frequência mínima de 75%. Crie um algoritmo que leia a média e a frequência e informe se o aluno foi aprovado ou reprovado.
// Exemplo de Interação:
// Digite a média: 6
// Digite a frequência (%): 80
// Saída no Console:
// Aluno aprovado.
// Digite a média: 5
// Digite a frequência (%): 60
// Saída no Console:
// Aluno reprovado.
const prompt = require('prompt-sync')()

// Resolvendo com if
let media = Number(prompt('Digite sua média: '))
let frequencia = Number(prompt('Digite sua frenquência: '))

if(media >= 7 &&  frequencia/100 >= 75/100){
    console.log('Aluno aprovado.')
} else if(media >= 5 && frequencia/100 >= 75/100){
    console.log('Aluno aprovado.')
} else {
    console.log('Aluno reprovado.')
}

// Resolvendo com switch case
switch (true) {
    case media >= 7 && frequencia/100 >= 75/100:
        console.log('Aluno aprovado.')
        break
    case media >= 5 && frequencia/100 >= 75/100:
        console.log('Aluno aprovado.')
        break
    default:
        console.log('Aluno reprovado.')
        break
}