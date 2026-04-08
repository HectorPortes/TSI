import { emissorEventos } from "./emissores/emissor_cep.js";

emissorEventos.on('valores', (valores) => {
  console.log(valores);
});