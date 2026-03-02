// Exercício 20: Contagem de Frequência
// (Complexidade: Medio-Alta) - Leia 20 números inteiros, todos no intervalo de 0 a 9, e armazene-os em um vetor. Em seguida, conte quantas vezes cada número (de 0 a 9) apareceu no vetor. Imprima o resultado.
// Exemplo de Interação:
// (Após digitar os 20 números, ex: 1, 2, 1, 5, 1, 2, 8, 9, 0, 5, ...)
// ---
// Saída no Console:
// Contagem de Frequência:
// 0 apareceu 2 vezes
// 1 apareceu 5 vezes
// 2 apareceu 3 vezes
// 3 apareceu 0 vezes
// 4 apareceu 1 vez
// 5 apareceu 4 vezes
// 6 apareceu 0 vezes
// 7 apareceu 1 vez
// 8 apareceu 2 vezes
// 9 apareceu 2 vezes
const prompt = require('prompt-sync')()

let vetor = []
let contagem = []

for (let i = 0; i < 20; i++) {
    let numero = Number(prompt('Digite um número de 0 a 9: '))
    if(numero >=0 && numero <= 9){
        vetor[i] = numero
    }
}

for (i = 0; i < 10; i++) {
    contagem[i] = 0
}

for(i = 0; i < vetor.length; i++){
    contagem[vetor[i]] = contagem[vetor[i]] + 1
}

console.log('Vetor Original:', vetor)
for (let i = 0; i < 10; i++) {
    if(contagem[i] === 1){
        console.log(i, ' apareceu ', contagem[i], ' vez.')
    } else{
        console.log(i, ' apareceu ', contagem[i], ' vezes.')
    }
}