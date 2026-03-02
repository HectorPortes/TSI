// Exercício 4: Média Simples
// (Complexidade: Baixa) - Crie um programa que leia 5 números reais, armazene-os em um vetor e calcule a média aritmética simples desses números. Ao final, imprima a média.
// Exemplo de Interação:
// Digite a 1ª nota: 7.0
// Digite a 2ª nota: 8.0
// Digite a 3ª nota: 6.0
// Digite a 4ª nota: 9.0
// Digite a 5ª nota: 10.0
// ---
// Saída no Console:
// A média é: 8.0
const prompt = require('prompt-sync')()

let notas = []
let media = 0
for(let i = 0; i < 5; i++){
    let nota = Number(prompt('Digite a nota: '))
    notas[i] = nota
}

calcular_media = notas.length - 1
for(i = 0; i < notas.length; i++){
    media = media + notas[i]
    if(i === calcular_media){
        media = media / 5
        }
}
console.log("As notas são: ", notas)
console.log('A média é: ', media)