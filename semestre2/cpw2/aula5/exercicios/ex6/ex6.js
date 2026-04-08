let carros = ["BMW", "Toyota", "Honda"]

let texto = ""

const pegar = (valor, indice) => {
  texto += `${indice}: ${valor}\n`
}

carros.forEach(pegar)

console.log(texto);