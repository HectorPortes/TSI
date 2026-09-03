import { Conta } from './Conta';
import { ContaCorrente } from './ContaCorrente';
const conta1 = new Conta(123, 'Aderbal');
conta1.imprimirExtrato();
conta1.depositar(500);
conta1.sacar(177);
conta1.imprimirExtrato();
const conta2 = new ContaCorrente(123, 'Tucunarelson', 100);
conta2.imprimirExtrato();
