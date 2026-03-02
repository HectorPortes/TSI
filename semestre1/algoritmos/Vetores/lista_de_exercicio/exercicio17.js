// Exercício 17: Análise de Notas da Turma
// (Complexidade: Medio-Alta) - Faça um programa para ler a nota da prova de 15 alunos e as armazene num vetor. Ao final, calcule e imprima a média geral da turma, a maior nota e a menor nota.
// Exemplo de Interação:
// (Após digitar as 15 notas)
// 4.2, 6.8, 7.0, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 8.0, 8.1, 8.3, 8.6, 9.8
// ---
// Saída no Console:
// Média geral da turma: 7.5
// Maior nota: 9.8
// Menor nota: 4.2
const prompt = require('prompt-sync')()

let notas = []
let maior_nota = 0
let menor_nota = 0
let media = 0
for(let i = 0; i < 15; i++){
    let nota = Number(prompt('Digite a nota: '))
    notas[i] = nota
}

let verificador_tamanho = notas.length - 1
for(i = 0; i < notas.length; i++){
    if(i === 0){
        maior_nota = notas[i]
        menor_nota = notas[i]
    }
    if(notas[i] > maior_nota){
        maior_nota = notas[i]
    }
    if (notas[i] < menor_nota){
        menor_nota = notas[i]
    }
    media = media + notas[i]
    if(i === verificador_tamanho){
        media = media / 15
    }
}
console.log('Vetor das Notas: ', notas)
console.log('Média Geral da Turma: ', media)
console.log('Maior Nota: ', maior_nota)
console.log('Menor Nota: ', menor_nota)