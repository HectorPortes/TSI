const produto1 = {
  nome: "Iphone 17",
  preco: 15000
}

const produto2 = {
  nome: "Xiomi Explode",
  preco: 2000
}

let texto = ""
for (let propriedade in produto1){
  if(produto1[propriedade] === produto2[propriedade]){
    texto += `O nome dos produtos são iguais.\n`
  } else {
    texto += `O nome dos produtos são diferentes: ${produto1[propriedade]} e ${produto2[propriedade]}.\n`
  }
}

console.log(texto);