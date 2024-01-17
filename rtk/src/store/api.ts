import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

// queryFn -> Return the information
// query -> baseQuery -> Return the information

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints(builder) {
    return {
      getPokemonList: builder.query<PokemonListType, any>({
        query() {
          return {
            url: "/pokemons",
          };
        },
      }),
      getPokemonDetail: builder.query<
        PokemonDetailsType,
        { pokemonName: string }
      >({
        query({ pokemonName }) {
          return {
            url: "/details/" + pokemonName.toLowerCase(),
          };
        },
      }),
      updatePokemon: builder.mutation<
        any,
        { pokemonName: string; height: number; weight: number }
      >({
        query({ pokemonName, height, weight }) {
          return {
            url: "/details/" + pokemonName.toLowerCase(),
            method: "PATCH",
            body: JSON.stringify({ id: pokemonName, height, weight }),
          };
        },
      }),
      deletePokemonFromList: builder.mutation<any, { pokemonName: string }>({
        query({ pokemonName }) {
          return {
            url: "/pokemons/" + pokemonName.toLowerCase(),
            method: "DELETE",
          };
        },
      }),
    };
  },
});

const {
  useGetPokemonListQuery,
  useGetPokemonDetailQuery,
  useUpdatePokemonMutation,
} = api;
export {
  useGetPokemonListQuery,
  useGetPokemonDetailQuery,
  useUpdatePokemonMutation,
};

export type PokemonListType = {
  name: string;
  url: string;
}[];

export interface PokemonDetailsType {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
