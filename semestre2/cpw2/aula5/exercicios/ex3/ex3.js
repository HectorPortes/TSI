let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;

const soma = (valor) => {
  total += valor;
}

numeros.forEach(soma);

// usando arrow function
// numeros.forEach((numeros) => {
//   total += numeros
// })

console.log(total);