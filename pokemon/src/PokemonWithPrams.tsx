import React from 'react'
import { useParams } from 'react-router-dom';
import Pokemon from './pokemon/Pokemon';

export default function PokemonWithPrams() {
    let { pokemonName } = useParams();
  return (
   <>
    <Pokemon name={pokemonName} health={100} />
   </>
  )
}
