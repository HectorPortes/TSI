import { Pessoa } from './Pessoa.js'
import { Estudante } from './Estudante.js'

let tambaquilson = new Pessoa('Tambaquilson', 'tambaquilson@peixes.com', '91234-5678')
tambaquilson.saudacao()

console.log('---||---')

let tucunarelson = new Estudante('Tucunarelson', 'tucunarelson@peixes.com', '98765-4321', '111')
tucunarelson.saudacao()