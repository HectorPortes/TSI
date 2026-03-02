// Exercício 11: Verificar Matriz Triangular
// (Complexidade: Média) - Crie um programa que leia uma matriz quadrada 3x3 e verifique se ela é uma "Matriz Triangular Superior", "Matriz Triangular Inferior" ou "Nenhuma das opções".
// Exemplo de Interação:
// --- Preenchendo a Matriz 3x3 ---
// (Usuário digita valores onde abaixo da diagonal principal é tudo zero)
// ---
// Saída no Console:
// A matriz é uma Triangular Superior.
const prompt = require('prompt-sync')()

let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = Number(prompt('Digite o número ['+i+']['+j+']: '))
    }
}
for(i = 0; i < matriz.length; i++){
    console.log(matriz[i])
}

let con_sup = 0
let con_inf = 0
let resultado = ''
for(i = 0; i < matriz.length; i++){
    for(j = 0; j < matriz[i].length; j++){
        if(i < j && matriz[i][j] !== 0){
            con_sup++
        } else if (i > j && matriz[i][j] !== 0){
            con_inf++
        }
    }
    if(con_sup === 0){
        resultado = 'A matriz é uma Triangular Inferior'
    } else if(con_inf === 0){
        resultado = 'A matriz é uma Triangular Superior'
    } else {
        resultado = 'A matriz não é nenhuma das opções'
    }
}
console.log(resultado)