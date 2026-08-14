class Conta { // Super Classe
  constructor(agencia, numero, cliente, saldo = 0){
    this.agencia = agencia
    this.numero = numero
    this.cliente = cliente
    this.saldo = saldo
  }
  
  depositar(valor) {
    if(valor > 0) {
      this.saldo += valor
    } else {
      console.log('[ERRO]: Informe valor positivo')
    }
  }

  sacar(valor) {
    if(valor > 0 && valor <= this.saldo) {
      this.saldo -= valor
    } else {
      console.log('[ERRO]: Informe valor menor ou igual ao saldo')
    }
  }

  imprimirExtrato() {
    console.log(`A conta de número ${this.numero} possui R$${this.saldo}`)
  }
}

// ContaCorrente desconta R$1.00 por extrato impresso
// ContaConrrente herda tudo de Conta   <- Herança
// ContaCorrente é filha de Conta       <- Herança
class ContaCorrente extends Conta { // Subclasse
  constructor(agencia, numero, cliente, saldo, taxa) {
    super(agencia, numero, cliente, saldo) // <- usando parte do constructor da mãe(super) e adicionando parte propria da classe
    this.taxa = taxa
  }

  imprimirExtrato() {
    this.saldo--
    console.log(`A conta de número ${this.numero} possui R$${this.saldo}`) // <- polimorfismo (modificar um metodo herdado para se adequar a classe)
  }
}

var contaTambaquilson = new ContaCorrente(100, 111, 'Tambaquilson', 100)
contaTambaquilson.imprimirExtrato()
contaTambaquilson.imprimirExtrato()
contaTambaquilson.imprimirExtrato()

console.log('-----------------------------||-----------------------------')

var contaTilabatisqueia = new Conta(100, 112, 'Tilabatisqueia', 100)
contaTilabatisqueia.imprimirExtrato()
contaTilabatisqueia.imprimirExtrato()
contaTilabatisqueia.imprimirExtrato()