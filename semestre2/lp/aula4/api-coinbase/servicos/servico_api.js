const API_URL = 'https://api.coinbase.com/v2/prices/BTC-BRL/buy';

// Função que busca na API e retorna o preço do Bitcoin em Reais
// async function getBitcoin() {}
export const getBitcoinPrice = async () => {
  const resposta = await fetch(API_URL);
  // const data = await resposta.json().data;
  const { data } = await resposta.json(); // atalho para mesma coisa da linha de cima
  const valorBitcoinReal = data.amount;
  return valorBitcoinReal;
}