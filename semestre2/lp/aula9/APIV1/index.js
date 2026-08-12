// npm i biblioteca -D -> para baixar a biblioteca como dev dependencie
const express = require('express');
const api = express();
const porta = 3000;
api.use(express.json()) // para poder usar o req.body

const mongoose = require('mongoose'); // banco de dados
require('dotenv').config();
const URL_BD = process.env.URL_BD || '';
mongoose.connect(URL_BD);

mongoose.connection.on('connected', () => {
  console.log('API conectada ao BD!');
});

mongoose.connection.on('disconnected', () => {
  console.log('API desconectada do BD!');
});

mongoose.connection.on('error', (erro) => {
  console.log('ERRO: API não conectada ao BD!');
  console.log(erro);
});

const produtosController = require('./controller/produto.js');
const usuarioController = require('./controller/usuario.js');
const autenticacao = require('./middlewares/autenticacao.js');

api.post('/usuario', usuarioController.registrarUsuario);
api.post('/logar', autenticacao.logar)

api.get('/produtos', autenticacao.autenticar, produtosController.listarProdutos);
api.post('/produto', autenticacao.autenticar, produtosController.adicionarProduto);
api.delete('/produto', autenticacao.autenticar, produtosController.removerProduto);
api.put('/produto', autenticacao.autenticar, produtosController.editarProduto);

api.listen(porta, () => {
  console.log('API rodando na porta ', porta);
});