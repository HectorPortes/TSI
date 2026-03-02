const prompt = require('prompt-sync')()

// jeitos de criar um array
    // let notas = []
    // notas[0] = 10
    // notas[1] = 7.5
    // notas[5] = 5
    // console.log(notas)

    // let notas2 = [10, 7.5, 5]
    // console.log(notas2)

    // let media = (notas2[0] + notas2[1] + notas2[2]) / 3
    // console.log(media)
//

// estilo de atividade
let notas = []
let qtdAlunos

qtdAlunos = Number(prompt("Entre com a quantidade de alunos: "))

for(let i = 0; i < qtdAlunos; i++){
    notas[i] = Number(prompt("Entre com a nota: "))
}

console.log(notas)

for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}
//

// coisas retardadas que eu fiz só
    // let n_array = [10, 8.5, 7]
    // for(let i = 0; i < n_array.length; i++){
    //     n_array[i] = n_array[i] * 10
    // }
    // console.log(n_array)

    // let nomes = ['Rene', 'George', 'Hector']
    // for(let y = 0; y < nomes.length; y++){
    //     if(nomes[y] === 'Rene' || nomes[y] === 'George'){
    //         console.log(nomes[y], ' é viado!')
    //     } else {
    //         console.log(nomes[y], ' super lindo!')
    //     }
    // }
//