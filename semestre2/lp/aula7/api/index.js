const express = require('express');
const api = express();
const porta = 3000;
// ip de loopback (maquina): 127.0.0.1:3000 ou localhost:3000
// protocolo de comunicação http://
// http://127.0.0.1:3000 ou http://localhost:3000

// CRUD de pessoa
// Create - criar/cadastrar pessoa (POST)
// Read - ler/puxar pessoa (GET)
// Update - atualizar dados de uma pessoa (PUT/PATCH)
// Delete - remover uma pessoa (DELETE)

// executar com nomedon - npx nodemon (nome-arquivo)

//                  req       , res
api.get('/status', (requisicao, resposta) => {
  resposta.send('API Online!');
});

// inicializador da api
api.listen(porta, () => {
  console.log(`API rodando na porta ${porta}`);
});