// Exercício 10: Primos em um Intervalo
// (Complexidade: Alta) - Crie um programa que encontre todos os números primos em um intervalo especificado pelo usuário.
// Exemplo de Interação:
// Insira o número de início do intervalo: 10
// Insira o número de fim do intervalo: 50
// ---
// Saída no Console:
// Números primos no intervalo de 10 a 50:
// 11 13 17 19 23 29 31 37 41 43 47
const prompt = require('prompt-sync')()

let n_inicio = Number(prompt('Insira o número de início do intervalo: '))
let n_fim = Number(prompt('Insira o número de fim do intervalo: '))

for(let i = n_inicio; i <= n_fim; i++){
    let primo = true
    for(let j = 2; j < i; j++){
        if(i % j === 0) {
            primo = false
            j = i
            j--
        }
    }
    if(primo === true){
        console.log(i)
    }
}

// Agora com while
let n_inicio1 = Number(prompt('Insira o número de início do intervalo: '))
let n_fim1 = Number(prompt('Insira o número de fim do intervalo: '))
let y = n_inicio1
while (y <= n_fim1) {
    let primo1 = true
    let x = 2
    while (x < y) {
        if(y % x === 0){
            primo1 = false
            x = y
        }
        x++
    }

    if (primo1 === true) {
        console.log(y)
    }
    y++
}