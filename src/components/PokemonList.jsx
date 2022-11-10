import React from 'react';
import PokemonCard from './PokemonCard';
import './pokemonList.css';

function PokemonList({ pokemons }) {
    return (
        <div className='PokemonList'>
            {pokemons.map((pokemon, index) => (
                <PokemonCard pokemon={pokemon} key={index}/>
            ))}
        </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList;