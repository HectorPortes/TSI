// Exercício 5: 30 Pares Maiores que 1001
// (Complexidade: Média) - Escreva um algoritmo para imprimir os 30 primeiros números inteiros pares maiores que 1001.
// Exemplo de Saída no Console (parcial):
// 1002
// 1004
// 1006
// ...
// 1060
const prompt = require('prompt-sync')()

let contador = 0
for(let i = 0; contador < 30; i++){
    if(i > 1001 && i % 2 == 0){
        console.log(i)
        contador++
    }
}

// Agora com while
let contador1 = 0
let y = 0
while (contador1 < 30) {
    if(y > 1001 && y % 2 == 0){
        console.log(y)
        contador1++
    }
    y++
}