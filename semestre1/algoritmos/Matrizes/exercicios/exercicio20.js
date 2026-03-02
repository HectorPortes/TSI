// Exercício 20: Tabuleiro de Xadrez
// (Complexidade: Alta) - Sem ler dados do teclado, gere e imprima automaticamente uma matriz 5x5 preenchida com 0s e 1s em padrão de tabuleiro de xadrez (alternando valores), começando com 1 na posição [0][0].
// Exemplo de Interação:
// Saída no Console:
// [ 1, 0, 1, 0, 1 ]
// [ 0, 1, 0, 1, 0 ]
// [ 1, 0, 1, 0, 1 ]
// [ 0, 1, 0, 1, 0 ]
// [ 1, 0, 1, 0, 1 ]
const prompt = require('prompt-sync')()

let matriz = []
let contador = 0

for(let i = 0; i < 5; i++){
    matriz[i] = []
    for(let j = 0; j < 5; j++){
        if(contador % 2 === 0){
            matriz[i][j] = 1
            contador++
        } else {
            matriz[i][j] = 0
            contador++
        }
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}