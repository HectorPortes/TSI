const validar = () => {
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let nascimento = Number(document.getElementById('nascimento').value) // pegando o valor de nascimento e garantindo que é só numeros
  if (!nome || !email){ // verificando se todos os campos estão preenchidos
    return alert("Inserir os dados em todos os campos.") // se não, avisa que tem que preencher tudo
  } else if(!nascimento){ // se nascimento não estiver preenchido
    if(isNaN(nascimento)){ // se no nascimento tiver letras
      return alert("Não pode conter letras em nascimento.") // avisa que não pode
    }
    return alert("Inserir os dados em todos os campos.") // alerta que está vazio
  } else { // se todos estiverem preenchidos, dai começa as validações

    // validações de nome
    nome = nome.trim() // tirando os espaços do inicio e fim se existirem
    let numNome = nome.search(/[0-9+]/g) // verificando se existe algum número
    if(numNome != -1){ // se existir numero
      return alert("Não pode conter numeros no nome.") // avisa que não pode haver numeros no campo de nome
    }
    // validações de nome

    // validações de email
    email = email.trim() // tirando os espaços do inicio e fim
    let arroEmail = email.search("@") // verificando se existe arroba
    if(arroEmail === -1){ // se não existir arroba
      return alert("Email não contem @.") // fala que não existe
    } else if(arroEmail === 0){ // verificando se o @ é o primeiro caracter
      return alert("O email deve conter no minimo 1 caracter antes do @.") // da o aviso
    } else if(email.length - 1 === arroEmail){ // verifica se depois do arroba existe algo
      return alert("Não existe texto depois do @.") // fala que não existe
    }
    // validações de email

    // validações de data
    nascimento = String(nascimento) // transformando o nascimento em string para que possa usar funções de string
    if(nascimento.length != 8){ // vai avisar se não tiver o minimo de numeros na data
      return alert("Nascimento deve conter 8 numeros.")
    }
    let f1 = nascimento.slice(0,2) // variavel que pega os primeiros 2 numeros de data. ex: 00112222 -> 00
    let f2 = nascimento.slice(2,4) // variavel que pega os numeros apartir do 3º até o 4º de data. ex: 00112222 -> 11
    let f3 = nascimento.slice(4) // variavel que pega os todos os numeros depois do 4º de data. ex: 00112222 -> 2222
    nascimento = `${f1}/${f2}/${f3}` // substitui a data antiga pela formatada, onde junta as variaveis com barras
    // validações de data

    return alert(`Nome: ${nome}.\nEmail: ${email}.\nData de Nascimento: ${nascimento}.`) // retorna todos os valores já validados
  }
}