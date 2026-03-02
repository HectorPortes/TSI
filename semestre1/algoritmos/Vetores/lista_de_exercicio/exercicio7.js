// Exercício 7: Substituir Ocorrências
// (Complexidade: Baixa) - Leia um vetor de 10 posições. Em seguida, leia um número X. O programa deve substituir todas as ocorrências de X no vetor por 0 (zero). Imprima o vetor modificado.
// Exemplo de Interação:
// Digite 10 números:
// 5, 2, 5, 8, 1, 5, 9, 3, 5, 4
// Digite o número a ser substituído (X): 5
// ---
// Saída no Console:
// Vetor modificado: [0, 2, 0, 8, 1, 0, 9, 3, 0, 4]
const prompt = require('prompt-sync')()

let vetor = []
let x = Number(prompt('Digite o número a ser substituído (X): '))
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite um numero: '))
    vetor[i] = numeros
}
console.log('Vetor Original: ', vetor)

for(i = 0; i < vetor.length; i++){
    if(vetor[i] === x){
        vetor[i] = 0
    }
}
console.log('Vetor modificado: ', vetor)