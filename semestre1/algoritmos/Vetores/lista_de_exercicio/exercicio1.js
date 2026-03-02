// Exercício 1: Manipulação de Vetor Predefinido
// (Complexidade: Baixa) - Faça um programa que possua um vetor denominado A que armazene 6 números inteiros com os seguintes valores: 1, 0, 5, -2, -5, 7. O programa deve:
// (a) Somar os valores das posições A[0], A[1] e A[5] e mostrar a soma.
// (b) Modificar o valor da posição 4 para 100.
// (c) Mostrar na tela cada valor do vetor A, um em cada linha.
// Exemplo de Saída no Console:
// Soma dos elementos específicos: 8
// ---
// Vetor modificado:
// 1
// 0
// 5
// -2
// 100
// 7

let A = [1, 0, 5, -2, -5, 7]

// a) Somar os valores das posições A[0], A[1] e A[5] e mostrar a soma
let soma = A[0] + A[1] + A[5]
console.log("Soma: ", soma)

// b) Modificar o valor da posição 4 para 100
A[4] = 100

// c) Mostrar na tela cada valor do vetor A, um em cada linha
for(let i = 0; i < A.length; i++){
    console.log(A[i])
}