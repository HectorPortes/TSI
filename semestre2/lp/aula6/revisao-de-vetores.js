// criando um vetor/array vazio de tamanho 5
let array = new Array(5);
let array2 = new Array(0);

// mostrar todos os elementos/itens dentro do array
console.log(array);
console.log(array2);
// mostrar o valor do elemento/item dentro da posição tal
console.log(array[3]);

// armazenar um valor dentro da posição de um elemento/item no array
array[3] = 4;
console.log(array[3]);
console.log(array);

// criando um vetor com valores aos elementos/itens já definidos
let vetor = [0, 1, 2, 3, 4];
let vetor2 = new Array(0, 1, 2, 3, 4);
console.log(vetor[3]);
console.log(vetor);
console.log(vetor2[3]);
console.log(vetor2);

// tamanho do vetor
console.log(vetor.length);

// é possivel adicionar um elemento com valor em uma posição que não existe assim criando elementos até essa posição
// console.log(vetor[33] = 34)

// função/metodo para adicionar um elemento com valor na ultima posição
vetor2.push(5);
vetor2.push(6, 7);
console.log(vetor2);
// teste (é ele só adiciona no final, se tiver uma casa vazia, ele não vai armazenar o valor lá, e sim só no final)
// vetor2[8] = 7;
// vetor2.push(6);
// console.log(vetor2);

// função de remover o ultimo valor do vetor
vetor2.pop();
console.log(vetor2);

// função de remover o valor inicial do vetor
vetor2.shift();
console.log(vetor2);

// função de adicionar um valor no inicio do vetor
vetor2.unshift(0);
console.log(vetor2);

// criando novo vetor que usa uma função de juntar os vetores
let bixos1 = ['gato', 'cachorro'];
let bixos2 = ['papagaio', 'baleia'];
let bixos = bixos1.concat(bixos2);
console.log(bixos);

// função de ordenação alfabetica, e de menor pra maior
bixos.sort();
console.log(bixos);
let vet = [4, 3, 2, 1, 0]
vet.sort();
console.log(vet);

// função de inverter os valores do vetor
bixos.reverse();
vet.reverse();
console.log(bixos);
console.log(vet);

// da para usar o .length do vetor para percorrer o vetor inteiro no for
for (let i = 0; i < bixos.length; i++){
  console.log(bixos[i]);
}

// igual o for mas sem se importar com o indice, apenas varre o array
for (const bixo of bixos) {
  console.log(bixo)
}