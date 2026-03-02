let prompt = require('prompt-sync')()
let idade = Number(prompt('Digite sua idade: '))
let genero = prompt('Mulher ou Homem: ')

if(idade <= 17  && idade >= 16) {
    console.log('Já pode votar antecipadamente em.')
    if(genero == 'Homem') {
        console.log('Bonito.')
    } else {
        console.log('Bonita.')
    }
} else if(idade >= 18) {
    console.log('Tu já é obrigado a votar meu nobre.')
    if(genero == 'Homem') {
        console.log('Gostoso.')
    } else {
        console.log('Gostosa. Com todo respeito.')
    }
} else {
    console.log('Ta livre ainda, aguarde.')
    if(genero == 'Homem') {
        console.log('Legal.')
    } else {
        console.log('Legal, massa, bem loko.');
    }
}

console.log('Agora desista dos seus sonhos e morra.')