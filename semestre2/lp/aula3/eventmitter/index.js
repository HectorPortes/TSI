import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

const funcao1 = () => {
  console.log('Ocorreu um evento!');
}

const funcao2 = () => {
  console.log('Ocorreu outro evento!');
}

// ------------------------------------------------------- //

// Registrando funcao1 e funcao2 para o eventoUm
eventEmitter.on('eventoUm', funcao1);
eventEmitter.on('eventoUm', funcao2);

// Emitindo/Chmando o evento 'eventoUm'
eventEmitter.emit('eventoUm');

// ------------------------------------------------------- //

// Removendo/Desvinculando a funcao1 do evento 'eventoUm'
eventEmitter.off('eventoUm', funcao1);
console.log('');
eventEmitter.emit('eventoUm');

// ------------------------------------------------------- //

// Evento unico, disparado somente uma vez
eventEmitter.once('eventoUnico', () => {
  console.log('Evento ùnica!');
});

// Só pra mostrar como faz com function normal
eventEmitter.once('eventoUnico2', function() {
  console.log('Evento ùnica!');
});

// Aciona o evento único e já remove seu listener
console.log('');
eventEmitter.emit('eventoUnico');
eventEmitter.emit('eventoUnico');

// ------------------------------------------------------- //

// Adicionando função com 1 parâmetro
const boasVindas = (nome, idade) => {
  console.log(`Seja bem vindo ${nome}.\nIdade: ${idade}`);
}

eventEmitter.on('msgBoasVindas' , boasVindas);

console.log('');

eventEmitter.emit('msgBoasVindas', 'Héctor', 19);

// ------------------------------------------------------- //