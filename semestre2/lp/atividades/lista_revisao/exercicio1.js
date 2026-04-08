// 1) Escreva um algoritmo em JavaScript que receba dois números e informe se são iguais ou diferentes
const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite o 1º número: '))
let numero2 = Number(prompt('Digite o 2º número: '))

if (numero1 === numero2){
    console.log(`O número ${numero1} é igual ao número ${numero2}.`)
} else {
    console.log(`O número ${numero1} é diferente do número ${numero2}.`)
}