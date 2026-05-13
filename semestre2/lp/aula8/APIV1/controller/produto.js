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
  const novoProduto = req.body;
  if(!novoProduto.nome || !novoProduto.preco) {
    res.send('[ERRO]: informar nome e preço!');
  } else {
    try {
      const protudo = await Produtos.create(novoProduto);
      res.send({ msg: '[SUCESSO]: produto cadastrado!', detalhes: produto });
    } catch (erro) {
      console.log(erro);
      res.send({ msg: '[ERRO]: no cadastro de produto', detalhes: erro })
    }
  }
}