// Exercício 14: Busca de Posição
// (Complexidade: Média) - Leia um vetor de 10 números. Em seguida, leia um número X e procure por ele no vetor. Se o número for encontrado, imprima a *primeira* posição (índice) em que ele foi encontrado. Se não for encontrado, imprima -1.
// Exemplo de Interação (Encontrado):
// Digite 10 números:
// 10, 20, 30, 40, 50, 40, 60, 70, 80, 90
// Digite o número a ser buscado (X): 40
// ---
// Saída no Console:
// Número 40 encontrado na posição: 3
// ---
// ---
// Exemplo de Interação (Não Encontrado):
// Digite 10 números:
// 10, 20, 30, 40, 50, 40, 60, 70, 80, 90
// Digite o número a ser buscado (X): 99
// ---
// Saída no Console:
// -1
const prompt = require('prompt-sync')()

let vetor = []
let x = Number(prompt('Digite o número a ser buscado (X): '))
let contador = 0
let resultado = ""
for(let i = 0; i < 10; i++){
    let numeros = Number(prompt('Digite o número: '))
    vetor[i] = numeros
}

let verificador_tamanho = vetor.length - 1
for(i = 0; i < vetor.length; i++){
    if(vetor[i] === x && contador === 0){
        resultado = "Número "+x+" encontrado na posição: "+i
        contador++
    }
    if(i === verificador_tamanho && contador === 0){
        resultado = -1
    }
}
console.log('Vetor Original: ', vetor)
console.log(resultado)