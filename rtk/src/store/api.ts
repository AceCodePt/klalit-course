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
  tagTypes: ["pokemons", "details"],
  endpoints(builder) {
    return {
      getPokemonList: builder.query<PokemonListType, any>({
        query() {
          return {
            url: "/pokemons",
          };
        },
        providesTags: ["pokemons"],
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
        providesTags: ["details"],
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
        invalidatesTags: ["details"],
      }),
      deletePokemonFromList: builder.mutation<any, { pokemonName: string }>({
        query({ pokemonName }) {
          return {
            url: "/pokemons/" + pokemonName.toLowerCase(),
            method: "DELETE",
          };
        },
        invalidatesTags: ["pokemons"],
      }),
    };
  },
});

const {
  useGetPokemonListQuery,
  useGetPokemonDetailQuery,
  useUpdatePokemonMutation,
  useDeletePokemonFromListMutation,
} = api;
export {
  useGetPokemonListQuery,
  useGetPokemonDetailQuery,
  useUpdatePokemonMutation,
  useDeletePokemonFromListMutation,
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
