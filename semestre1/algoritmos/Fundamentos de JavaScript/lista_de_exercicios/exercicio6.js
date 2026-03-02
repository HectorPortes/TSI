const prompt = require('prompt-sync')()
// Exercício 6: Salário do Vendedor
// Uma revendedora de carros paga a seus vendedores um salário fixo, uma comissão fixa para cada carro vendido e 5% do valor das vendas. Escreva um algoritmo que leia o número de carros vendidos, o valor total das vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
// Exemplo de Interação:
// Nº de carros vendidos: 4
// Valor total das vendas: R$ 80000
// Salário fixo: R$ 2500
// Comissão por carro: R$ 200
// Saída no Console:
// O salário final do vendedor é: R$ 7300

let numero_carros, valor_total, salario_fixo, comissao, salario_final

numero_carros = Number(prompt('Nº de carros vendidos: '))
valor_total = Number(prompt('Valor total das vendas: R$ '))
salario_fixo = Number(prompt('Salário fixo: R$ '))
comissao = Number(prompt('Comissão por carro: R$ '))

salario_final = salario_fixo + (comissao * numero_carros) + (valor_total * 5 / 100)
console.log('O salário final do vendedor é: R$ ', salario_final);
