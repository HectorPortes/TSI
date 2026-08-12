const express = require('express');
const api = express();
const porta = 3000;
api.use(express.json());
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hectorpso:Portes123@cluster0.dtbsv4d.mongodb.net/?appName=Cluster0');

mongoose.connection.on('connected', () => {
    console.log('API conectada ao BD!');
});
mongoose.connection.on('disconnected', () => {
    console.log('API desconectada do BD!');
});
mongoose.connection.on('error', (erro) => {
    console.log('[ERRO]: API não conectada ao BD!');
    console.log(erro);
});

const gatosController = require('./controller/gato.js');

api.get('/gatos', gatosController.listarGatos);
api.post('/gato', gatosController.adicionarGato);
api.delete('/gato', gatosController.removerGato);
api.put('/gato', gatosController.editarGato);



api.listen(porta, () => {
    console.log('API rodando na porta ', porta);
})