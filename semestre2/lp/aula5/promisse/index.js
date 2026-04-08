import { ehPar } from "./matematica.js";
import { ehParV2 } from "./matematica.js";
import { ehParV3 } from "./matematica.js";

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

// V3 do ehPar (Promisse) 
const executar = async () => {
  await ehParV3(4)
    .then((res) => console.log("Promessa resolvida! " + res))
    .catch((erro) => console.log("Promessa rejeitada! " + erro));
  
  await ehParV3("oi")
    .then((res) => console.log("Promessa resolvida! " + res))
    .catch((erro) => console.log("Promessa rejeitada! " + erro));
}

executar();

// IIFE (Immediately Invoked Function Expression)
; (async () => {
  await ehParV3(4)
    .then((res) => console.log("Promessa resolvida! " + res))
    .catch((erro) => console.log("Promessa rejeitada! " + erro));
  
  await ehParV3("oi")
    .then((res) => console.log("Promessa resolvida! " + res))
    .catch((erro) => console.log("Promessa rejeitada! " + erro));
})();