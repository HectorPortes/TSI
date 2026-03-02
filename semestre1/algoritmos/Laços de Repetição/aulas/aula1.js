const prompt = require('prompt-sync')()

// caso o código trave ou queira encerrar o código aperte no terminal: ctrl + c ou ctrl + x

// -----------------------------------------------------------------

// While
    //let i = 0
    //while (i < 11) {
    //    console.log(i) 
    //    i++ 
    //    OU
    //    console.log(i++) 
    //}

// -----------------------------------------------------------------

// Do While
    // let i = 0
    //do {
    //    console.log(i)
    //    i++
    //    OU
    //    console.log(i++) 
    //} while (i < 11)

// -----------------------------------------------------------------

//For
    // for(let i = 0; i < 11; i ++){
    //     console.log(i);
    // }

// -----------------------------------------------------------------



// -----------------------------------------------------------------
// Escreva um algoritmo para imprimir os números de 1 (inclusive) a 100 (inclusive) em ordem crescente.
// Escrever um algoritmos que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 X N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.

    // ----------------------------------------------------------------- 
    // com for

        // for (let i = 0; i < 100; i++){
        //     tabuada = (i + 1) * (i + 1)
        //     console.log(i + 1, " x ", i + 1, " = ", tabuada)
        // }

        // -----------------------------------------------------------------

        // let numero = Number(prompt('Digite um número: '))
        // for(let y = 0; y <= 10; y++){
        //     tabuada = numero * y
        //     console.log(numero, " x ", y, " = ", tabuada)
        // }

        // -----------------------------------------------------------------

        // fazer a mesma coisa do enunciado anterior só que ao contrario
        // i = 100
        // for(i; i > 0; i--){
        //     tabuada = i * i
        //     console.log(i, " x ", i, " = ", tabuada)
        // }        

        // -----------------------------------------------------------------

        // let numero = Number(prompt('Digite um número: '))
        // for(let b = 10; b > -1; b--){
        //     tabuada = numero * b
        //     console.log(numero, " x ", b, " = ", tabuada)
        // }

    // -----------------------------------------------------------------
    
    // -----------------------------------------------------------------
    // com while

        // let n = 0
        // while (n < 100) {
        //     tabuada = (n + 1) * (n + 1)
        //     console.log(n + 1, " x ", n + 1, " = ", tabuada)
        //     n = n + 1
        // }

        // -----------------------------------------------------------------

        // let numero = Number(prompt('Digite um número: '))
        // let n = 1
        // while (n <= 10) {
        //     tabuada = numero * n
        //     console.log(numero, " x ", n, " = ", tabuada)
        //     n = n + 1
        // }

        // -----------------------------------------------------------------

        // fazer a mesma coisa do enunciado anterior só que ao contrario
        // let n = 100
        // while(n > 0){
        //     tabuada = n * n
        //     console.log(n, " x ", n, " = ", tabuada)
        //     n = n - 1
        // }

        // -----------------------------------------------------------------

        // let numero = Number(prompt('Digite um número: '))
        // let n = 10 // coloca até que número tu quer fazer a tabuada
        // while (n > 0) {
        //     tabuada = numero * n
        //     console.log(numero, " x ", n, " = ", tabuada)
        //     n = n - 1
        // }

        // -----------------------------------------------------------------

    // -----------------------------------------------------------------

// -----------------------------------------------------------------



// -----------------------------------------------------------------
//Escreva um algoritmo que leia um valor inicial de A e imprima a sequência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 x 4 x 3 x 1 = 120

    // -----------------------------------------------------------------
    // com while
        
        // começando do maior pro menor. Ex: 4! = (((4 * 3) * 2) * 1) / 4 * 3 -> 12 * 2 -> 24 * 1 -> 24

        // let nFat = Number(prompt("Digite um número: "))
        // let produto = 1
        // while (nFat > 1) {
        //     produto = produto * nFat
        //     nFat = nFat - 1
        // }
        // console.log(produto)

        // -----------------------------------------------------------------

        // começando do menor pro maior: Ex: 4! (4 * (3 * (2 * 1))) / 1 * 2 -> 2 * 3 -> 6 * 4 -> 24

        // let numero = Number(prompt("Digite um número: "))
        // let conta = 1
        // let aux = 1
        // while (aux <= numero) {
        //     conta = conta * aux
        //     aux = aux + 1
        //     console.log(conta)
        // }

        // -----------------------------------------------------------------

    // -----------------------------------------------------------------
    // com for 

        // começando do maior pro menor. Ex: 4! = (((4 * 3) * 2) * 1) / 4 * 3 -> 12 * 2 -> 24 * 1 -> 24

        // alt + z na linha de baixo. Fica mais facil de ler.
        // o i < aux pq se numero se diminuir o mesmo tamanho dele, ele chega a 0 e o resultado vai ser 0, pois sera: (ex: numero 4) conta = 24 * 0 -> conta = 0, talvez não tenha ficado muito claro mas se você colocar i <= aux vai sempre dar zero. Faça o teste, ou não se que sabe. E existe esse aux pois se fosse i < numero, o loop rodaria menos vezes por conta de o numero sempre estar diminuindo, ou seja o i alcançaria valor maior que o numero mais rapido e o loop encerraria.

        // let numero = Number(prompt("Digite um número: "))
        // let aux = numero
        // let conta = 1
        // for(let i = 0; i < aux; i ++){   
        // conta = conta * numero
        // numero = numero - 1
        //     console.log(conta)
        // }
        // para quebrar a linha de baixo clique nela e aperte: alt + z
        // o que está acontecendo é que conta = 1 e ex:numero = 4 -> conta = 1 * 4 -> conta = 4 * 3 -> conta = 12 * 2 -> conta = 24 * 1 -> conta = 24

        // -----------------------------------------------------------------

        // começando do menor pro maior: Ex: 4! (4 * (3 * (2 * 1))) / 1 * 2 -> 2 * 3 -> 6 * 4 -> 24

        // let numero = Number(prompt("Digite um número: "))
        // let aux = 1
        // let conta = 1
        // for(let i = 0; i < numero; i++){
        //     conta = conta * aux
        //     aux = aux + 1
        //     console.log(conta)
        // }
        // o que está acontecendo é que: (ex: 4!) conta = 1 * 1 -> conta = 1 * 2 -> conta = 2 * 3 -> 6 * 4 -> 24. Pois aux começou com 1 e vai adicionando 1 a cada loop sempre aumentando até atingir o tamanho do numero. E neste caso não é necessario fazer uma variavel para guardar o conteudo de numero porque não está mexendo nele igual no outro exemplo, ele continua intacto então é possivel fazer i < numero. E tambem não é possivel por i <= numero pois faria uma conta a mais do que a necessaria, seria assim: 1º loop = 1 * 1 -> 2º loop = 1 * 2 -> 3º = 2 * 3 -> 4º = 6 * 4 -> 5º loop = 24 * 5 -> 120, seria feito 5 loops e não 4 pois o i começa como 0 e para chegar ao tamanho 4 levaria 5 loops -> 1º loop: i = 0 -> 2º loop: i = 1 -> 3º loop: i = 2 -> 4º loop: i = 3 -> 5º loop: i = 4.  

        // -----------------------------------------------------------------

    // -----------------------------------------------------------------

// -----------------------------------------------------------------