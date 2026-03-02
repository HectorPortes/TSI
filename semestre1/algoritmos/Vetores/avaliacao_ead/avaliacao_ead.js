// Este exercício foi projetado para praticar a manipulação de vetores (arrays) e a lógica de verificação de elementos.
// 📜 Avaliação EAD
// Exibir Números sem Repetição
// Crie um algoritmo que leia 15 números e exiba-os sem repetições (ou seja, exiba apenas os números distintos). Você pode usar um vetor para armazenar os números e, enquanto lê cada número, verificar se ele já foi lido anteriormente.
// Exemplo de Interação:
// (Após digitar 15 números, por exemplo: 1, 2, 7, 4, 5, 5, 5, 6, 7, 8, 7, 3, 7, 1, 1)
// ---
// Saída no Console:
// 1 2 7 4 5 6 8 3
const prompt = require('prompt-sync')()

let vetor = []
let contador = 0
for(let i = 0; i < 15; i++){
    let repetido = false
    let numeros = Number(prompt('Digite o número: '))
    for(let j = 0; j < i; j++){
        if(i === 0){
            break
        } else if (numeros === vetor[j]){
            repetido = true
            break
        }
    }
    if(repetido !== true){
        vetor[contador] = numeros
        contador++
    }
}
console.log(vetor)