// Exercício 2: Primeiros Números Ímpares
// (Complexidade: Baixa) - Dado um número n > 0, imprima os n primeiros números naturais ímpares.
// Exemplo de Interação:
// Quantos números ímpares você quer exibir? 4
// Saída no Console:
// 1
// 3
// 5
// 7
const prompt = require('prompt-sync')()

let n = Number(prompt('Digite um número: '))
if(n > 0){
    for(let i = 1; i <= n; i++){
        if(i % 2 != 0){
            console.log("Número impar: ", i)
        }
    }
} else {
    console.log("Número digitado é menor ou igual a 0. Por favor digite um número maior que 0.")
}

// Agora com while
let n1 = Number(prompt('Digite um número: '))

let y = 1
if(n1 > 0){
    while(y <= n1){
        if(y % 2 != 0){
            console.log('Número impar: ', y)
        }
        y++
    }
} else {
    console.log('Número digitado é menor ou igual a 0. Por favor digite um número maior que 0.')
}