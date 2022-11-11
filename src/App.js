import { useEffect, useState } from 'react';
import { get, getIn } from "immutable";
import './App.css';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg'
import { getPokemons, getPokemonDetails } from './api/index';

//redux
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';

// import { setPokemons as setPokemonsActions } from './actions/index'

import { setPokemons, getPokemonsWithDetails, setLoading } from './actions/index'

//with redux toolkit
import { fetchPokemonsWithDetails } from './slices/pokemonSlice';

// function App() {
function App() {
  // function App({ pokemons, setPokemons}) {
  // const [pokemons, setPokemonns] = useState([]);

  //plain object
  // const pokemons = useSelector(state => state.pokemons)
  // const loading = useSelector(state => state.loading)

  // with immutable.js
  // const pokemons = useSelector(state => get(state, 'pokemons')).toJS();
  // const loading = useSelector((state) => get(state, 'loading'));

  // with immutable.js and combine reducers
  // const pokemons = useSelector(state => getIn(state, ['data', 'pokemons'], shallowEqual)).toJS();
  // const loading = useSelector((state) => getIn(state, ['ui', 'loading']));

  // with redux toolkit
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const loading = useSelector((state) => state.ui.loading);
  // const loading = false;

  const dispatch = useDispatch()

  // useEffect(() => {
  //   const fetchPokemons = async () => {

  //     dispatch(setLoading(true))
  //     const { results } = await getPokemons();

  //     // const resultsDetails = await Promise.all(
  //     //   results.map(pokemon => getPokemonDetails(pokemon))
  //     // );
  //     // setPokemons(results);
  //     // dispatch(setPokemons(results))
  //     // dispatch(setPokemons(resultsDetails));

  //     //with thunk to asyncronous actions
  //     dispatch(getPokemonsWithDetails(results)).then(() => {
  //       console.log('finally')
  //       dispatch(setLoading(false))
  //     })
  //   }

  //   fetchPokemons();

  // }, []);

  // with redux toolkit
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt="poke" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading && (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      )}
      {!loading && (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) =>  dispatch(setPokemonsActions(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
