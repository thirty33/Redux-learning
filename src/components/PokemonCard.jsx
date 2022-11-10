import React from 'react';
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta';
import StartButton from './StartButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

function PokemonCard({ pokemon }) {

    const dispatch = useDispatch();
    const typesString = pokemon.types.map(element => element.type.name).join(', ');

    const handleOnFavorite = (pokemon) => {
        dispatch(setFavorite(pokemon))
    }

    return (
        <Card
            style={{
                width: 250
            }}
            title={pokemon.name}
            cover={<img src={pokemon?.sprites?.front_default} alt={pokemon.name}></img>}
            extra={<StartButton isFavorite={pokemon.favorite} onClick={() => handleOnFavorite(pokemon)}/>}
        >
            <Meta description={typesString} />
        </Card>
    );
}

export default PokemonCard;