import cron from 'node-cron';

const funcao = () => {
  let horarioAtual = new Date();
  console.log(`Tarefa executada ás ${horarioAtual}`);
}
// para executar a cada 5 segundos é */5, quando quer a cada horario com 5 segundos apenas 5
cron.schedule('5 * * * * *', funcao);

cron.schedule('*/5 * * * * *', () => {
  let horarioAtual = new Date();
  console.log(`Tarefa executada ás ${horarioAtual}`);
});