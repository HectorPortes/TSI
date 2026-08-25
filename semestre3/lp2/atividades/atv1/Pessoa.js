export class Pessoa {
  constructor(nome, email, telefone) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
  }

  saudacao() {
    console.log(`Olá, sou ${this.nome}\nEmail: ${this.email}\nTelefone: ${this.telefone}`)
  }
}