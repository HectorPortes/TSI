// Exercício 19: Compactação de Vetor
// (Complexidade: Medio-Alta) - Leia um vetor de 10 posições. Crie um segundo vetor que contenha apenas os números positivos (maiores que zero) do primeiro vetor. Se o primeiro vetor não contiver números positivos, o segundo vetor deve permanecer vazio. Imprima o vetor compactado.
// Exemplo de Interação:
// Digite 10 números:
// 5, -2, 8, 0, -1, 3, 0, -7, 10, 4
// ---
// Saída no Console:
// Vetor compactado (positivos): [5, 8, 3, 10, 4]
const prompt = require('prompt-sync')()

let vetor = []
let vetor_positivo = []
contador = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite o número: '))
    vetor[i] = numeros
}

for(i = 0; i < vetor.length; i++){
    if(vetor[i] > 0){
        vetor_positivo[contador] = vetor[i]
        contador++
    }
}
console.log('Vetor Original: ', vetor)
console.log('Vetor Compactado (positivos): ', vetor_positivo)