// Exercício 16: Separar Pares e Ímpares
// (Complexidade: Média) - Leia 10 números inteiros para um vetor V. Em seguida, crie dois novos vetores, Pares e Impares. Armazene os números pares de V em Pares e os ímpares em Impares. Imprima os três vetores.
// Exemplo de Interação:
// Digite 10 números:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ---
// Saída no Console:
// Vetor Original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Vetor Pares: [2, 4, 6, 8, 10]
// Vetor Ímpares: [1, 3, 5, 7, 9]
const prompt = require('prompt-sync')()

let v = []
let v_par = []
let v_impar = []
contador_par = 0
contador_impar = 0
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite o número: '))
    v[i] = numeros
}

for(i = 0; i < v.length; i++){
    if(v[i] % 2 === 0){
        v_par[contador_par] = v[i]
        contador_par++
    } else {
        v_impar[contador_impar] = v[i]
        contador_impar++
    }
}
console.log('Vetor Original: ', v)
console.log('Vetor Pares: ', v_par)
console.log('Vetor Ímpares: ', v_impar)
