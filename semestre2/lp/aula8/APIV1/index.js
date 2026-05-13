// npm i biblioteca -D -> para baixar a biblioteca como dev dependencie
const express = require('express');
const api = express();
const porta = 3000;
api.use(express.json()) // para poder usar o req.body

const mongoose = require('mongoose'); // banco de dados

mongoose.connect('mongodb+srv://hectorpso:Portes123@cluster0.dtbsv4d.mongodb.net/?appName=Cluster0');

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

api.get('/produtos', produtosController.listarProdutos);
api.post('/produto', produtosController.adicionarProduto);


api.listen(porta, () => {
  console.log('API rodando na porta ', porta);
});