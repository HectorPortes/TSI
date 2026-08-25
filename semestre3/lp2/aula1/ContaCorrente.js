import { Conta } from './Conta.js'

// ContaCorrente desconta R$1.00 por extrato impresso
// ContaConrrente herda tudo de Conta   <- Herança
// ContaCorrente é filha de Conta       <- Herança
export class ContaCorrente extends Conta { // Subclasse
  constructor(agencia, numero, cliente, saldo, taxa) {
    super(agencia, numero, cliente, saldo) // <- usando parte do constructor da mãe(super) e adicionando parte propria da classe
    this.taxa = taxa
  }

  imprimirExtrato() {
    this.saldo--
    console.log(`A conta de número ${this.numero} possui R$${this.saldo}`) // <- polimorfismo (modificar um metodo herdado para se adequar a classe)
  }
}