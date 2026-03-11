// for (let i = 1; i <= 10; i++) {
//   let num = Number(prompt("Informe num: "))
//   if (num % 2 == 0) {
//     console.log("O número " + num + " é Par.");
//   } else {
//     console.log("O número "+ num + " é Impar ");
//   }
// }

// function verificarParImpar(numero) {
//   if (numero % 2 == 0) {
//     console.log("O número " + numero + " é Par.")
//   } else {
//     console.log("O número " + numero + " é Impar.")
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   let num = Number(prompt("Informe o num: "))
//   verificarParImpar(num);
// }

// function divisao(a, b){
//   if (b === 0) {
//     return "Impossivel dividir por 0."
//   } else {
//     return a / b
//   }
// }
// console.log(divisao(10, 0))

// function saudacao() {
//     console.log("Olá, tudo bem?")
// }
// saudacao()

// function soma(a, b) {
//     return a + b
// }
// console.log(soma(10, 20))

soma = (a, b) => { // Arrow Function
    return a + b;
}
console.log(soma(1, 2))