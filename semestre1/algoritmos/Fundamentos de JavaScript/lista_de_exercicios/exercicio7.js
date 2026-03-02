const prompt = require('prompt-sync')()
// Exercício 7: Divisor de Conta
// Crie um algoritmo que leia o valor total de uma conta de restaurante, o percentual de gorjeta a ser pago e o número de pessoas para dividir a conta. Calcule e imprima o valor total a ser pago e o valor que cada pessoa deve pagar.
// Exemplo de Interação:
// Valor total da conta: R$ 150
// Percentual da gorjeta (%): 10
// Número de pessoas: 4
// Saída no Console:
// O valor total com gorjeta é R$ 165.00. Cada pessoa deve pagar R$ 41.25.

let valor_conta, percentual_gorjeta, numero_pessoas, valor_total, valor_pessoa

valor_conta = Number(prompt('Valor total da conta: R$ '))
percentual_gorjeta = Number(prompt('Percentual da gorjeta (%): '))
numero_pessoas = Number(prompt('Número de pessoas: '))

valor_total = valor_conta + (valor_conta * percentual_gorjeta / 100)
valor_pessoa = valor_total / numero_pessoas

console.log('O valor total com gorjeta é R$ ', valor_total, '. Cada pessoa deve pagar R$ ', valor_pessoa);
