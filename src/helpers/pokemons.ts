import { API_DOMAIN, POKEMON_URL } from 'src/config/constants';
import { api } from './api';

export const getPokemons = async (name: string) => {
  const response = await api.get(
    `${API_DOMAIN}${POKEMON_URL}?offset=0&limit=1118`
  );
  if (response.data)
    return response.data.results.filter((responseData: any) =>
      responseData.name.includes(name)
    );
};

export const getPokemon = async (name: string) => {
  const response = await api.get(`${API_DOMAIN}${POKEMON_URL}${name}`);
  return response.data;
};
