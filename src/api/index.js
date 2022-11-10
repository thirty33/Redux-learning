import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const getPokemons = async () => {
    const { data, status } = await axios.get(API);
    return data;
}

const getPokemonDetails = async (pokemon) => {
    const { data, status } = await axios.get(pokemon.url);
    return data;
}

export { getPokemons, getPokemonDetails }