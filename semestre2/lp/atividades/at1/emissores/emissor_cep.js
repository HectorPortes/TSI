import { EventEmitter } from 'events';
import cron from 'node-cron';
import { getCep } from '../servicos/servicos_api.js';
import { getState } from '../servicos/servicos_api.js';
import { getCity } from '../servicos/servicos_api.js';
export const emissorEventos = new EventEmitter();

// A cada 10 segundos
const periodo = '*/10 * * * * *';

cron.schedule(periodo, async () => {
  const cep = await getCep();
  const estado = await getState();
  const cidade = await getCity();
  const valores = `${cep}\n${estado}\n${cidade}`
  emissorEventos.emit('valores', valores);
});