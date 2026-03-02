// Criar vetores A e B de tamanho 5 cada, depois o vetor C que recebera os valores de A e B e terá que ser ordenado 
const prompt = require('prompt-sync')()

let A = [], B = [], C = []
for(let i = 0; i < 5; i++){
    let ns = Number(prompt('Digite o '+(i+1)+'º número de A: '))
    A[i] = ns   
}

for(let i = 0; i < 5; i++){
    let ns = Number(prompt('Digite o '+(i+1)+'º número de B: '))
    B[i] = ns
}

for(i = 0; i < 5; i++){
    C[i] = A[i]
}

for(i = 5; i < 10; i++){
    C[i] = B[i - 5]
}

let aux = 0
for(i = 0; i < C.length; i++){
    if(C[i] < C[i + 1]){
        aux = C[i]
        C[i] = C[i + 1]
        C[i + 1] = aux
        i = 0
    }
}
console.log(C)