const API_URL = 'https://brasilapi.com.br/api/cep/v1/79200000';

export const getCep = async () => {
  const resposta = await fetch(API_URL);
  const {cep} = await resposta.json();
  return cep;
}

export const getState = async () => {
  const resposta = await fetch(API_URL);
  const {state} = await resposta.json();
  return state;
}

export const getCity = async () => {
  const resposta = await fetch(API_URL);
  const {city} = await resposta.json();
  return city;
}