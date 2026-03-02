// Reajuste Salarial
// OBS: ALT + Z qubra a linha
// Escreva um algoritmo para ler o salario mensal atual de um funcionario e o percentual de reajuste. Calcule e escreva o valor do novo salário.
// Exemplo de Interação
// Digite o salário atual: 3000
// Digite o percentual de reajuste: 10
// Saída no console:
// O novo salário é: R$ 3300

let prompt = require('prompt-sync')()
let salario = Number(prompt('Digite seu salario: '))
let reajuste = Number(prompt('Digite o valor do reajuste: '))
let final = salario + (salario * reajuste / 100)

// let percentual = salario * reajuste / 100
// let final = salario + percentual
console.log('Novo salario é: ', final)