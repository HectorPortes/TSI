// 5) Escreva um programa que leia o DDD de uma região brasileira e mostre o estado correspondente usando switch-case
const prompt = require('prompt-sync')()

let ddd = Number(prompt('Digite o DDD: '))

// tem que por todos de uma região -> centro-oeste
switch (ddd) {
    case 61:
        console.log('DF')
        break
    case 62:
    case 64:
        console.log('GO')
        break
    case 65:
    case 66:
        console.log('MT')
        break
    case 67:
        console.log('MS')
        console.log('Six Seven ⁶🤷⁷')
        break
    default:
        console.log('Esse DDD não pertence a região centro-oeste.')
        break
}