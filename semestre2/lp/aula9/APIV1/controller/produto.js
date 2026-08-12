const Produtos = require('../model/produto.js');

exports.listarProdutos = async (req, res) => {
  try { // tentar
    const produtos = await Produtos.find({}); // = SELECT * FROM produtos. Busca todos produtos que estiverem vazios
    // {nome:'Arroz'} = SELECT * FROM produtos WHERE nome LIKE 'Arroz'.
    res.send(produtos);
  } catch (erro) { // capturar
    console.log(erro);
    res.send('[ERRO]: impossível listar produtos!');
  }
}

exports.adicionarProduto = async (req, res) => {
  // req.body OU req.params OU req.query
  const novoProduto = req.body;
  if(!novoProduto.nome || !novoProduto.preco) {
    res.send('[ERRO]: informar nome e preço!');
  } else {
    try {
      const protudo = await Produtos.create(novoProduto);
      res.send({ msg: '[SUCESSO]: produto cadastrado!', detalhes: protudo });
    } catch (erro) {
      console.log(erro);
      res.send({ msg: '[ERRO]: no cadastro de produto', detalhes: erro });
    }
  }
}

exports.removerProduto = async (req, res) => {
  const produto = req.body;
  if(!produto.nome){
    return res.send({ msg: '[ERRO]: informar nome!' });
  }
  try {
    const produtoRemovido = await Produtos.findOneAndDelete({ nome: produto.nome });
    if(produtoRemovido == null){
      res.send({ msg: '[AVISO]: Produto não existe no BD!' });
    } else {
      res.send({ msg: '[SUCESSO]: Produto removido do BD!' });
    }
  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: Remover produto!', detalhes: erro });
  }
}

exports.editarProduto = async (req, res) => {
  const produto = req.body;
  if(!produto.nome || !produto.preco){
    return res.send({ msg: '[ERRO]: informar nome e preço!' });
  }
  try {
    const produtoEditado = await Produtos.findOneAndUpdate(
      { nome: produto.nome },
      { preco: produto.preco }
    );
    if(produtoEditado == null){
      res.send({ msg: '[AVISO]: Produto não existe no BD!' });
    } else {
      res.send({ msg: '[SUCESSO]: Produto editado no BD!', detalhes: produtoEditado });
    }
  } catch (erro) {
    console.log(erro);
    res.send({ msg: '[ERRO]: Editar produto!', detalhes: erro });
  }
}