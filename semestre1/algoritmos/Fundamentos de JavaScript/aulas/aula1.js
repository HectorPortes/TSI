// para executar um arquivo caso o visual studio não tenha coderuner instalado
// aperte ctrl + " ou la em cima nos ... -> terminal -> novo terminal
// exemplo como vai estar: C:\Users\aluno\Documents\sl> se não estiver no local em que se seus arquivos se encontram faça o seguinte
    // de um clique direito em cima do nome do seu arquivo e copiar o caminho ou use o atalho shift + alt + c
    // abra o terminal como já ensinado e escreva: cd caminhoCopiado 
    // exemplo C:\Users\aluno\Documents\HPSO-T\a1\aula1.js e tire o nome do arquivo tipo aqui o aula1.js deixe apenas C:\Users\aluno\Documents\HPSO-T\a1 por exemplo
// para executar o arquivo que você quer basta escrever no terminal: node nome_arquivo

console.log("Hellow World") // literal = imultavel = não muda | a mensagem sempre será igual

// variavel 3 tipos: 
    // let é mais local -> mais usado, menos chance de dar ruim
    // var é mais global
    // const armazena valores que não ira mudar

let nome = "Sabrina Sato"
// forma errada: let nome completo | não pode pq tem espaço a maneira certo seria: let nomeCompleto ou nome_completo | Faça da maneira que lhe achar melhor
let nome_completo = "Sabrina Sato"
let numero = 3
console.log(nome)
console.log(nome_completo)
console.log(numero)
// quando se cria uma variavel e não colaca valor nela ela se torna undefined (indefinida)
let ai
console.log(ai)
// O valor das variaveis são sobrepostos ou seja se você mudar o valor da variavel o antigo valor é perdido
ai = "mama mia"
console.log(ai)
// Porém os codigos são lidos sequencialmente ou seja de cima pra baixo em sequencia
// o valor que será lido na linha 25 será undefined pq a variavel não tinha sido mudada ali, mas apartir da mudança o valor antigo se perde
// para criar varias variaveis de uma vez
let a, aa, aaa
a = 1, aa = 2, aaa = 3
console.log(a, aa, aaa)

// valores matematicos
// soma = + porem tem outro uso de concatenação exemplo onde se tem 2 textos "ai " e "minha vuaida" se usar um + no meio dos textos juntara os textos
let pi, po, ca
pi = "pi", po = "po", ca="ca"
let pipoca = pi + po + ca
console.log(pipoca)
// subtração = -
// divisão = *
// multiplicação = /
// resto = %
// potencia = **
// para representar numeros quebrados não se usa , e sim . por exemplo 10.5 que nós seres mamacos lemos 10,5 mas a maquina não

// valores de acordo com a leitura do pc
// "texto" é uma string
// 10.5 é um float (numero quebrado)
// 10 é um int (numero inteiro)
// True ou False é um boolean
// se você colocar o numero "10" assim ele é uma string e não um int ou seja não é possivel fazer uma soma de 10 + "10" ele estará concatenando os valores
let oO
oO = "10" + 10
console.log(oO)
console.log(typeof(oO))
// se usar um numero só que em formato de strinf e um numero em formato de int e usar qualquer uma das outras operações matematicas sem ser + dará certo
// mas é bom que sempre siga o mesmo valor
oO = "15" - 10
console.log(oO)
console.log(typeof(oO))
// typeof() serve para ver que tipo de valor é a variavel

// calculo de area
let Pi, raio, area
Pi = 3.14, raio = 10
area = Pi * raio * raio
console.log(area)

// o calculo funciona igual na matematica normal se houver () ele calculara o que está em () primeiro se houver * ele calculara o * e depois fará o restante
let exemplo = (10 + 10) - 10 + 10 * 2
console.log(exemplo)

// leitura de dados no teclado
// npm install prompt-sync ou npm i prompt-sync
const prompt = require('prompt-sync')()

nome = prompt('Digite seu nome: ')
numero = Number(prompt('Digite um numero: ')) // Number() transforma o valor em numero



