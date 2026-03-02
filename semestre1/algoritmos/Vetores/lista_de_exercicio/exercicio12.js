// Exercício 12: Soma de Valores em Posições
// (Complexidade: Média) - Faça um programa que leia um vetor de 8 posições. Em seguida, leia também dois valores X e Y quaisquer correspondentes a duas posições no vetor. Ao final, seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.
// Exemplo de Interação:
// Digite 8 números para o vetor:
// 10, 20, 30, 40, 50, 60, 70, 80
// Digite a primeira posição (X) de 0 a 7: 1
// Digite a segunda posição (Y) de 0 a 7: 5
// ---
// Saída no Console:
// A soma dos valores nas posições 1 e 5 é: 80
const prompt = require('prompt-sync')()

let vetor = []
let x = Number(prompt('Digite a primeira posição (X) de 0 a 7: '))
let y = Number(prompt('Digite a primeira posição (Y) de 0 a 7: '))
let soma = 0
for(let i = 0; i < 8; i++){
    let numeros = Number(prompt('Digite o número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if (i === x || i === y){
        soma = soma + vetor[i]
    }
}
console.log('Vetor Original: ', vetor)
console.log('A Soma dos Valores nas Posições ', x, ' e ', y, ' é: ', soma)