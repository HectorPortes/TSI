// Exercício 9: Ordenar Três Valores
// (Complexidade: Alta) - Construa um algoritmo que receba como entrada três valores e os imprima em ordem crescente (do menor para o maior).
// Exemplo de Interação:
// Digite o primeiro valor: 30
// Digite o segundo valor: 10
// Digite o terceiro valor: 20
// Saída no Console:
// Os números em ordem crescente são: 10, 20, 30.
const prompt = require('prompt-sync')()

let numero1, numero2, numero3
numero1 = Number(prompt('Digite um número: '))
numero2 = Number(prompt('Digite um número: '))
numero3 = Number(prompt('Digite um número: '))
let aux = 0

// Resolvendo com if
if(numero1 < numero2 && numero1 < numero3){
    if(numero2 < numero3){
        console.log('Os número em ordem crescente são: ', numero1, numero2, numero3)
    } else{
        console.log('Os número em ordem crescente são: ', numero1, numero3, numero2)
    }
} else if(numero2 < numero1 && numero2 < numero3) {
    if(numero3 < numero1){
        console.log('Os número em ordem crescente são: ', numero2, numero3, numero1)
    } else{
        console.log('Os número em ordem crescente são: ', numero2, numero1, numero3)
    }
} else if(numero3 < numero1 && numero3 < numero2) {
    if(numero2 < numero1){
        console.log('Os número em ordem crescente são: ', numero3, numero2, numero1)
    } else{
        console.log('Os número em ordem crescente são: ', numero3, numero1, numero2)
    }
}

// Maneira mais inteligente
if (numero1 > numero2){
    aux = numero2
    numero2 = numero1
    numero1 = aux
}
if(numero2 > numero3){
    aux = numero3
    numero3 = numero2
    numero2 = aux
}
if(numero1 > numero2){
    aux = numero2
    numero2 = numero1
    numero1 = aux
} 
console.log(numero1, numero2, numero3)