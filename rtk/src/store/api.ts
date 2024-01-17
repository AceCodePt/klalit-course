import { createApi } from "@reduxjs/toolkit/query/react";

// const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

// queryFn -> Return the information
// query -> baseQuery -> Return the information

export const api = createApi({
  async baseQuery({ pathname }) {
    try {
      const response = await fetch(new URL(pathname, "http://localhost:3000"));
      if (response.ok) {
        const data = await response.json();
        return { data };
      }
      return { error: "An error has occured" };
    } catch (error) {
      return { error };
    }
  },
  endpoints(builder) {
    return {
      getPokemonList: builder.query({
        query() {
          return {
            pathname: "pokemons",
          };
        },
      }),
      getPokemonDetail: builder.query({
        query(pokemonName) {
          return {
            pathname: "/pokemons/" + pokemonName.toLowerCase(),
          };
        },
      }),
    };
  },
});

const { useGetPokemonListQuery, useGetPokemonDetailQuery } = api;
export { useGetPokemonListQuery, useGetPokemonDetailQuery };

export interface PokemonListType {
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetailsType {
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}
