export class Conta {
  // Atributos
  readonly numero: number // torna o atributo somente de leitura, só poder ser visto o valor dentro dele, e para editar somente no constructor
  #saldo: number // torna o atributo como privado, só pode ser acessado diretamente por essa classe (this.#saldo) 
  public cliente: string // torna o atributo como publico, as classes filhas e outras podem acessar diretamente

  // encapsuladores - getters e setters || gets e sets (servem para deixar outras classes modificarem um atributo privado diretamente)
  get saldo() { // visualizado
    return this.#saldo
  }

  set saldo(valor: number) { // modificado
    this.#saldo = valor
  }

  // Modificadores de acesso: incidca o nivel de acesso dos atributos
  // private (#)  - somente a classe em que ele está pode manipular diretamente
  // protected - somente a superclasse (mãe) e subclasses (filhas) manipulam diretamente
  // public - pode ser manipulado diretamente de qualquer lugar

  constructor(numero: number, cliente: string, saldoInicial?: number) {
    this.numero = numero
    this.cliente = cliente
    this.#saldo = saldoInicial || 0
  }

  // Métodos
  depositar(valor: number): void {
    if(valor <= 0) {
      console.log('O valor do deposito deve ser positivo')
    } else {
      this.#saldo += valor
      console.log(`Depósito de R$${valor} realizado com sucesso`)
    }
  }

  sacar(valor: number): void {
    if(valor <= 0) {
      console.log('O valor do saque deve ser positivo')
      return
    }
    if(valor > this.#saldo) {
      console.log('Saldo insuficiente')
      return
    }
    this.#saldo -= valor
    console.log(`Saque de R$${valor} realizado com sucesso`)
  }

  imprimirExtrato(): void {
    console.log(`Saldo atual: R$${this.#saldo}`)
  }
}