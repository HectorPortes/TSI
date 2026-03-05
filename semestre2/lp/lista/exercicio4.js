// 4) Crie um programa que classifique um número inserido como positivo, negativo ou zero.
const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))

if (numero > 0) {
    console.log(`O número ${numero} é positivo.`)
} else if (numero < 0) {
    console.log(`O número ${numero} é negativo.`)
} else {
    console.log(`O número ${numero} é zero.`)
}