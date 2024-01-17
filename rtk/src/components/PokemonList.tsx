import { Link } from "react-router-dom";
import { useGetPokemonListQuery } from "../store/api";

export default function PokemonList() {
  const { data, isLoading, isError, isSuccess } = useGetPokemonListQuery("");

  if (isLoading) {
    return <>Loading the pokemon list</>;
  }
  if (isError || !isSuccess) {
    return <>An Error occured</>;
  }

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
