// sin immutable
import { combineReducers } from "redux";

//with immutable.js
// import { combineReducers } from "redux-immutable";
import { pokemonsReducer } from "./pokemons";
// import { uiReducer } from "./ui";

// const rootReducer = combineReducers({
//     data: pokemonsReducer,
//     ui: uiReducer
// })

// with redux toolkit
import dataReducer from '../slices/pokemonSlice'
import uiSliceReducer from '../slices/uiSlice'

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiSliceReducer
})


export default rootReducer;
