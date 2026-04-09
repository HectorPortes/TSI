let carros = ["BMW", "Toyota", "Honda"]

let texto = ""

const pegar = (valor, indice) => {
  texto += `${indice}: ${valor}\n`
}

carros.forEach(pegar)

// usando arrow function
// carros.forEach((valor, indice) => {
//   texto += `${indice}: ${valor}\n`
// })

console.log(texto);