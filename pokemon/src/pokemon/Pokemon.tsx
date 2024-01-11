import { useEffect, useState } from "react";
import PokemonAbility from "../PokemonAbility";
import { PokemonType } from "../types";
import { useHealth } from "./HealthLogic";

function Pokemon(props: { name: string|undefined; health: number; fainted?: () => void }) {
  const { health, drinkHealthPotion, takeDamage} = useHealth(props.health);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);

  useEffect(() => {
    if (health <= 0) {
        props.fainted?.()
    }
  },[health])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name?.toLowerCase()}`).then(
      async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          setPokemon(data);
          return;
        }
        setError(true)
      }
    );
  }, []);
  if(error){
    return <>Error Loading pokemon</>;
  }
  if (!pokemon) {
    return <>Loading pokemon</>;
  }
  if (health <= 0) {
    return <>Pokemon {props.name} Fainted</>;
  }
  return (
    <>
      <div>
        <div>name: {pokemon.name}</div>
        <div>weight:{pokemon.weight}</div>
        <div>height:{pokemon.height}</div>
        <div style={{ display: "flex", gap: "4rem" }}>
          <button onClick={drinkHealthPotion}>Drink health potion</button>
          <div>health: {health}</div>
          <button
            onClick={takeDamage}
          >
            Take Damage
          </button>
        </div>
        <div>ability count:{pokemon.abilities.length}</div>
        {pokemon.abilities.map((ability, i) => {
          const abilityName = ability.ability.name;
          return (
            <PokemonAbility key={`${abilityName}-${i}`} name={abilityName} />
          );
        })}
      </div>
    </>
  );
}

export default Pokemon;
