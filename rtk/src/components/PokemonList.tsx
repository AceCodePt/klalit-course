import { Link } from "react-router-dom";
import { fakePokemonsList } from "../data/pokemon";

export default function PokemonList() {
  const data = fakePokemonsList;
  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.map((pokemon: any) => {
          return (
            <li key={pokemon.name}>
              <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
              <button
                onClick={() => {
                  // removePokemon({ pokemonName: pokemon.name });
                }}
              >
                remove
              </button>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
