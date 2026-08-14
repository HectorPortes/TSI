// Classe utilitaria
class Matematica {
  static soma(a, b) { // metodo estatico -> não precisa criar um objeto do tipo da classe para usar o metodo
    return a + b
  }

  static divisao(a, b) { // metodo estatico -> não precisa criar um objeto do tipo da classe para usar o metodo
    return (b == 0) ? '[ERRO]: não divido por zero!' : (a / b) // operador ternario (if else em uma linha)
  }
}

var resSoma = Matematica.soma(1, 2)
var resDiv = Matematica.divisao(9, 3)
console.log(resSoma)
console.log(resDiv)