// Exercício 22: Troca de Linhas por Colunas
// (Complexidade: Alta) - Leia uma matriz 4x4. Em seguida, troque a 1ª linha com a 4ª linha. Após isso, troque a 2ª coluna com a 3ª coluna e imprima a matriz final.
// Exemplo de Interação:
// --- Matriz Original ---
// [ 1, 2, 3, 4 ]
// [ 5, 6, 7, 8 ]
// [ 9, 0, 1, 2 ]
// [ 3, 3, 3, 3 ]
// ---
// Saída no Console (Após trocas):
// [ 3, 3, 3, 3 ] (Antiga linha 4)
// [ 5, 7, 6, 8 ] (Cols 2 e 3 trocadas)
// [ 9, 1, 0, 2 ] (Cols 2 e 3 trocadas)
// [ 1, 3, 2, 4 ] (Antiga linha 1, com cols trocadas)
const prompt = require('prompt-sync')()

