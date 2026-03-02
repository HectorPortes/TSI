// Exercício 3: Contar Valores Pares
// (Complexidade: Baixa) - Leia um vetor de 10 posições. Ao final, contar e escrever quantos valores pares ele possui.
// Exemplo de Interação:
// Digite 10 números:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ---
// Saída no Console:
// O vetor possui 5 valores pares.
const prompt = require('prompt-sync')()

let vetor = []
let contador = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite um número: '))
    vetor[i] = numeros
}

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 === 0){
        contador++
    }
}

console.log("Vetor Original: ", vetor)
console.log("O vetor possoui ", contador, " valores pares.")