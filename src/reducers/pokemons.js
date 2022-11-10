import { fromJS, setIn, getIn, get } from "immutable";
import { SET_POKEMONS, SET_FAVORITE } from "../actions/types"

// const initialState = {
//     pokemons: [],
//     loading: false
// }

// export const pokemonsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_POKEMONS:
//             return { ...state, pokemons: action.payload.map(pokemon => ({
//                 ...pokemon,
//                 favorite: false
//             })) }
//             break;
//         case SET_FAVORITE:
//             const newPokemonList = [...state.pokemons];
//             const currentPokemonIndex = newPokemonList.findIndex(element => element.id === action.payload.id)
//             if (currentPokemonIndex < 0) return state;
//             newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
//             return { ...state, pokemons: newPokemonList }
//             break;
//         case SET_LOADING:
//             return { ...state, loading: action.payload }
//             break;
//         default:
//             return { ...state }
//             break;
//     }
// };

// implementation with immutable js
const initialState = fromJS({
    pokemons: []
})

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return setIn(state, ['pokemons'], fromJS(action.payload.map(item => ({
                ...item,
                favorite: false
            }))));
        case SET_FAVORITE:
            const currentPokemonIndex = get(state, 'pokemons').findIndex(
                (pokemon) => pokemon.get('id') === action.payload.id
            );

            if (currentPokemonIndex < 0) {
                return state;
            }

            const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);

            return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
        default:
            return state;
    }
};