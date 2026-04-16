const express = require('express');
const api = express();
api.use(express.json())
const porta = 3000;
// Ip de loopback (maquina): 127.0.0.1:3000 ou localhost:3000
// Protocolo de comunicação http://
// http://127.0.0.1:3000 ou http://localhost:3000

// CRUD de pessoa
// Create - criar/cadastrar pessoa (POST)
// Read - ler/puxar pessoa (GET)
// Update - atualizar dados de uma pessoa (PUT/PATCH)
  // PUT: substitui todos os dados
  // PATCH: substitui dados especificos
// Delete - remover uma pessoa (DELETE)

// Simulando um banco de dados
const pessoas = [
  { nome: 'Argélio', idade: 78 },
  { nome: 'Ronaldo', idade: 35 },
  { nome: 'Kleber', idade: 23 }
];

// ---------------------------------------------------------------------------
// CRUD Pessoas

// Read
api.get('/pessoas', (req, res) => {
  res.send(pessoas);
});

// Create
api.post('/pessoa', (req, res) => {
  // Capturando dados enviados na requisição
  const novaPessoa = req.body;
  // Verificadando se foram enviados "nome" e "idade"
  if(!novaPessoa.nome || !novaPessoa.idade){ // Se não mandou novaPessoa.nome ou novaPessoa.idade 
    return res.send('[ERRO]: informar nome e idade!');
  }
  // Adicionando a pessoa no vetor
  pessoas.push(novaPessoa);
  return res.send('[SUCESSO]: pessoa cadastrada!');
});

// Update
api.put('/pessoa', (req, res) => {
  const attPessoa = req.body;
  if(!attPessoa.id || !attPessoa.nome || !attPessoa.idade){
    return res.send('[ERROR]: informar nome, idade e ID!');
  }
  let indice = attPessoa.id
  delete attPessoa.id
  pessoas[indice] = attPessoa
  return res.send('[SUCESSO]: pessoa editada!');
});

// Delete
api.delete('/pessoa', (req, res) => {
  const pessoaDeletar = req.body;
  // Simulando que as pessoas tem ID no "BD" (vetor pessoas)
  if(!pessoaDeletar.id){
    return res.send('[ERRO]: informar ID!');
  }
  // Removendo do vetor pessoas do índice passado como ID
  pessoas.splice(pessoaDeletar.id, 1);
  return res.send('[SUCESSO]: pessoa removida!');
});
// ---------------------------------------------------------------------------

// Executar com nomedon - npx nodemon (nome-arquivo)
//                  req       , res
api.get('/status', (requisicao, resposta) => {
  resposta.send('API Online!');
});

// inicializador da api
api.listen(porta, () => {
  console.log(`API rodando na porta ${porta}`);
});