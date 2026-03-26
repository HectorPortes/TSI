import { ehPar } from "./matematica.js";
import { ehParV2 } from "./matematica.js";

// V1 do ehPar
console.log(ehPar(3));

// V2 do ehPar (Promise)
ehParV2(15)
.then((resultado) => { // será acionado caso a Promessa seja "resolved"
  console.log("Promessa resolvida: ", resultado);
})
.catch((erro) => { // será acionado caso a Promessa seja "rejected"
  console.log("Promessa rejeitada: ", erro);
})