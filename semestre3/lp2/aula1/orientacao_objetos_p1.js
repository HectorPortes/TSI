// // Jeito antigo de se criar um tipo novo
// function Fruta(nome, cor, forma) {
//   this.nome = nome
//   this.cor = cor
//   this.forma = forma
//   this.descricao = function() {
//     return `Essa fruta se chama ${this.nome} e possui a cor ${this.cor}`
//   }
// }

// // Criando uma variável chamada uva
// // Do tipo Fruta e com nome = 'Uva', cor = 'Roxa' e forma = 'Redonda'
// var uva = new Fruta('Uva', 'Roxa', 'Redonda')
// var pera = new Fruta('Pera', 'Verde', 'Esquisita')

// // Mostrando no console a descrição da uva utilizando o método "descricao()"
// console.log(uva.descricao())
// console.log(pera.descricao())
// // Jeito antigo de se criar um tipo novo


// Jeito mais recente de se criar um tipo novo
// ES6 add conceito de classes no JS
class Fruta {
  constructor(nome, cor, forma) {
    // atributos/propriedades/caracteristicas/variaveis
    this.nome = nome
    this.cor = cor
    this.forma = forma
  }

  // metodos / ações / function
  descricao() {
    return `Essa fruta se chama ${this.nome} e possui a cor ${this.cor}`
  }
}

var abacaxi = new Fruta('Abacaxi', 'Laranja', 'Oval')
console.log(abacaxi.descricao())
// Jeito mais recente de se criar um tipo novo

