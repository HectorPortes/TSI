import * as fs from 'node:fs/promises';
const dados = 'Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto';

// fs.writeFile('./arquivo1.txt', dados).then().catch()
fs.writeFile('./arquivo1.txt', dados)
.then(() => {
  console.log('Arquivo 1 gerado com sucesso!');
  return fs.writeFile('./arquivo2.txt', dados);
})
.then(() => {
  console.log('Arquivo 2 gravado com sucesso!');
})
.catch((erro) => {
  console.log('Erro ao gravar arquivo!');
  console.log(erro);
}); // só é um catch para os dois 