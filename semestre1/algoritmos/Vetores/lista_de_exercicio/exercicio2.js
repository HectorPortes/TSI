// Exercício 2: Ordem Inversa
// (Complexidade: Baixa) - Crie um algoritmo que leia 8 números e os armazene em um vetor. Ao final, exiba todos os elementos na ordem inversa em que foram digitados.
// Exemplo de Interação:
// Digite o 1º número: 2
// Digite o 2º número: 5
// Digite o 3º número: 1
// Digite o 4º número: 4
// Digite o 5º número: 7
// Digite o 6º número: 3
// Digite o 7º número: 6
// Digite o 8º número: 8
// ---
// Saída no Console:
// 8
// 6
// 3
// 7
// 4
// 1
// 5
// 2
const prompt = require('prompt-sync')()

let vetor = []
for(let i = 0; i < 8; i++){
    let numeros = Number(prompt('Digite um número: '))
    vetor[i] = numeros
}
console.log("Vetor Original: ", vetor)

let y = vetor.length - 1
for(y; y > -1; y--){
    console.log(vetor[y])
}