import { Pessoa } from './Pessoa.js'

export class Estudante extends Pessoa {
  constructor(nome, email, telefone, RA) {
    super(nome, email, telefone)
    this.RA = RA
  }

  saudacao() {
    console.log(`Olá, sou ${this.nome}\nRA: ${this.RA}\nEmail: ${this.email}\nTelefone: ${this.telefone}`)
  }
}