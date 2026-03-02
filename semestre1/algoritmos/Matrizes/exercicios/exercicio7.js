// Exercício 7: Substituição de Valores
// (Complexidade: Baixa) - Leia uma matriz 3x3. Em seguida, percorra a matriz e substitua todos os valores menores que 0 por 0. Imprima a matriz modificada.
// Exemplo de Interação:
// --- Entrada ---
// Matriz Original:
// [ 10, -2,  3 ]
// [ -5,  8, -1 ]
// [  4,  0,  9 ]
// ---
// Saída no Console:
// Matriz Modificada (Sem negativos):
// [ 10, 0, 3 ]
// [ 0, 8, 0 ]
// [ 4, 0, 9 ]
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt('Digite o valor na posição ['+i+']['+j+']: '))
    }
}
console.log('Matriz Original:')
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

for (i = 0; i < matriz.length; i++) {
    for(j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] < 0){
            matriz[i][j] = 0
        }
    }    
}
console.log('Matriz Modificada:')
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}