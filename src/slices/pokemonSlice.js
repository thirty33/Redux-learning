// using redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetails } from "../api";

import { setLoading } from './uiSlice'

const initialState = {
    pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        //dispatch loader
        dispatch(setLoading(true))
        //fetch
        const { results } = await getPokemons();
        const pokemonsDetailed = await Promise.all(
            results.map(item => getPokemonDetails(item))
        )
        dispatch(setPokemons(pokemonsDetailed))
        //dispatch loader
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            // 'data/setPokemon'
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => pokemon.id === action.payload.id
            );

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }

        }
    }
})

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer; 