// Exercício 11: Posição do Maior e Menor
// (Complexidade: Média) - Fazer um programa para ler 10 valores e, em seguida, mostrar a posição (índice) onde se encontram o maior e o menor valor.
// Exemplo de Interação:
// Digite 10 números:
// 15, 8, 25, 2, 11, 30, 5, 18, 3, 22
// ---
// Saída no Console:
// Posição do maior valor (30): 5
// Posição do menor valor (2): 3
const prompt = require('prompt-sync')()

let vetor = []
let menor_numero = 0
let maior_numero = 0
let indice_maior
let indice_menor
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite o número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if(i === 0){
        menor_numero = vetor[i]
        maior_numero = vetor[i]
    }
    if(vetor[i] > maior_numero){
        maior_numero = vetor[i]
        indice_maior = i
    }
    if(vetor[i] < menor_numero){
        menor_numero = vetor[i]
        indice_menor = i
    }
}
console.log('Vetor Original: ', vetor)
console.log('Posição do Maior Valor (', maior_numero, '): ', indice_maior)
console.log('Posição do Menor Valor (', menor_numero, '): ', indice_menor)