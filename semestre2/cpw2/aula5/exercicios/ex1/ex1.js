const pessoa = { nome: "Juan", idade: 33, cidade: "São Paulo" };

let textoFinal = "";

for (let proriedade in pessoa){
  textoFinal += `${proriedade}: ${pessoa[proriedade]}\n`;
}

console.log(textoFinal);