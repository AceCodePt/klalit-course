import { Link } from "react-router-dom";
import {
  useDeletePokemonFromListMutation,
  useGetPokemonListQuery,
} from "../store/api";

export default function PokemonList() {
  const { data, isLoading, isError, isSuccess } = useGetPokemonListQuery("");
  const [deletePokemon] = useDeletePokemonFromListMutation();

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
        {data.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
              <button
                onClick={() => {
                  deletePokemon({ pokemonName: pokemon.name });
                }}
              >
                remove
              </button>
            </li>
          );
        })}
      </ol>
      <PokemonList2 />
    </article>
  );
}

function PokemonList2() {
  const { data } = useGetPokemonListQuery("");
  return <div>{JSON.stringify(data)}</div>;
}
