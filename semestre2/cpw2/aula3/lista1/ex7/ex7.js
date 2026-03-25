const carro = {
  marca: "chevrolet",
  modelo: "avião",
  ano: "2001",
  informacoes: function() {
    return `Marca: ${this.marca}.\nModelo: ${this.modelo}.\nAno: ${this.ano}`;
  }
}

console.log(carro.informacoes());
console.log(carro);