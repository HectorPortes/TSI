// Exercício 7: Login Simples
// (Complexidade: Média) - Desenvolva um algoritmo que leia um usuário e uma senha. O acesso será permitido somente se o usuário for "admin" e a senha for "1234". Caso contrário, o programa deve informar "Acesso negado".
// Exemplo de Interação:
// Digite o usuário: admin
// Digite a senha: 1234
// Saída no Console:
// Acesso permitido.
// Digite o usuário: teste
// Digite a senha: 1111
// Saída no Console:
// Acesso negado.
const prompt = require('prompt-sync')()

let cargo, senha
cargo = prompt('Digite seu cargo: ')
senha = prompt('Digite sua senha: ')

// Resolvendo com if
if(cargo == 'admin' && senha == '1234'){
    console.log('Acesso permitido.')
} else {
    console.log('Acesso negado.')
}

// Resolvendo com switch case
switch (true) {
    case cargo == 'admin' && senha == '1234':
        console.log('Acesso permitido.')
        break
    default:
        console.log('Acesso negado.')
        break
}