// 12) Escreva um programa que exiba os números de 1 a 100 que são divisíveis por 3 e 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`O número ${i} é divisivel por 3 e 5.`)
  }
}