const Gatos = require('../model/gato.js');

exports.listarGatos = async (req, res) => {
  try {
    const gatos = await Gatos.find({});
    res.send(gatos);
  } catch (erro) {
    console.log(erro);
    res.send('[ERRO]: impossível listar gatos!');
  }
}


exports.adicionarGato = async (req, res) => {
  const novoGato = req.body;

  if(!novoGato.nome || !novoGato.idade || !novoGato.cor || !novoGato.humor || !novoGato.gordo) {
    res.send('[ERRO]: informar nome, idade, cor, humor e se é gordo!');
  } else {
    try {
      const gato = await Gatos.create(novoGato);
      res.send({ msg: '[SUCESSO]: gato cadastrado!', detalhes: gato });
    } catch (erro) {
      console.log(erro);
      res.send({ msg: '[ERRO]: no cadastro do gato!', detalhes: erro });
    }
  }
}

exports.removerGato = async (req, res) => {
  const gato = req.body;
  if(!gato.nome)
    return res.send({ msg: '[ERRO]: informar nome do gato!' });
  try {
    const gatoRemovido = await Gatos.findOneAndDelete({ nome: gato.nome });

    if(gatoRemovido == null) 
      res.send({msg: '[AVISO]: Gato não existe no Banco de Dados!'});
    else
      res.send({msg: '[SUCESSO]: Gato removido do Banco de Dados!'});
  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: Remover gato!', detalhes: erro });
  }
}

exports.editarGato = async (req, res) => {
  const gato = req.body;
  if(!gato.nome || !gato.idade)
    return res.send({ msg: '[ERRO]: informar nome e idade do gato!' });
  try {
    const gatoEditado = await Gatos.findOneAndUpdate(
      { nome: gato.nome },
      { idade: gato.idade }
    );

    if(gatoEditado == null) 
      res.send({msg: '[AVISO]: Gato não existe no Banco de Dados!'});
    else
      res.send({msg: '[SUCESSO]: Gato editado!', detalhes: gatoEditado});
  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: Editar gato!', detalhes: erro });
  }
}