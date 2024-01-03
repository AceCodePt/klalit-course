import { useParams } from "react-router-dom";
import Pokemon from "./Pokemon";

export default function PokemonWithPrams() {
  let { pokemonName } = useParams();
  return (
    <>
      <Pokemon name={pokemonName} health={100} />
    </>
  );
}
