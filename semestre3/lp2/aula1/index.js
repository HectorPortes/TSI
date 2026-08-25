import { Conta } from './Conta.js'
import { ContaCorrente } from './ContaCorrente.js'

var contaTambaquilson = new ContaCorrente(100, 111, 'Tambaquilson', 100)
contaTambaquilson.imprimirExtrato()
contaTambaquilson.imprimirExtrato()
contaTambaquilson.imprimirExtrato()

console.log('-----------------------------||-----------------------------')

var contaTilabatisqueia = new Conta(100, 112, 'Tilabatisqueia', 100)
contaTilabatisqueia.imprimirExtrato()
contaTilabatisqueia.imprimirExtrato()
contaTilabatisqueia.imprimirExtrato()