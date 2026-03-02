const prompt = require('prompt-sync')()
// Exercício 3: Custo de Viagem
// Desenvolva um algoritmo que leia a distância de uma viagem em km, o consumo médio de combustível do veículo em km/l e o preço do litro do combustível. Calcule e imprima o valor que será gasto com combustível na viagem.
// Exemplo de Interação:
// Distância da viagem (km): 300
// Consumo médio (km/l): 12
// Preço do combustível (R$): 5.50
// Saída no Console:
// O custo total da viagem será de R$ 137.50

let distancia, consumo, preco, total

distancia = Number(prompt('Distância da viagem (km): '))
consumo = Number(prompt('Consumo médio (km/l): '))
preco = Number(prompt('Preço do combustível (R$): '))

total = distancia / consumo * preco

console.log('O custo total da viagem será de R$ ', total);
