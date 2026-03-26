// ehPar
export const ehPar = (numero) => {
  // V1 - Noob
  // if (numero % 2 == 0){
  //   return true;
  // } else {
  //   return false;
  // }

  // V2 - Mais avançada (operador ternario)
  // return (numero % 2 == 0) ? true : false;

  // V3 - Mais simplificado, porem só funciona pq já retorna um booleano, se não, use V2
  return numero  % 2 == 0;
}

// ehParV2
// export const ehParV2 = (numero) => {
//   return new Promise((resolver, rejeitar) => {
//     if (isNaN(numero)) {
//       rejeitar('[ERRO]: Número Inválido');
//     } else {
//       resolver(numero % 2 == 0);
//     }
//   });
// }
// usando operador ternario
export const ehParV2 = (numero) => {
  return new Promise((resolver, rejeitar) => {
    (isNaN(numero)) ? rejeitar('[ERRO]: Número Inválido') : resolver(numero % 2 == 0);
  });
}

// ehParV3
const URL_API = "https://api.isevenapi.xyz/api/iseven/";
export const ehParV3 = (numero) => {
  return new Promise((resolver, rejeitar) => {
    (isNaN(numero)) ? rejeitar("[ERRO]: Número inválido") : resolver(numero % 2 == 0);
  });
}