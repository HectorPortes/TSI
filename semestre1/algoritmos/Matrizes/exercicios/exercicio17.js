// Exercício 17: Verificação de Simetria
// (Complexidade: Média-Alta) - Leia uma matriz quadrada 3x3 e verifique se ela é simétrica. Uma matriz é simétrica se A[i][j] == A[j][i] para todos os elementos.
// Exemplo de Interação:
// --- Entrada ---
// [ 1, 5, 3 ]
// [ 5, 2, 8 ]
// [ 3, 8, 4 ]
// ---
// Saída no Console:
// A matriz É simétrica.
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        let numeros = Number(prompt('Digite o numero da posição ['+i+']['+j+']: '))
        matriz[i][j] = numeros
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let resultado = ''
let conferidor = false
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] === matriz[j][i] && conferidor === false){
            resultado = 'A matriz é simétrica.'
        } else {
            conferidor = true
            resultado = 'A matriz não é simétrica.'
        }
    }
}
console.log(resultado)