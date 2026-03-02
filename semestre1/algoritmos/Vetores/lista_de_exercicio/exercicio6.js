// Exercício 6: Contar Negativos
// (Complexidade: Baixa) - Faça um programa que leia 10 números reais e os armazene em um vetor. Ao final, imprima quantos números negativos foram digitados.
// Exemplo de Interação:
// Digite 10 números:
// 5, -2, 8.5, -1, 0, -4.7, 3, 10, -9, 2
// ---
// Saída no Console:
// Foram digitados 4 números negativos.
const prompt = require('prompt-sync')()

let vetor = []
contador = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite um número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if(vetor[i] < 0){
        contador++
    }
}
console.log('Vetor Original: ', vetor)
console.log('Foram digitados ', contador, ' números negativos.')