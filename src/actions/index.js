import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types"
import { getPokemonDetails } from "../api";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})
export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})

// action creator with Thunk
export const getPokemonsWithDetails = (list = []) => async (dispatch) => {

    // const resultsDetails = await Promise.all(
    //     list.map(item => getPokemonDetails(item))
    // );

    // dispatch(setPokemons(resultsDetails));
    return Promise.all(
        list.map(item => getPokemonDetails(item))
    ).then((response) => {
        console.log('item response')
        return dispatch(setPokemons(response));
    })

}