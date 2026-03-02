const prompt = require('prompt-sync')()
// Exercício 4: Custo Final do Carro
// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor (28%) e dos impostos (45%). Escreva um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
// Exemplo de Interação:
// Digite o custo de fábrica do carro: 40000
// Saída no Console:
// O custo final do carro é: R$ 69200

let custo, distribuidor, impostos, custo_final

custo = Number(prompt('Digite o custo de fábrica do carro: '))
distribuidor = 28 / 100
impostos = 45 / 100

custo_final = custo + (custo * distribuidor) + (custo * impostos)
console.log('O custo final do carro é: R$ ', custo_final);
