// Exercício 4: 30 Números Maiores que 100
// (Complexidade: Baixa) - Escreva um algoritmo para imprimir os 30 primeiros números inteiros maiores que 100.
// Exemplo de Saída no Console (parcial):
// 101
// 102
// 103
// ...
// 130
const prompt = require('prompt-sync')()

let contador = 0
for(let i = 0; contador < 30; i++){
    if(i > 100){
        console.log(i)
        contador++
    }
}

// Agora com while
let contador1 = 0
let y = 0
while (contador1 < 30) {
    if(y > 100){
        console.log(y)
        contador1++
    }
    y++
}
