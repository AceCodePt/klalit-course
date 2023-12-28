import { useEffect, useState } from "react"
import { PokemonType } from "./types"
import PokemonAbility from "./PokemonAbility";

function Pokemon(props: {name: string}) {
    const [pokemon, setPokemon] = useState<PokemonType | null>(null)
    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then(async res => {
            if(res.status===200){
                const data = await res.json();
                setPokemon(data)
            }
        })
    }, []);
    if(!pokemon){
        return <>Loading pokemon</>
    }
    return (
        <>
        <div>name: {pokemon.name}</div>
        <div>weight:{pokemon.weight}</div>
        <div>height:{pokemon.height}</div>
        <div>ability count:{pokemon.abilities.length}</div>
        {
            pokemon.abilities.map((ability,i)=>{
                const abilityName = ability.ability.name;
                return <PokemonAbility key={`${abilityName}-${i}`} name={abilityName}/>
            })
        }
        </>
    )
}

export default Pokemon