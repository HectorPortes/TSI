class Conta {
  constructor(agencia, numero, cliente, saldo){
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

var contaAderbal = new Conta('001', 101, 'Aderbal', 100)

contaAderbal.imprimirExtrato()

contaAderbal.depositar(100)
contaAderbal.imprimirExtrato()

contaAderbal.sacar(21)
contaAderbal.imprimirExtrato()
