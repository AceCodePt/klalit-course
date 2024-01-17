import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetPokemonDetailQuery,
  useUpdatePokemonMutation,
} from "../store/api";

export default function PokemonDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [details, setDetails] = useState({ height: 0, weight: 0 });
  const [updatePokemon] = useUpdatePokemonMutation();
  if (!params.pokemonName) {
    return <> Pokemon name must be defined and exist</>;
  }
  const { data, isError, isLoading, isSuccess } = useGetPokemonDetailQuery({
    pokemonName: params.pokemonName,
  });

  useEffect(() => {
    setDetails({ height: data?.height || 0, weight: data?.weight || 0 });
  }, [data]);

  if (isLoading) {
    return <>Loading the pokemon datails</>;
  }
  if (isError || !isSuccess) {
    return <>An Error occured pokemon details</>;
  }

  return (
    <>
      <article>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
        <ul>
          <li>height: {data.height}</li>
          <li>weight: {data.weight}</li>
          <li>types: {data.types.map((item: any) => item.type.name)}</li>
        </ul>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <div style={{ display: "flex", flexFlow: "column" }}>
            <label>
              height:
              <input
                value={details.height.toString()}
                onChange={(e) => {
                  if (!Number.isNaN(+e.target.value)) {
                    setDetails((prev) => {
                      return { ...prev, height: +e.target.value };
                    });
                  }
                }}
              />
            </label>
            <label>
              weight:
              <input
                value={details.weight}
                onChange={(e) => {
                  if (!Number.isNaN(+e.target.value)) {
                    setDetails((prev) => {
                      return { ...prev, weight: +e.target.value };
                    });
                  }
                }}
              />
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            updatePokemon({
              pokemonName: data.name,
              height: details.height,
              weight: details.weight,
            });
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </article>
    </>
  );
}
