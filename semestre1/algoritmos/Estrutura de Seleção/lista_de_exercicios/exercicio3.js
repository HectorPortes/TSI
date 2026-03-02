// Exercício 3: Desconto Previdenciário
// (Complexidade: Média) - Crie um algoritmo que calcula o desconto previdenciário de um funcionário. Dado um salário, o programa deve retornar o valor do desconto. A regra é: o desconto é de 11% do salário, mas o valor máximo de desconto é R$ 318,20. O algoritmo deve retornar ou 11% do salário, ou 318,20.
// Exemplo de Interação 1 (Abaixo do teto):
// Digite o salário: 2000
// Saída no Console:
// O desconto previdenciário é de R$ 220.00
// Exemplo de Interação 2 (Acima do teto):
// Digite o salário: 4000
// Saída no Console:
// O desconto previdenciário é de R$ 318.20
const prompt = require('prompt-sync')()

let salario = Number(prompt('Digite o seu salário: '))
let desconto = salario * 11/100
if( desconto <= 318.20) {
    console.log('O desconto previdenciário é de R$ ', desconto)
} else {
    console.log('O desconto previdenciário é de R$ 318.20')
}