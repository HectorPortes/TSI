function validar(e) {
    e.preventDefault()
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefoneString = document.getElementById("telefone").value
    let telefone = Number(document.getElementById("telefone").value)
    let nascimentoString = document.getElementById("nascimento").value
    let nascimento = Number(document.getElementById("nascimento").value)
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let profissao = document.getElementById("profissao").value

    // Validando se todos os campos estão preenchidos
    if(!nome || !email || !cidade || !estado || !profissao){
        return alert("É nescessario preencher todos os campos do formulario")
    } else if(!telefone) {
        if(isNaN(telefone)){
            return alert("Telefone deve conter apenas numeros")
        }
        return alert("É nescessario preencher todos os campos do formulario")
    } else if(!nascimento) {
        if(isNaN(nascimento)){
            return alert("Data de nascimento deve conter apenas numeros")
        }
        return alert("É nescessario preencher todos os campos do formulario")
    } else {
        // Validando Nome
        nome = nome.trim()
        let numNome = nome.search(/[0-9+]/g)
        if(numNome != -1){
            return alert("Existe número no seu nome.")
        }
    
        // Validando Email
        let arroEmail = email.search("@")
        let ponEmail = email.search(".com")
        if(arroEmail === -1){
            return alert("Email invalido, sem @")
        } else if(arroEmail === 0) {
            return alert("Email invalido, deve haver ao menos 1 digito antes do @")
        } else if(arroEmail === email.length - 1) {
            return alert("Email invalido, deve haver algo após o @")
        } else if(ponEmail === -1) {
            return alert("Email invalido, não existe .com")
        } else if(arroEmail + 4 > ponEmail) {
            return alert("Email invalido, .com deve vir apos o @ e algum email, no minimo 3 digitos apos o @")
        }

        // Validando Telefone
        if(telefoneString.length < 11){
            return alert("Telefone deve conter 11 digitos")
        }

        // Validando Nascimento
        let dia = nascimentoString.slice(0,2)
        let mes = nascimentoString.slice(2,4)
        let ano = nascimentoString.slice(4)
        dia = Number(dia)
        mes = Number(mes)
        ano = Number(ano)
        let nasReal = new Date(ano, mes - 1, dia)
        let dataAtual = new Date()
        let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outrubro", "novembro", "dezembro"]
        if(nascimentoString.length < 8) {
            return alert("Data de Nascimento deve conter 8 digitos")
        } else if(nasReal.getDate() !== dia) {
            return alert("Dia da Data de Nascimento invalido")
        } else if(nasReal.getMonth() !== mes - 1) {
            return alert("Mes da Data de Nascimento invalido")
        } else if(dataAtual.getFullYear() < ano){
            return alert("Ano da Data de Nascimento invalido")
        } else if(dataAtual.getFullYear() === ano) {
            if(dataAtual.getMonth() < mes){
                return alert(`Mes invalido, ja que estamos em ${meses[dataAtual.getMonth()]} de ${dataAtual.getFullYear()}, este mes é futuro`)
            } else if(dataAtual.getDate() < dia){
                return alert(`Dia invalido, ja que estamos no dia ${dataAtual.getDate()} de ${meses[dataAtual.getMonth()]} de ${dataAtual.getFullYear()}, este dia é futuro`)
            }
        }
        nascimentoString = `${nascimentoString.slice(0,2)}/${nascimentoString.slice(2,4)}/${nascimentoString.slice(4)}`

        // Validando Cidade
        cidade = cidade.trim()
        let numCidade = cidade.search(/[0-9+]/g)
        if(numCidade != -1) {
            return alert("Cidade não pode conter numeros")
        }

        // Validando Estado
        estado = estado.trim()
        let numEstado = estado.search(/[0-9+]/g)
        if(numEstado != -1) {
            return alert("Estado não pode conter numeros")
        }

        // Validando Profissão
        profissao = profissao.trim()
        let numProfissao = profissao.search(/[0-9+]/g)
        if(numProfissao != -1) {
            return alert("Profissão não pode conter numeros")
        }

        return alert(`Nome Completo: ${nome}.\nEmail: ${email}.\nTelefone: ${telefone}.\nData de Nascimento: ${nascimentoString}.\nCidade: ${cidade}.\nEstado: ${estado}.\nProfissão: ${profissao}.`),
        document.getElementById("mudar").innerHTML=`Meu nome é ${nome}, nasci em ${nascimentoString} portanto tenho ${Math.abs(dataAtual.getFullYear() - ano)}, moro no estado ${estado}, na cidade ${cidade} e trabalho como ${profissao}.<br><br>Meios de contato:<br>Email: ${email}.<br>Telefone: ${telefone}.<br>Sabia que a potência 3³ é ${Math.pow(3, 3)}?`
    }
}