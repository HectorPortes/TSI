import { log } from 'node:console';
import * as fs from 'node:fs';

const dados = 'Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';

// V1 - callback
// fs.writeFile('./arquivo.txt', dados, (erro) => {
//   if(erro != null){
//     console.log('Tem algo errado ai parsa!');
//   } else {
//     console.log('Arquivo 1 gerado com sucesso!');
//   }
// });

// V2 - callback hell
fs.writeFile('./arquivo2.txt', dados, (erro) => {
  if(erro != null){
    console.log('Tem algo errado ai parsa!');
  } else {
    console.log('Arquivo 2 gerado com sucesso!');
    fs.writeFile('./arquivo3.txt', dados, (erro) => {
      if(erro != null){
        console.log('Tem algo errado ai parsa');
      } else {
        console.log('Arquivo 3 gerado com sucesso!');
      }
    });
  }
});